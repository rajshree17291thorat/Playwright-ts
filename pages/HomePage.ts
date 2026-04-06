import{Page,expect, Locator} from '@playwright/test';
import { title } from 'node:process';

//Create POM object class for home page and export it to be used in test files. 
// This class will contain all the locators and methods related to home page.
//1.Locators   2.constructor to initialize the page object -in this convert locators into variables and initialize them using page.locator() method. This will help in reusing the locators in methods and also in case of any change in locator we need to change only in one place.
//  3.Methods to perform actions on the home page.

export class HomePage{


    //1.locators
     private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

        

    //2.constructor to initialize the page object
    //pass page as a parameter to the constructor and initialize the locators using page.
    // locator() method.
     constructor(page:Page){
        this.page=page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")').first();
      //  this.linkLogin = page.locator('a:has-text("Login")');
        this.linkLogin=page.locator('a:has-text("Login")').first();
        this.txtSearchbox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('#search button[type="button"]');
    }

    //3.Action methods to perform actions on the home page

    //1.method to check the home page

   // Check if HomePage exists
    async isHomePageExists(){

        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

 // Click "My Account" link
    async clickMyAccount(){
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw error;
        }
    }

 // Click "Register" link
    async clickRegister(){
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

    // Click "Login" link
    async clickLogin(){
        try {
            await this.linkLogin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.txtSearchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
    

}