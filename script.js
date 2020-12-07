const buttons = document.querySelectorAll(".btn");
const cardHolder =document.querySelector(".card-holder"); 
console.log(cardHolder);
let imgSrc;
let cardTitle;
let cardText;

function template(){
  menu.map(item=>{
    imgSrc=item.img;
    cardTitle=item.title;
    cardText=item.desc;
    cardHolder.innerHTML += 
    `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${imgSrc}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${cardTitle}</h5>
    <p class="card-text">${cardText}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`;
    
  })

}
function filteredTemp(){
  menu.map(item=>{
    imgSrc=item.img;
    cardTitle=item.title;
    cardText=item.desc;
    
  })
}

window.addEventListener("load",template());
buttons.forEach(btn=>{
  btn.addEventListener("click", filteredTemp);
});
