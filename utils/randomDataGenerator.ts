import { faker } from "@faker-js/faker";

//Import Faker library to generate random data

//static method can be accessed without creating an instance of the class.
//  We can directly call the method using the class name. 
// This is useful when we want to generate random data without creating an object of the class.

export class RandomDataUtil{
    static getFirstName():string{
        return faker.person.firstName();
    }
    
    static getLastName():string{
        return faker.person.lastName();
    }

    static getEmail():string{
        return faker.internet.email();
    }

    static getPhoneNumber():string{
        return faker.phone.number();
    }   
    
    static getPassword(length:number=10):string{
        return faker.internet.password({length,memorable:false});
    } 

    
    
    static getUserName():string{
        return faker.internet.username();
    }

    static getRandomCountry():string{
        return faker.location.country();
    }

    static getRandomstate():string{
        return faker.location.state();
    }   

    static getRandomCity():string{
        return faker.location.city();
    }   
    static getRandomPinCode():string{
        return faker.location.zipCode();
    }

    static getRandomAddress():string{
        return faker.location.streetAddress();
    }   

    static getRandomAlphanumericString(length:number):string{
        return faker.string.alphanumeric(length);
    }   

    static getRandomNumericString(length:number):string{
        return faker.string.numeric(length);
    }

    static getRandomUUID():string{
        return faker.string.uuid();
    }   


    static getProductName():string{
        return faker.commerce.productName();
    }

    static getProductQuantity():string{
        return faker.number.int({min:1,max:5}).toString();
    }
}
