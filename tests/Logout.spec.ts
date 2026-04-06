/** Testcase steps
 * Tags:    @master @regression @sanity
 * 1. Navigate to the application URL.
 * 2. Click on the 'My Account' link and select 'Login' from the dropdown.
 * 3. Enter valid email and password credentials.
 * 4. Click on the 'Login' button.
 * 5. Click on logout button  * */
 
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config'; 
import {logout } from '../pages/LogoutPage';


let homepage:HomePage;  //declare homepage as a global variable to be used in test files.
let loginPage:LoginPage; //declare loginPage as a global variable to be used in test files.
let myAccountPage:MyAccountPage; //declare myAccountPage as a global variable to be used in test files.
let config:TestConfig; //declare config as a global variable to be used in test files.
let logoutpage:logout;


test.beforeEach(async ({ page }) => {
    config=new TestConfig();    //create an object of TestConfig class to access the details defined in it.
    await page.goto(config.appUrl);  //navigate to the application URL before each test.
    homepage=new HomePage(page);
    loginPage=new LoginPage(page);
    myAccountPage=new MyAccountPage(page); 
    logoutpage=new logout(page);
});
test.afterEach (async ({page})=>
    {
        await page.close();

    });

    test ('User Logout @master @regression @sanity', async({page})=>
    {
      await homepage.clickMyAccount();
     await  homepage.clickLogin();

    await loginPage.Login(config.email,config.password);

    expect(await myAccountPage.ismyaccountexists()).toBeTruthy();
    logoutpage =await myAccountPage.clickLogout();

    expect(await logoutpage.iscontinuebuttonvisible()).toBe(true);

    homepage=await logoutpage.clickContinue();
    expect(await homepage.isHomePageExists()).toBe(true);    

    });
 
