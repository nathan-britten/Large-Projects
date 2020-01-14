let caloriesTotalValue = document.querySelector(".caloriestotal").value;
let proteinTotalValue = document.querySelector(".proteintotal").value;
let fatTotalValue = document.querySelector(".fattotal").value;
let initialPage = document.querySelector(".input");
caloriesTotalValue= 0;
proteinTotalValue=0;
fatTotalValue=0;

const CreateOutputList = (function(){

  const createListOfSearchOptions = function(data){

    let output = "";




  for(let i = 0; i < 5; i++){

  
      const name = data.hints[i].food.label
      name;
      const calories = Math.round(data.hints[i].food.nutrients.ENERC_KCAL * 10) /10;
      const protein = Math.round(data.hints[i].food.nutrients.PROCNT * 10)/10;
      const fat = Math.round(data.hints[i].food.nutrients.FAT * 10)/10;

      if(name && calories && protein && fat){

        output += `

        <div class="search-output-item">
          <ul>
            <li id="firstli"><span id="soName">${name}</span></li>
            <li><b>Calories</b>:<span id="soCalories">${calories}</span></li>
            <li><b>Protein</b>:<span id="soProtein"> ${protein}</span></li>
            <li><b>Fat</b>:<span id="soFat">${fat}</span></li>
            <li><button class="addmeal btn-click" >Add Meal</button></li>
          </ul>
        </div>
      `
    }

    document.querySelector(".searchoutput").innerHTML = output;
  }
  searchesNiceEaseIn();



  }



  const createListofChosenFood = function(e){

    console.log(e.target.parentElement.parentElement.children[1].children[1].innerText);
    
    const name = e.target.parentElement.parentElement.children[0].innerText;
    let calories = e.target.parentElement.parentElement.children[1].children[1].innerText;
    let protein = e.target.parentElement.parentElement.children[2].children[1].innerText;
    let fat = e.target.parentElement.parentElement.children[3].children[1].innerText;
    console.log(typeof calories)

    calories =  parseFloat(calories)
   protein =  parseFloat(protein)
    fat = parseFloat(fat)


    calories = Math.round(calories);
    protein =   Math.round(protein);
    fat =  Math.round(fat);


  
    const output = `
  
    <div class="selected-outputitem">
      <ul>
        <li id="firstone">${name}</li>
        <li><b>Calories</b>: ${calories}</li>
        <li><b>Protein</b>: ${protein}</li>
        <li><b>Fat</b>: ${fat}</li>
        <li class="endone"><i class="far fa-edit fa-lg edit"></i></li>
        </ul>
        <div class="edit-buttons hide">
        <li><button>Delete</button></li>
        <li><button>Back</button></i></li>
        <li><button>Edit Quantity</button></i></li>
        </div<>


    </div>
`
    document.querySelector(".list").innerHTML += output;
    itemAdditionNiceEaseIn() ;


    calories = parseFloat(calories)
    protein = parseFloat(protein)
    fat = parseFloat(fat)


    caloriesTotalValue += calories;
    proteinTotalValue += protein;
    fatTotalValue += fat;

    document.querySelector(".caloriestotal").innerHTML = caloriesTotalValue;
    document.querySelector(".proteintotal").innerHTML = proteinTotalValue;
    document.querySelector(".fattotal").innerHTML = fatTotalValue;

  }

  const searchesNiceEaseIn = function(){
    const searchesFound = document.querySelectorAll(".search-output-item");
    console.log(searchesFound)
  
    searchesFound.forEach((link, index) => {
  
      link.style.animation = `searchesin 0.8s ease forwards ${index/5}s`;
      })
  }


  const showSpinner = function(){
    const spinner = document.querySelector(".spinner-border");
    spinner.classList.add("show");
  }
  
  const hideSpinner =  function(){
    const spinner = document.querySelector(".spinner-border");
    spinner.classList.remove("show");
  }
  
  const itemAdditionNiceEaseIn = function(){
   const itemIn = document.querySelectorAll(".selected-outputitem");
   const last = itemIn.length -1;
   
    itemIn[last].style.animation =`itemsin 0.8s ease forwards`;
  }
  
  const showEmptySearchError = function(){
  
    const parElement = document.getElementById("ci");
    const childBefore = document.querySelector("mealinput");
  
    let li = document.createElement("li");
    li.classList.add("error-message");
    let text = document.createTextNode("Please enter an item to search");
    li.appendChild(text);
    parElement.insertBefore(li, childBefore);
    console.log(li)
    let errorMessage = document.querySelector(".error-message");
  
    errorMessage.classList.add("errorfadein");
    setTimeout(function(){
      errorMessage.classList.add("errorfadeout");
      setTimeout(function(){
        li.remove();
      },100);
  
    },2000);
  
  }
  
  const showNoResultsError = function(){
    const parElement = document.getElementById("ci");
    const childBefore = document.querySelector("#mealinput");
  
  
    let li = document.createElement("li");
    li.classList.add("error-message");
    let text = document.createTextNode("No results match your entry");
    li.appendChild(text);
    parElement.appendChild(li)
    console.log(li)
    let errorMessage = document.querySelector(".error-message");
  
    errorMessage.classList.add("errorfadein");
    setTimeout(function(){
      errorMessage.classList.add("errorfadeout");
      setTimeout(function(){
        li.remove();
      },100);
    },2000);
  
  }

  return {
    callCreateListofChosenFood: function(e){
      createListofChosenFood(e);
    },
    callAddCalorieNumbers: function(){
      addCalorieNumbers();
    },
    callCreateListOfSearchOptions: function(data){
      createListOfSearchOptions(data);
    },

    callsearchesNiceEaseIn: function(){
      searchesNiceEaseIn();
    },

    callshowSpinner: function(){
      showSpinner();
    },

    callhideSpinner: function(){
      hideSpinner();
    },
    
    callitemAdditionNiceEaseIn: function(){
      itemAdditionNiceEaseIn();
    },

    callshowEmptySearchError: function(){
      showEmptySearchError();
    },

    callshowNoResultsError: function(){
      showNoResultsError();
    }
  }
})();
















