import fs from 'fs';
import { json } from 'stream/consumers';

export class DataProvider{

    static getTestData(filePath:string):any{
     let data:string=   JSON.parse(fs.readFileSync(filePath,'utf-8'));
     return data;
    }
}