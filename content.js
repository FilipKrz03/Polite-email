const grettingButtonsArea = document.getElementById('grettingsButtons');
const explicationButtonsArea = document.getElementById('excplicationButtons');
const footerButtonsArea = document.getElementById('footerButtons');
const farewelButtonsArea = document.getElementById('farewelButtons');


function  createGreetingButtons () {

    grettingButtonsArea.innerHTML =  '';

    grettingButtons.map(x =>{
        const {content} = x;
        return grettingButtonsArea.innerHTML += `
    
        <div class="contentButton grettingButton">
                    ${content}
                    <img src="/plus-circle-dotted.svg" alt="plus" class = "plus">   
                </div>    
                    
     `
    } )
}

function createExplicationButtons () {
    explicationButtons.map(x=>{
        const {content} = x;
        return explicationButtonsArea.innerHTML += `
        <div class="contentButton expplicationButton">
        ${content}
        <img src="/plus-circle-dotted.svg" alt="plus" class = "plus">   
    </div>
        `
    })
}

function createFooterButtons () {
    footerButtons.map(x => {
        const {content} = x;
        return footerButtonsArea.innerHTML += `
        <div class="contentButton footerButton">
        ${content}
        <img src="/plus-circle-dotted.svg" alt="plus" class = "plus">   
    </div>
        `
    })
}

function createFarewelButtons () {
    farewellButtons.map(x => {
        const {content} = x;
        return farewelButtonsArea.innerHTML += `
        <div class="contentButton farewelButton">
        ${content}
        <img src="/plus-circle-dotted.svg" alt="plus" class = "plus">   
    </div>
        `
    })
}

function create () {
    createGreetingButtons();
    createExplicationButtons();
    createFooterButtons();
    createFarewelButtons();
   
}


create()