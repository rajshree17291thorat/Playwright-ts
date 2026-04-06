import{Page,expect,Locator} from "@playwright/test";
import { HomePage } from "./HomePage";

export class logout{
    private readonly page:Page;
    //1.locators
    private readonly msgheading:Locator;
    private readonly btncontinue:Locator;


    constructor(page:Page){
        this.page=page;
        this.msgheading=page.locator('h1:has-text("Account Logout")');
        this.btncontinue=page.locator('a.btn-primary');
    }

    //3.Action methods to perform actions on the Logout page
    async iscontinuebuttonvisible():Promise<boolean>{
       return await this.btncontinue.isVisible();  //return true if the continue button is visible, otherwise return false.
    
    }

    async clickContinue():Promise<HomePage >{
        await this.btncontinue.click();  //click on the continue button to navigate back to the home page after logging out of the account.
        return new HomePage(this.page);  //return a new instance of the HomePage class, passing the current page as a parameter to the constructor to initialize the page object.
   
    }


}
