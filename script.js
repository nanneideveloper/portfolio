const words=[
"Software Developer",
"Web Developer",
"BSc IT Student",
"Frontend Developer"
];

let word=0;
let letter=0;
let deleting=false;

function type(){

const current=words[word];

if(!deleting){
letter++;
}else{
letter--;
}

document.getElementById("typing").textContent=
current.substring(0,letter);

if(!deleting && letter===current.length){
deleting=true;
setTimeout(type,1200);
return;
}

if(deleting && letter===0){
deleting=false;
word++;

if(word===words.length){
word=0;
}
}

setTimeout(type,deleting?60:120);

}

type();

function toggleMenu(){
document.getElementById("menu").classList.toggle("show");
}