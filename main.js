
let btn = document.querySelector("#submit");
let soTrue = '';
let state= 0;


 btn.addEventListener("click", () => {
    
    makeGrid();
    
    const td = document.querySelectorAll("td");

    for(let i = 0; i < td.length; i++) {
      td[i].addEventListener("mouseenter", () => {
         td[i].classList.add("new");
         console.log("ok");
    })
    
}
    
    }); 






function makeGrid() {
    let removeTab = document.querySelector("table");
    let parentEl = removeTab.parentElement

    parentEl.removeChild(removeTab)

    let newTable = document.createElement("table");
    let realbox = document.querySelector(".realbox");

    realbox.appendChild(newTable);

    let table = document.querySelector("table") 
    soTrue = document.querySelector("#fname").value;

    

    if(soTrue > 100 || soTrue < 1 || isNaN(soTrue)) {
        alert("cmon man put in the damn number");
    }

    else { 
     
    for(let i = 0; i < soTrue; i++) {
        let newRow = document.createElement("tr");
        newRow.id = "row" + i;
        
        table.appendChild(newRow);
        let rowData = document.querySelector("#row" + i); 

        for(let j = 0; j < soTrue; j++) {
            let newData = document.createElement("td");

            rowData.appendChild(newData);
        } 
        
    }
}
}

  

   
   
    
    





