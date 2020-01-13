const searchButton = document.querySelector("#searchmeal");

/*
///Initialy wanted to search as I typed but API limits make this not practical
document.querySelector("#meal").addEventListener("keyup", function(e){
  mealSearchValue = e.target.value;

  GetFoodData.callAccess();
})
*/

searchButton.addEventListener("click", function(){

  const mealValue = document.querySelector("#mealinput").value;

  if(mealValue !== ""){
    console.log("hello")
    showSpinner();
    getMealTextValue();
    GetFoodData.callAccess();
  } else{
    showEmptySearchError();
  }


});

window.addEventListener("click", function(e){

  if(e.target.classList.contains("addmeal")){

CreateOutputList.callCreateListofChosenFood(e);

  }

});



