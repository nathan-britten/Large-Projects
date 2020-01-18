const searchButton = document.querySelector("#searchmeal");

Storage.callCreateDisplay();

let initialWeight;
const standardWeight = 100;
/*
///Initialy wanted to search as I typed but API limits make this not practical
document.querySelector("#meal").addEventListener("keyup", function(e){
  mealSearchValue = e.target.value;

  GetFoodData.callAccess();
})
*/

GetFoodData.callAccess();

searchButton.addEventListener("click", function(){

  const mealValue = document.querySelector("#mealinput").value;

  if(mealValue !== ""){
    console.log("hello")
    CreateOutputList.callshowSpinner();
    getMealTextValue();
    GetFoodData.callAccess();
  } else{
    CreateOutputList.callshowEmptySearchError();
  }

});

window.addEventListener("click", function(e){
  if(e.target.classList.contains("addmeal")){

CreateOutputList.callCreateListofChosenFood(e);
  }

  if(e.target.classList.contains("fa-edit")){
    showEditButtons(e);
  }

  if(e.target.classList.contains("edittheQuant")){
    showQuantityInput(e);
  }

  if(e.target.classList.contains("fa-check-circle")){
    updateCalories(e);
  }

  if(e.target.classList.contains("deleteItem")){
    deleteItem(e);
  }


  

});

function showEditButtons(e){


    let itemClassList = e.target.parentElement.parentElement.childNodes[11].classList;
    let quantList = e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[13].classList;
    console.log(quantList)
      itemClassList.toggle("hide");

  }

function showQuantityInput(e){
  let itemClassList = e.target.parentElement.parentElement.parentElement.childNodes[13].classList;

  itemClassList.toggle("hide");
}

function deleteItem(e){


  const item = e.target.parentElement.parentElement.parentElement.parentElement;

  let removeCals = e.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[2].innerText;

  let removeProtein = e.target.parentElement.parentElement.parentElement.childNodes[5].childNodes[2].innerText;

  const removeFat = e.target.parentElement.parentElement.parentElement.childNodes[7].childNodes[2].innerText;
  
  caloriesTotalValue -= removeCals;
  proteinTotalValue -= removeProtein;
  fatTotalValue -= removeFat;

  document.querySelector(".caloriestotal").innerHTML = caloriesTotalValue;
    document.querySelector(".proteintotal").innerHTML = proteinTotalValue;
    document.querySelector(".fattotal").innerHTML = fatTotalValue;

   let nazza = e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].textContent;
   console.log(nazza)
    
    Storage.callRemoveItem(nazza);
    item.remove();

}


/*
function updateCalories(e){

  let calorieInitialValue = e.target.parentElement.childNodes[3].value;
  console.log(calorieInitialValue)

    const currentCals = e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[2].innerText;

    const currentProtein = e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[5].childNodes[2].innerText;

    const currentFat = e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[7].childNodes[2].innerText;

    console.log(currentCals,  currentProtein, currentFat);

    // if box value is not equal to 100 then divide by the new box value 

    let newCals = Math.round((currentCals / standardWeight) * calorieInitialValue * 10)/10;
    let newPro = Math.round((currentProtein / standardWeight) * calorieInitialValue * 10)/10;
    let newFat = Math.round((currentFat / standardWeight) * calorieInitialValue * 10)/10;

  
    e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[2].innerText = newCals;

    e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[5].childNodes[2].innerText = newPro;

    e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[7].childNodes[2].innerText = newFat;

console.log(newCals, newPro, newFat)




document.querySelector(".caloriestotal").innerHTML = caloriesTotalValue;
    document.querySelector(".proteintotal").innerHTML = proteinTotalValue;
    document.querySelector(".fattotal").innerHTML = fatTotalValue;

  


}
*/

  // const editButtonsNumber = document.querySelectorAll(".edit-buttons");

  // console.log(editIconNumber)
  // console.log(editButtonsNumber)



