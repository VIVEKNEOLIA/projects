const btnE=document.getElementById("btn");
const jokeE=document.getElementById("joke")

const apiKey="xXWKt4oE/aKtPyJyNa2Knw==jO9rIkJoHEXIhSmD";
const options={
method:"GET",
headers:{

    "X-Api-Key":apiKey,
},

};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"



async function getJoke(){
    try {
        jokeE.innerText="Updating.......";
    btnE.disabled=true;
    btnE.innerText="LOADING.......";
const response= await fetch(apiURL,options);
const data=await response.json();
btnE.disabled=false;
btnE.innerText="Tell me a Joke"
// console.log(data[0].joke);
jokeE.innerText= data[0].joke;
        
    } catch (error) {
        jokeE.innerText="An error happened,try again later";
        btnE.disabled=false;
         btnE.innerText="Tell me a Joke"
        console.log(error);
        
    }
    
}
btnE.addEventListener("click",getJoke)