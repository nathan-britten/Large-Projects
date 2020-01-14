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
    CreateOutputList.callshowSpinner();
    getMealTextValue();
    GetFoodData.callAccess();
  } else{
    CreateOutputList.callshowEmptySearchError();
  }

});

window.addEventListener("click", function(e){
console.log(e.target.classList)
  if(e.target.classList.contains("addmeal")){

CreateOutputList.callCreateListofChosenFood(e);
  }

  if(e.target.classList.contains("fa-edit")){
    showEditButtons(e);


  }

});

function showEditButtons(e){

  const editIconNumber = document.querySelectorAll(".fa-edit");

  for(let i=0; i<editIconNumber.length; i++){

   editIconNumber[i] = this;
    console.log(this);
  }


  // const editButtonsNumber = document.querySelectorAll(".edit-buttons");

  // console.log(editIconNumber)
  // console.log(editButtonsNumber)


  document.querySelector(".edit-buttons").classList.toggle("hide")
}
