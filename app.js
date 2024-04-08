// JavaScript function to handle the click event
function handleButtonClick() {
    //when promise is resolved ie random value generated new event created
    generateRandomValue().then(value => {
        const event = new CustomEvent('valueGenerated', { detail: value });
        document.dispatchEvent(event);
    });
    //Custom Event Listener
    //Retrieves value from events detail
    document.addEventListener("valueGenerated",(event)=>{
        const randomNumber = document.getElementById('result');
        //updates the html with the generated value
        randomNumber.textContent = `Value Generated:${event.detail} `;
    });
}
 
// JavaScript Promises with Dynamic Typing
function generateRandomValue(){
    //Simulate generating a random number asynchronously with a promise
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {//simulate asynchronous operation
            //Dynamic typing as variable can hold values of any type and  it can change at runtime
            const generatedValue = Math.random();
            if(generatedValue<0.5){
                resolve(generateRandomNumber());
            }else{
                resolve(generateRandomString());
            }  
        }, 1000)//delay of one second
       
    })
    myPromise.then((result)=>{
        console.log(result);
    }).catch((error) => {
        console.error('Promise rejected with error:', error);
    })
    return myPromise;
    
}

//Generate random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

//Generate random string
function generateRandomString() {
    return Math.random().toString(36).substring(7);
}


