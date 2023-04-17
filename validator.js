const puppeteer = require('puppeteer');

const loginUrl = 'https://app.socio.events/MjE2MDc/auth/login';
const emailSelector = 'input[id="email-input"]'; // update with your email input selector
const passwordSelector = 'input[id="password-input"]'; // update with your password input selector

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
  console.log('Email input value:', await page.evaluate(emailInput => emailInput.value, emailInput));
  console.log(emailSelector);
  const passwordInput = await page.$(passwordSelector);
  console.log('Password input value:', await page.evaluate(passwordInput => passwordInput.value, passwordInput));
  console.log(passwordSelector);
  await browser.close();
})();
