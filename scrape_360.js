const axios = require('axios');
const fs = require('fs');
const path = require('path');

const CARS = [
    { key: 'dzire', url: 'https://www.cartrade.com/maruti-suzuki-cars/dzire/360-view/' },
    { key: 'ertiga', url: 'https://www.cartrade.com/maruti-suzuki-cars/ertiga/360-view/' },
    { key: 'celerio', url: 'https://www.cartrade.com/maruti-suzuki-cars/celerio/360-view/' }
];

const MEDIA_DIR = path.join(__dirname, 'public', 'media');

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function downloadFile(url, dest) {
    if (fs.existsSync(dest)) return true; // Already downloaded
    try {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream',
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const writer = fs.createWriteStream(dest);
        response.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve(true));
            writer.on('error', reject);
        });
    } catch (err) {
        // If image not found, return false
        return false;
    }
}

async function scrape() {
    ensureDir(MEDIA_DIR);

    for (const car of CARS) {
        console.log(`\nFetching metadata for ${car.key}...`);
        try {
            const res = await axios.get(car.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            const html = res.data;
            
            // Find the ImagePath inside the JSON data block
            const match = html.match(/"ImagePath":"\/n\/cw\/ec\/(\d+)\/([^"]+)\.jpe?g/i);
            
            if (match) {
                const id = match[1];
                let nameStr = match[2]; // e.g. dzire-2024-right-front-three-quarter
                // Often the spin base name is just the car name (like dzire-2024)
                // Let's strip the "-right-front..." part
                nameStr = nameStr.replace(/-right-front.*|-exterior.*/, '');
                
                console.log(`Found ID: ${id}, Name pattern: ${nameStr}`);
                
                const carDir = path.join(MEDIA_DIR, `${car.key}-360`);
                ensureDir(carDir);
                
                // Let's try to find the correct base URL
                const testUrls = [
                    `https://imgd.aeplcdn.com/1280x720/n/cw/ec/${id}/${nameStr}-exterior-spin-1.jpeg`,
                    `https://imgd.aeplcdn.com/1280x720/n/cw/ec/${id}/${nameStr}-exterior-spin-1.jpg`,
                    `https://imgd.aeplcdn.com/1280x720/n/cw/ec/${id}/${car.key}-exterior-spin-1.jpeg`,
                    `https://imgd.aeplcdn.com/1280x720/n/cw/ec/${id}/maruti-suzuki-${car.key}-exterior-spin-1.jpeg`
                ];
                
                let workingBaseUrl = null;
                for (const tUrl of testUrls) {
                    try {
                        const check = await axios.head(tUrl);
                        if (check.status === 200 && check.headers['content-type'].includes('image')) {
                            workingBaseUrl = tUrl;
                            break;
                        }
                    } catch(e) {}
                }
                
                if (workingBaseUrl) {
                    console.log(`Found working base URL: ${workingBaseUrl}`);
                    console.log(`Downloading 72 frames for ${car.key}...`);
                    const promises = [];
                    for (let i = 1; i <= 72; i++) {
                        const frameUrl = workingBaseUrl.replace('-spin-1.', `-spin-${i}.`);
                        const dest = path.join(carDir, `frame-${i}.jpeg`);
                        promises.push(downloadFile(frameUrl, dest));
                    }
                    await Promise.all(promises);
                    console.log(`Finished downloading frames for ${car.key}`);
                } else {
                    console.log(`Could not verify a working image URL pattern for ${car.key}.`);
                }
            } else {
                console.log(`Could not find ImagePath match in HTML for ${car.key}`);
            }
        } catch (e) {
            console.error(`Error for ${car.key}:`, e.message);
        }
    }
}

scrape();
