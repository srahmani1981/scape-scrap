const puppeteer = require('puppeteer');

const loginUrl = 'https://app.socio.events/MjE2MDc/auth/login';
const emailSelector = '#email-input';
const passwordSelector = '#password-input';
const loginButtonSelector = '#login-button';
const successIndicatorSelector = '.success-indicator'; // replace with actual selector for success indicator

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(loginUrl);
  console.log('Page loaded');

  await page.waitForSelector(emailSelector);
  console.log('Email input found');

  await page.type(emailSelector, 'cwalton@twilio.com');
  
  console.log('Email input filled');

  await page.waitForSelector(passwordSelector);
  console.log('Password input found');

  await page.type(passwordSelector, 'V@der132!!');
  console.log('Password input filled');

  await page.waitForSelector(loginButtonSelector);
  console.log('Login button found');

  await Promise.all([
    page.waitForNavigation({timeout: 60000}), // Wait for the page to finish navigating
    page.click(loginButtonSelector), // Click the login button
  ]);

  console.log('Clicked login button and waiting for success indicator');

  await page.waitForSelector(successIndicatorSelector, {timeout: 60000});
  console.log('Login successful');


  // Scrape the secure attendees page here
  // ...

  await browser.close();
})();
