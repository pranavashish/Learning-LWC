import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions = [
        {
            id:"Question1",
            question:"Which one the following is not a template loop?",
            answers:{
                a:'for:each',
                b:'iterator',
                c:'map loop'
            },
            correctAnswer:'c'
        },
        {
            id:"Question2",
            question:"Which of the file is invalid in LWC Component folder?",
            answers:{
                a:'svg',
                b:'.apex',
                c:'.js'
            },
            correctAnswer:'b'
        },
        {
            id:"Question3",
            question:"Which one the following is not a directive?",
            answers:{
                a:'if:true',
                b:'for:each',
                c:'@track'
            },
            correctAnswer:'c'
        }
    ];

    selected={}; // for storing answers
    isSubmitted = false;
    correctAnswer= 0; // to show the result
    totalQuestion = this.myQuestions.length; // to show total ques

    //getter

    get isScoredFull(){
        return `slds-text-heading_large ${this.totalQuestion === this.correctAnswer ? 'slds-text-color_success': 'slds-text-color_error'} ` 
    }

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.totalQuestion);
    }

    changeHandler(event){
        const {name, value} = event.target;
        console.log('name', name);
        console.log('value', value);
        //this.selected={...this.selected, ['Question1']:"b"}
        this.selected={...this.selected, [name]:value};
       // this.selected={"Question1":"a"}
        
    }

    submitHandler(event){
        event.preventDefault();
       let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
       this.correctAnswer = correct.length;
       this.isSubmitted = true;
    }

    resetHandler(){
        this.selected={};
        this.correctAnswer=0;
        this.isSubmitted= false;
    }
}