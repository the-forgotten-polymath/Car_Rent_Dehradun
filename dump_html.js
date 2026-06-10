const axios = require('axios');
const fs = require('fs');

async function dump() {
    const res = await axios.get('https://www.cartrade.com/maruti-suzuki-cars/dzire/360-view/', {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
    });
    fs.writeFileSync('dzire.html', res.data);
    console.log('Saved dzire.html');
}
dump();
