let textInput = document.getElementById("txtInput");
let Translatebtn = document.getElementById("Translator");
let OutputDiv = document.querySelector("#txtTranslated");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    console.log(serverURL + "?" + "text=" + text);
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occurred", error);
  alert("something went wrong");
}

function clickHandler() {
  let InputText = textInput.value;

  fetch(getTranslationURL(InputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      OutputDiv.innerHTML = translatedText;
    })
    .catch(errorHandler);
}

Translatebtn.addEventListener("click", clickHandler);
