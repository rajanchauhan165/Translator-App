//helper functions
let id;
function read(id){
    return document.getElementById(id).value;
}

function removetemp(){
    document.getElementById("temp").innerHTML = null;
}

//starts here
// "https://libretranslate.com/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&format=text&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

async function Translate(){
    document.getElementById("output-text").innerText = "";
    //1.Text to translate
    let input = read("input-text");

    const inputLang = read("inputlang");
    const outputLang = read("outputlang");

    //post request

    const res = await fetch("https://libretranslate.de/translate",{
        method: "POST",
        body: JSON.stringify({
            q:input,
            source:inputLang,
            target:outputLang,
            format:"text",
        }),
        // When server is dumb !!!!!!!!!!
        headers:{
            "Content-Type": "application/json"
        }
    })

    const data = await res.json();
    console.log(data)

    if(data.translatedText == undefined)
    {
        document.getElementById("output-text").innerText = "Input texts inside input box to translate.";
    }else{
        document.getElementById("output-text").innerText = data.translatedText

    }


    

}


function debounce(func, delay){
    if (id){
        clearTimeout(id)
    }
    id = setTimeout(function (){
        func()
    }, delay)


}




