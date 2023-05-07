import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
   
    fullname = "Pranav Ashish";
    title = "Salesforce Dev";

    changeHandler(event){
        this.title = event.target.value;
    }
}