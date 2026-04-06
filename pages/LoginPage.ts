import { Page,expect,Locator } from "@playwright/test";

export class LoginPage{
    private readonly page:Page;

    //1.locators
    private readonly txtEmail:Locator;
    private readonly txtPassword:Locator
    private readonly btnLogin:Locator;
    private readonly lnkForgotPassword:Locator;
    private readonly txtErrorMessage:Locator;


    //2.constructor to initialize the page object

    constructor(page:Page){
        this.page=page;

        //Initialize the locators
        this.txtEmail=page.locator('#input-email');
        this.txtPassword=page.locator('#input-password');
        this.btnLogin=page.locator('input[type="submit"][value="Login"]');
        this.lnkForgotPassword=page.getByText("Forgotten Password");
        this.txtErrorMessage=page.locator('div.alert-danger');
    }


    //3.Action methods to perform actions on the login page
    async Login(email:string,password:string):Promise<void>{
        await this.txtEmail.fill(email);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();        
    }

    async ClickForgotPassword():Promise<void>{
        await this.lnkForgotPassword.click();   
    }   

    async GetErrorMessage():Promise<string>{
        return await this.txtErrorMessage.textContent() || "";  //return the error message text or an empty string if the element is not found. 
    }      
}


