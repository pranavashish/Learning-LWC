import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   
    fullname = "Pranav Ashish";
    title = "Salesforce Dev";

    changeHandler(event){
        this.title = event.target.value;
    }

    @track address={
        city:'Melbourne',
        postcode:3008,
        country:'Austrailia'
    }



    trackHandler(event){
        this.address.city = event.target.value;
    }

    // trackHandler1(event){
    //     this.address = {...this.address,"city": event.target.value};
    // }

    users = ["Pranav", "Roushan", "Anil"];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[1].toUpperCase();
    }

    get sumOfNums(){
        return this.num1 + this.num2;
    }

    
    
}