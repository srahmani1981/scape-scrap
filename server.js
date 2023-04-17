const puppeteer = require('puppeteer');

const loginUrl = 'https://app.socio.events/MjE2MDc/auth/login';
const emailSelector = 'input[name="email"]';
const passwordSelector = 'input[name="password"]';
const loginButtonSelector = 'button[type="submit"]';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(loginUrl);
  console.log('Page loaded');

  await page.waitForSelector(emailSelector);
  console.log('Email input found');

  await page.waitForSelector(passwordSelector);
  console.log('Password input found');

  const emailInput = await page.$(emailSelector);
  await emailInput.type('cwalton@twilio.com');

  const passwordInput = await page.$(passwordSelector);
  await passwordInput.type('V@der132!!');

  const loginButton = await page.$(loginButtonSelector);
  await loginButton.click();

  await page.waitForNavigation();
  console.log('Logged in');

  // Now you can navigate to the secure attendees page and scrape the data
  
  await browser.close();
})();
