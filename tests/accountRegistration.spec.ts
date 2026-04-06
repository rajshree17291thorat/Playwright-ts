

/**Testcase:Account Registration
 * Tags : @master @regression @sanity

*Test Steps:
1. Launch the application and navigate to the home page.
2. Click on the 'My Acc ount' link and select 'Register' from the dropdown.
3. Fill in the registration form with valid details (first name, last name, email, telephone, password, confirm password).
4. Agree to the privacy policy and click on the 'Continue' button.
5. Verify that the account is created successfully by checking for a success message or redirection to a specific page.
*/

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';  
import { TestConfig } from '../test.config';



let homepage:HomePage;  //declare homepage as a global variable to be used in test files.
let registrationPage:RegistrationPage; //declare registrationPage as a global variable to be used in test files.
let config:TestConfig; //declare config as a global variable to be used in test files.


//Create hook to run before each test to set up the test environment,
// such as launching the browser and navigating to the application URL.
//  This can be done using the 'beforeEach' hook provided by Playwright.
//it contains url and all page objects initialization to be used in test files. 
// This will avoid code duplication and make the test files cleaner and more maintainable.
test.beforeEach(async ({ page }) => {
     config=new TestConfig();    //create an object of TestConfig class to access the details defined in it.   
    await page.goto(config.appUrl);  //navigate to the application URL before each test.
    homepage=new HomePage(page);  //create an object of HomePage class  & Initialize before hook as a global variable to be used in test files.
    registrationPage=new RegistrationPage(page);//create an object of RegistrationPage class and pass page as  a parameter to the constructor to initialize the page object.
});


test.afterEach(async ({ page }) => {

   // await page.waitForTimeout(3000); //wait for 3 seconds to see the result before closing the browser.
    await page.close();  //close the browser after each test to clean up the test environment.


});


test('Account Registration @master @regression @sanity', async ({ page }) => {
    

//2. Click on the 'My Account' link and select 'Register' from the dropdown.  await  homepage.clickMyAccount();  //click on My Account link
   await homepage.clickMyAccount();  //click on My Account link 
   await homepage.clickRegister(); //click on Register link


//3. Fill in the registration form with valid details (first name, last name, email, telephone, password, confirm password).
   await registrationPage.SetFirstName(RandomDataUtil.getFirstName());  //fill the registration form with valid details
   await registrationPage.SetLastName(RandomDataUtil.getLastName());
   await registrationPage.SetEmail(RandomDataUtil.getEmail());
   await registrationPage.SetTelephone(RandomDataUtil.getPhoneNumber());
   const password=RandomDataUtil.getPassword();
   await registrationPage.SetPassword(password);
   await registrationPage.SetConfirmPassword(password);
   await registrationPage.CheckPrivacyPolicy();  //agree to the privacy policy
   await registrationPage.ClickContinue();  //click on the 'Continue' button

   //4. Verify that the account is created successfully by checking for a success message or redirection to a specific page.
   const successMsg:string=await registrationPage.getAccountCreatedMsg();
   expect(successMsg).toContain("Your Account Has Been Created!");  //assert that the account is created successfully by checking for a success message.    
   
   await page.waitForTimeout(3000); //wait for 3 seconds to see the result before closing the browser.
   
   //5.verify confirmation message
    const confirmationMsg:string=await registrationPage.getconfirmationMsg();
    expect(confirmationMsg).toContain("Your Account Has Been Created!"); //assert that the account is created successfully by checking for a success message.
 //  await page.waitForTimeout(3000); //wait for 3 seconds to see the result before closing the browser.

});



   //npx playwright test accountRegistration.spec.ts --headed