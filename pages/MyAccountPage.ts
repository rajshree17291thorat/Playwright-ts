import { Expect,Page,Locator } from "@playwright/test";
import { HomePage } from "./HomePage";
import { logout } from "./LogoutPage";  

export class MyAccountPage{

    private readonly page:Page;
    //1.locators

    private readonly msgheading:Locator;
    private readonly lnklogout:Locator;

    //2.constructor to initialize the page object
    constructor(page:Page){
        this.page=page;
        this.msgheading=page.locator('h2:has-text("My Account")');
        this.lnklogout=page.getByRole('link', { name: 'Logout' });
    }   

    //3.Action methods to perform actions on the My Account page


    async ismyaccountexists():Promise<boolean>{
        try{
            await this.msgheading.waitFor({ state: 'visible', timeout: 5000 });  //wait for the My Account heading to be visible for a maximum of 5 seconds.
            return await this.msgheading.isVisible();  //return true if the My Account heading is visible, otherwise return false.
        }
        catch(error){
            console.error("Error in ismyaccountexists method:", error);
            return false;  //return false if there is an error while checking for the My Account heading.
        }
   
    }

    async clickLogout():Promise<logout>{
        try{
            await this.lnklogout.waitFor({ state: 'visible', timeout: 5000 });
        await this.lnklogout.click();  //click on the Logout link to log out of the account.
        return new logout(this.page);  //return a new instance of the LogoutPage class, passing the current page as a parameter to the constructor to initialize the page object.   
        }
        catch(error){
            console.error("Error in clickLogout method:", error);
            throw error;  //re-throw the error to be handled by the calling code.
        }

    }


    async GetHeadingText():Promise<string>{
        return await this.msgheading.textContent() || "";  //return the heading text or an empty string if the element is not found. 
    }   
}
