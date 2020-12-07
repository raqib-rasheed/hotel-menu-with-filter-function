 function filteredMenu(){
    removeExisting();
    buttonAll.classList.remove("active");
    if(this.value==="breakfast"){
      breakFastArr.forEach(item=>{
        displayCard(item);
      });
    }else if(this.value==="lunch"){
      lunchArr.forEach(item=>{
        displayCard(item);
      });
    }else{
      shakesArr.forEach(item=>{
        displayCard(item);
      })
    }
  }
  function removeExisting(){
    mainCardHolder.innerHTML="";
  }
  
  function template(){
    removeExisting();
    if(buttonAll.classList.contains("displayAll")){
      menu.forEach(item=>{
        displayCard(item);
      });
    }
  }

buttons.forEach(btn=>{
  btn.addEventListener("click",filteredMenu)})

window.addEventListener("load",()=>{
  buttonAll.classList.add("displayAll","active");
  template();
});
buttonAll.addEventListener("click",template);