let mealText;




const GetFoodData = (function() {

  const appID = "e495ad1a";
  const appKey = "413befb8ccf97e6260e4e0c770c8075d"


  const access = function(){
    fetch(`https://api.edamam.com/api/food-database/parser?ingr=${mealText}&app_id=${appID}&app_key=${appKey}`)

    .then(function(results){
    return results.json();    
    })
    .then(function(data){
      
      const theData = data;

      if(data.hints.length === 0){
        CreateOutputList.callhideSpinner();
        CreateOutputList.callshowNoResultsError()
      } else {

        CreateOutputList.callCreateListOfSearchOptions(theData);
        CreateOutputList.callhideSpinner();
      }


    })
    .catch(function(err){
      console.log(err)
    })
  };




  return {
    callAccess: function(){
      access();
    }

  };

})();



function getMealTextValue(){
  mealText = document.querySelector("#mealinput").value;
}






