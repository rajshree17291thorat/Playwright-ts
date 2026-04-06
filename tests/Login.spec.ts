

/**testcase Steps 
 * Tags : @master @regression @sanity
1. Navigate to the application URL.
2. Click on the 'My Account' link and select 'Login' from the dropdown.
3. Enter valid email and password credentials.
4. Click on the 'Login' button.
5. Verify that the user is successfully logged in by checking for the presence of the 'My Account' page or a welcome message.

*/
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';

let homepage:HomePage;  //declare homepage as a global variable to be used in test files.
let loginPage:LoginPage; //declare loginPage as a global variable to be used in test files.
let myAccountPage:MyAccountPage; //declare myAccountPage as a global variable to be used in test files.
let config:TestConfig; //declare config as a global variable to be used in test files.          

test.beforeEach(async ({ page }) => {
    config=new TestConfig();    //create an object of TestConfig class to access the details defined in it.
    await page.goto(config.appUrl);  //navigate to the application URL before each test.
    homepage=new HomePage(page);  //create an object of HomePage class  & Initialize before hook as a global variable to be used in test files.
    loginPage=new LoginPage(page);
    myAccountPage=new MyAccountPage(page);
    
});

test.afterEach(async ({ page }) => {

    await page.waitForTimeout(3000); //wait for 3 seconds to see the result before closing the browser.
    await page.close();  //close the browser after each test to clean up the test environment.              

});

test('Login with valid credentials @master @regression @sanity', async ({ page }) => {
    
    await homepage.clickMyAccount();
    await homepage.clickLogin();
    await loginPage.Login(config.email,config.password);
  //  await loginPage.ClickForgotPassword();

    //verify successful login by checking for the presence of the 'My Account' page 
    // or a welcome message.
    expect(await myAccountPage.ismyaccountexists()).toBeTruthy();
});
