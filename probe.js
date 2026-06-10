const axios = require('axios');

async function checkUrl(url) {
    try {
        const res = await axios.head(url);
        if (res.status === 200) {
            console.log("FOUND: " + url);
        }
    } catch(e) {
        // console.log("Failed: " + url);
    }
}

async function probe() {
    const ids = [170299, 2743, 481, 10, 16, 8];
    const names = ['dzire', 'maruti-suzuki-dzire', 'maruti-dzire', 'dzire-2024'];
    
    for (const id of ids) {
        for (const name of names) {
            await checkUrl(`https://imgd.aeplcdn.com/1280x720/n/cw/ec/${id}/${name}-exterior-spin-1.jpeg`);
            await checkUrl(`https://imgd.aeplcdn.com/1280x720/n/cw/ec/${id}/${name}-exterior-spin-1.jpg`);
        }
    }
    console.log("Probe complete");
}

probe();
