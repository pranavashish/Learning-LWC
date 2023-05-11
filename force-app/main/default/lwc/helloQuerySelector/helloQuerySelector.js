import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    username = ["John","Roman","Nick","Mike"]
    fetchDetailHandler (){
        const elem = this.template.querySelector('h1')
        const userElement = this.template.querySelectorAll('.name')
        console.log(elem.innerText)
        Array.from(userElement).forEach(item => {
                console.log(item.innerText)
        });

        const childish = this.template.querySelector('.child');
        childish.innerHTML = '<p>DIl toh bacha hai ji</p>'
       
    }
}