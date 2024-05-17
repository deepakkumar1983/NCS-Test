// @ts-check
const { test, expect } = require('@playwright/test');

test('Test 1', async ({ page }) => {
    await page.goto('https://d3sq581icfhdty.cloudfront.net/#/');
    await page.getByLabel('login or signup').click();

    await page.getByText('Sign Up').click();
    await page.locator("//*[text()='Sign Up' and @class='v-btn__content'] ").click();
    //verify error message - membership sign up page


    await expect(page.locator("//div[@id='username-err']")).toHaveText("Username is required");
    await expect(page.locator("//div[@id='password-err']")).toHaveText("Password is required");
    await expect(page.locator("//div[@id='confirm-err'] ")).toHaveText("Please confirm your password");

// verify Minimum char error msg
    await page.locator("//input[@id='input-91']").fill('abc')
    await page.locator("//input[@id='input-94']").fill('abc');
    await page.locator("//input[@id='input-97']").fill('def')

    await expect(page.locator("//div[@id='username-err']")).toHaveText("Username must be minimum of 6 characters");
    await expect(page.locator("//div[@id='password-err']")).toHaveText("Password must be minimum of 8 characters");
    await expect(page.locator("//div[@id='confirm-err'] ")).toHaveText("Your passwords do not match");
//verify user already exists
    await page.locator("//input[@id='input-91']").fill('donaldtrump')
    await page.locator("//input[@id='input-94']").fill('abc');
    await page.locator("//input[@id='input-97']").fill('def')
    await expect(page.locator("//div[@id='username-err']")).toHaveText("Username already exists");

// robinhood user
    await page.locator("//input[@id='input-91']").fill('robinhood')
    await page.locator("//input[@id='input-94']").fill('letmein2019');
    await page.locator("//input[@id='input-97']").fill('letmein2019')
    await page.locator("//*[text()='Sign Up' and @class='v-btn__content'] ").click();  
    await page.getByText('check_circleThanks robinhood, you can now login. Close').click();

  });



  test('Test 2', async ({ page }) => {
    await page.goto('https://d3sq581icfhdty.cloudfront.net/#/');
    await page.getByLabel('menu').click();
    await page.getByRole('tab', { name: 'Drinks' }).click();
    await page.locator('div:nth-child(2) > div > div:nth-child(6) > div > .v-card__actions > .container > div:nth-child(3) > .flex > .v-btn').click();
    await page.getByText('local_pizza').click();
    await page.locator('div:nth-child(2) > div > .v-card__actions > .container > div:nth-child(3) > .flex > .v-btn').first().click();
    await page.locator('div:nth-child(2) > div > .v-card__actions > .container > div:nth-child(3) > .flex > .v-btn').first().click();
    
    await expect(page.getByRole('link', { name: 'your order' })).toHaveText("/.*3/");
    await page.getByRole('link', { name: 'your order' }).click();
    //verify text

  });
