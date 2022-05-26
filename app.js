
function createContentTitle(){
    let mainTitle = document.body.querySelector('h1');
    mainTitle.innerText ="Word Length Calculator"
}
createContentTitle();

let valContent = document.body.querySelector('textarea');
let buttonClick = document.body.querySelector('button');
let content = document.createElement('p');
content.style.textAlign = "center";
content.style.fontSize = "40px";
content.style.color = "white"
content.style.fontWeight = "bold"

buttonClick.addEventListener('click',function(){

    if(valContent.value.length > 0){
        content.innerText = valContent.value.length;
       document.body.append(content);
    };


    if(valContent.value.length >=156){
        content.innerText = "The length of the characters is too long! Try egain"
    };


})