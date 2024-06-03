
const menu =document.querySelector("#menu");

const lists = [
    "IMG_7249.JPG",
    "2272BDC0-5802-4E1C-8DAE-4A3BEB17A7D3.jpeg",
    "fuji1.jpg",
];

const content = `
<div><img src="images/${lists[0]}" alt=""></img></div>
<div><img src="images/${lists[1]}"alt=""></img></div>
<div><img src="images/${lists[2]}"alt=""></img></div>
`;
menu.insertAdjacentHTML("beforeend",content);


// const btn = document.querySelector("#button1");

    //btn.addEventListener("click",  () => {
     //   document.body.classList.toggle("dark");
       // document..getElementById.toggle("oowaku");
    //}) 

const heading =document.querySelector("h1");
const keyframes = {
    opacity: [0,1],
};
heading.animate(keyframes,6000);


