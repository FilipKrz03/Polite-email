//Geting Elements

const grettingChoose = document.querySelectorAll('.grettingButton');
const grettingAfter = document.getElementById('afterGretting');
const grettingBackButton = document.getElementById('backGretting');

const explicationChoose = document.querySelectorAll('.expplicationButton');
const explicationAfter = document.getElementById('afterExplication');
const explicationBackButton = document.getElementById('backExplication');

const footerChoose = document.querySelectorAll('.footerButton');
const footerAfter = document.getElementById('afterFooter');
const footerBackButton = document.getElementById('backFooter');

const farewelChoose = document.querySelectorAll('.farewelButton');
const farewelAfter = document.getElementById('afterFarewel');
const farewelBackButton = document.getElementById('backFarewel');


// geting Inputs;

const emailAdress = document.getElementById('emailInput');
const topic = document.getElementById('topic');
const bodyMessage = document.getElementById('bodyMessage');
const sign = document.getElementById('sign');


//navButtons


const navButtons = document.querySelectorAll('.navItem');
const clearButton = document.getElementById('clear');
const coppyButton = document.getElementById('copy');
const sendButton = document.getElementById('send');







//Event listiners

grettingChoose.forEach(button => {
    button.addEventListener("click" ,  grettingContent);
})
grettingBackButton.addEventListener("click" , backGretting);



explicationChoose.forEach(button => {
    button.addEventListener("click" , explicationContent);
})
explicationBackButton.addEventListener("click", backExplication);



footerChoose.forEach(button => {
    button.addEventListener("click" , footerContent )
})
footerBackButton.addEventListener("click" , backFooter);


farewelChoose.forEach(button => {
    button.addEventListener("click" , farewelContent);
})
farewelBackButton.addEventListener("click" , backFarewel );




navButtons.forEach(button => {
    
    button.addEventListener("click" , () => {
       
           button.classList.add('navAnim');
       
       setTimeout(()=>{
           button.classList.remove('navAnim')
       },1100)
    })
   })




   
   


clearButton.addEventListener("click" , clearFun);
sendButton.addEventListener("click" , sendMail);


// async Nav fun and 

const copyMail = async () => {

    buttonChooseObject.email = document.getElementById('emailInput').value;
    buttonChooseObject.topic = document.getElementById('topic').value;
    buttonChooseObject.message = document.getElementById('bodyMessage').value;
    buttonChooseObject.sign = document.getElementById('sign').value;

    let input = `  
    ${buttonChooseObject.topic}  
    ${buttonChooseObject.gretting}  
   ${buttonChooseObject.explication}  
   ${buttonChooseObject.message}  
   ${buttonChooseObject.footer}  
   ${buttonChooseObject.farewel} 
    ${buttonChooseObject.sign} 
   `
    try{
        await navigator.clipboard.writeText(input);
    }catch(err){
        console.log('failed' + err);
    }
 }

coppyButton.addEventListener("click" , copyMail);






//User Data Object

const buttonChooseObject = {

    gretting : '',
    explication : '',
    footer : '',
    farewel: '',
    email: '',
    topic : '',
    message : '',
    sign: ''
};





//BUTTON INPUT FUNCTIONS 

function grettingContent(){
   buttonChooseObject.gretting = this.innerText;
    grettingButtonsArea.classList.add('display');
    grettingAfter.classList.remove('display');
    document.getElementById('grettingText').innerText = buttonChooseObject.gretting;

}



function backGretting(){
    grettingButtonsArea.classList.remove('display');
    grettingAfter.classList.add('display');
}

function explicationContent() {
    buttonChooseObject.explication = this.innerText;
    explicationButtonsArea.classList.add('display');
    explicationAfter.classList.remove('display');
    document.getElementById('explicationText').innerText = buttonChooseObject.explication;

}


function backExplication(){
    explicationButtonsArea.classList.remove('display');
    explicationAfter.classList.add('display');
}


function footerContent(){
    buttonChooseObject.footer = this.innerText;   
    footerButtonsArea.classList.add('display');
    footerAfter.classList.remove('display');
    document.getElementById('footerText').innerText = buttonChooseObject.footer;
}

function backFooter() {
    footerButtonsArea.classList.remove('display');
    footerAfter.classList.add('display');
}

function farewelContent(){
    buttonChooseObject.farewel = this.innerText;
    farewelButtonsArea.classList.add('display');
    farewelAfter.classList.remove('display');
    document.getElementById('farewelText').innerText = buttonChooseObject.farewel;

}

function backFarewel(){
    farewelButtonsArea.classList.remove('display');
    farewelAfter.classList.add('display');
}



 // nav (clear  send ) Functions



 function clearFun(){
    backFooter();
    backFarewel();
    backGretting();
    backExplication();
    sign.value = '';
    topic.value = '';
    bodyMessage.value = '';
    emailAdress.value = ''

    let inputs = document.querySelectorAll('input');
    inputs.forEach(input =>{

        input.classList.add('inputAnim');
        setTimeout(()=>{
            input.classList.remove('inputAnim')
        },1050)
        }
    )
 


 let textarea = document.querySelectorAll('textarea');
textarea.forEach(text =>{

     text.classList.add('inputAnim');
     setTimeout(()=>{
        text.classList.remove('inputAnim')
     },1050)
     }
 )

}

function sendMail(){

    
    buttonChooseObject.email = document.getElementById('emailInput').value;
    buttonChooseObject.topic = document.getElementById('topic').value;
    buttonChooseObject.message = document.getElementById('bodyMessage').value;
    buttonChooseObject.sign = document.getElementById('sign').value;
    
    document.location = "mailto:"+buttonChooseObject.email+"?subject="+buttonChooseObject.topic+
    "&body="+
    buttonChooseObject.gretting+"%0D%0A"                                                                                                                                                                                                                                                                                                                                                                                 
    +buttonChooseObject.explication+"  "                                                                                                                                                                                                                                                                                                                                                      
    +buttonChooseObject.message+"%0D%0A"                                                                                                                                                                                                                                                                                                    
    +buttonChooseObject.footer+"%0D%0A"                                                                                                                                                                                                                                                            
    +buttonChooseObject.farewel+"%0D%0A"                                                                                                                                                                                                                                                         
    +buttonChooseObject.sign;
}



    
    
    
   