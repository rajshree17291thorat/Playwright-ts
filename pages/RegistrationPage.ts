import{Page,expect,Locator} from '@playwright/test';

//Create POM object class for Registration page and export it to be used in test files.

export class RegistrationPage{
    //1.locators
    private readonly page:Page;
    private readonly txtFirstName:Locator;
    private readonly txtLastName:Locator
    private readonly txtEmail:Locator;
    private readonly txtTelephone:Locator;
    private readonly txtPassword:Locator;
    private readonly txtConfirmPassword:Locator;
    private readonly chkPrivacyPolicy:Locator;
    private readonly btnContinue:Locator ;               
    private readonly msgAccountCreated:Locator;

    //2.constructor to initialize the page object
    constructor(page:Page){
        this.page=page;
        this.txtFirstName=page.locator('input[name="firstname"]');
        this.txtLastName=page.locator('input[name="lastname"]');
        this.txtEmail=page.locator('input[name="email"]');
        this.txtTelephone=page.locator('input[name="telephone"]');
        this.txtPassword=page.locator('input[name="password"]');
        this.txtConfirmPassword=page.locator('input[name="confirm"]');
        this.chkPrivacyPolicy=page.locator('input[type="checkbox"][name="agree"]');
        this.btnContinue=page.locator('input[type="submit"][value="Continue"]');
        this.msgAccountCreated=page.getByText("Your Account Has Been Created!");
            
    }

    //3.Action methods to perform actions on the registration page

    //1.method to fill the registration form
    async SetFirstName(firstName:string):Promise<void>{
        await this.txtFirstName.fill(firstName);
    }

    async SetLastName(lastName:string):Promise<void>{
        await this.txtLastName.fill(lastName);
    }
    async SetEmail(email:string):Promise<void>{
        await this.txtEmail.fill(email);
    }
    async SetTelephone(telephone:string):Promise<void>{
        await this.txtTelephone.fill(telephone);
    }   
    async SetPassword(password:string):Promise<void>{
        await this.txtPassword.fill(password);
    }
    async SetConfirmPassword(confirmPassword:string):Promise<void>{
        await this.txtConfirmPassword.fill(confirmPassword);
    }   
    async CheckPrivacyPolicy(){
        await this.chkPrivacyPolicy.check();
    }
    async ClickContinue(){
        await this.btnContinue.click();
    }
    async getAccountCreatedMsg():Promise<string>{
        return await this.msgAccountCreated.textContent() ?? '' ;
    }  
    
    async getconfirmationMsg():Promise<string>{
        await this.msgAccountCreated.waitFor({ timeout: 10000 });   //change
        return await this.msgAccountCreated.textContent() ?? '' ;
    }

}



