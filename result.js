//GET TOKEN FROM URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let token = urlParams.get('token')

let xhr = new XMLHttpRequest();
xhr.open("GET", 'http://localhost:3000/result?token=' + token, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let response = JSON.parse(xhr.response)[0]
        console.log(response)
         addResults(JSON.parse(response.giver), JSON.parse(response.receiver))
      console.log(xhr.response); 
    }
  }
xhr.send();



function clicklogo(){
    let newUrl = "http://127.0.0.1:5500/frontend/index.html"
    window.location.replace(newUrl)
}
















//AFFICHAGE DES RESULTATS


function addResults(giver, receiver) {


    for (let i = 0; i < receiver.length; i++) {
        let resultUl = document.getElementById("resultUl");
        let li = document.createElement("li");


        let myText = " will be the secret santa of "
        let span1 = document.createElement("span");
        span1.innerHTML = receiver[i].charAt(0).toUpperCase() + receiver[i].slice(1);
        let span2 = document.createElement("span");
        span1.classList.add("span2")

        span2.innerHTML = giver[i].charAt(0).toUpperCase() + giver[i].slice(1);

        li.appendChild(span1);
        li.appendChild(document.createTextNode(myText));
        li.appendChild(span2);
        resultUl.appendChild(li);
        

    }

}


