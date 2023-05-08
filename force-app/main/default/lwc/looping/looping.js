import Company from '@salesforce/schema/Lead.Company';
import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Audi", "Maruti", "Hyundai","Mercedes","BMW","Ferrari","Porche"]

    ceoList = [
        {
            id:1,
            company:"Google",
            name: "Sundar Pichai"
        },
        {
            id:2,
            company:"Apple",
            name: "Tim Cook"
        },
        {
            id:3,
            company:"Microsoft",
            name: "Satya Nadela"
        },
        {
            id:4,
            company:"Facebook",
            name: "Mark Zuckerberg"
        },
        {
            id:5,
            company:"Amazon",
            name: "Andy Jassy"
        },
        {
            id:6,
            company:"Twitter",
            name: "Elon Musk"
        }
    ]
}