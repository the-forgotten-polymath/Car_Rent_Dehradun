const puppeteer = require('puppeteer');
const fs = require('fs');

const url = 'https://www.google.co.in/maps/place/Car+rent+dehradun/@30.3725174,77.9804765,12.49z/data=!4m12!1m2!2m1!1scar+rent+dehradun!3m8!1s0x39092b845b1b5f89:0xd98ae16ad8c5ed50!8m2!3d30.3317447!4d78.0245543!9m1!1b1!15sChFjYXIgcmVudCBkZWhyYWR1bloTIhFjYXIgcmVudCBkZWhyYWR1bpIBE2Nhcl9sZWFzaW5nX3NlcnZpY2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUktiMkoyUXpGblJSQULgAQD6AQQIABAx!16s%2Fg%2F11t7dp45sh?entry=ttu';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function scrapeReviews() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Add random user agent to avoid bot detection
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

  console.log('Navigating to Google Maps...');
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });

  console.log('Waiting for reviews to load...');
  try {
    await page.waitForSelector('.jftiEf', { timeout: 15000 });
  } catch (e) {
    console.log('Could not find review elements. The page layout might have changed or Google blocked the bot.');
    // Let's try an alternative selector just in case
  }

  let scrollContainer = await page.evaluateHandle(() => {
    const review = document.querySelector('.jftiEf');
    if (!review) return null;
    let parent = review.parentElement;
    while (parent) {
      if (parent.scrollHeight > parent.clientHeight) {
         return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  });

  const targetCount = 775;
  let currentCount = 0;
  let attempts = 0;

  console.log('Scrolling to load reviews... (this may take a few minutes)');
  
  while (currentCount < targetCount && attempts < 10) { // Give it 10 tries without new reviews before stopping
    const newCount = await page.evaluate((container) => {
      if (!container) return 0;
      // Scroll down
      container.scrollTop = container.scrollHeight;
      return document.querySelectorAll('.jftiEf').length;
    }, scrollContainer);

    if (newCount > currentCount) {
      currentCount = newCount;
      attempts = 0;
      process.stdout.write(`\rLoaded ${currentCount} reviews...`);
    } else {
      attempts++;
    }
    await delay(1200); // Wait for new reviews to load
  }

  console.log(`\nFinished scrolling. Total reviews loaded: ${currentCount}`);

  console.log('Clicking "More" buttons to expand full review text...');
  await page.evaluate(() => {
    const buttons = document.querySelectorAll('button[aria-expanded="false"]');
    buttons.forEach(btn => {
      if(btn.innerText && btn.innerText.toLowerCase().includes('more')) {
        btn.click();
      }
    });
  });
  
  await delay(2000); // Wait for expansions

  console.log('Extracting reviews...');
  const reviews = await page.evaluate(() => {
    const reviewElements = Array.from(document.querySelectorAll('.jftiEf'));
    
    return reviewElements.map(el => {
      // Reviewer Name
      const nameEl = el.querySelector('.d4r55');
      const name = nameEl ? nameEl.innerText.trim() : 'Anonymous';
      
      // Profile Photo
      const photoEl = el.querySelector('.NBa7we');
      const photoUrl = photoEl ? photoEl.src : '';

      // Rating
      const ratingEl = el.querySelector('span[role="img"]');
      let rating = 5;
      if (ratingEl && ratingEl.getAttribute('aria-label')) {
        const match = ratingEl.getAttribute('aria-label').match(/\d/);
        if (match) rating = parseInt(match[0]);
      }

      // Time
      const timeEl = el.querySelector('.rsqaWe');
      const time = timeEl ? timeEl.innerText.trim() : '';

      // Text
      const textEl = el.querySelector('.wiI7pd');
      const text = textEl ? textEl.innerText.trim() : '';
      
      // Images attached to the review
      const images = Array.from(el.querySelectorAll('.Tya61d')).map(img => {
        let style = img.getAttribute('style') || '';
        let bgMatch = style.match(/background-image:\s*url\("([^"]+)"\)/);
        return bgMatch ? bgMatch[1] : '';
      }).filter(url => url !== '');

      return { name, photoUrl, rating, time, text, images };
    });
  });

  fs.writeFileSync('reviews/reviews.json', JSON.stringify(reviews, null, 2));
  console.log(`Saved ${reviews.length} reviews to reviews/reviews.json`);

  await browser.close();
}

scrapeReviews().catch(console.error);
