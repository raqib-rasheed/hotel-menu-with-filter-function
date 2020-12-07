 const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const buttonAll =document.querySelector(".active"); 
const buttons = document.querySelectorAll(".filter-btn");
const mainCardHolder = document.querySelector(".card-holder");
let breakFastArr=[];
let lunchArr=[];
let shakesArr=[];

menu.forEach(item=>{
    if(item.category==="breakfast"){
      breakFastArr.push(item)
    }else if(item.category==="lunch"){
      lunchArr.push(item)
    }else{
      shakesArr.push(item);
    }
  });


function displayCard(obj){
  let imgSrc=obj.img;
  let cardHeading=obj.title;
  let cardText=obj.desc;
  let wholeCard = document.createElement('div');
  let cardImage = document.createElement("img");
  let cardBody = document.createElement("div")
  let cardTitle = document.createElement("h5")
  let descri = document.createElement("p");
  let linkButton = document.createElement("a");
  
  wholeCard.style.width = "auto";
  wholeCard.className = "card m-5 md-4";
  
  cardImage.setAttribute('src',`${imgSrc}`);
  cardImage.className = "card-img-top";
  
  cardBody.className = "card-body";
  
  cardTitle.className = "card-title";
  cardTitle.innerText = `${cardHeading}`;
  
  descri.className = "card-text";
  descri.innerText = `${cardText}`;
  
  linkButton.className = "btn btn-info";
  linkButton.innerText = "Order now"
  
  wholeCard.appendChild(cardImage);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(descri);
  cardBody.appendChild(linkButton);
  wholeCard.appendChild(cardBody);
  mainCardHolder.appendChild(wholeCard);  
}