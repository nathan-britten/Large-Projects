const standardWeight = 100;


const Storage = (function(){

  let items;

  const getItems = function(){
        if(localStorage.getItem("items") === null){

          items = [];
          console.log(items)
        } else {
          items = JSON.parse(localStorage.getItem("items"))
        }

        for(let i = 0; i < items.length; i++){
          if(items.length > 0){
            items[i].id = items[items.length - 1].id + 1;
          } else {
            items[i].id
          }
        }
  

        // items.forEach(function(el){

        //   if(items.length > 0){
        //     console.log(el.length)
        //     console.log(el.id)
        //     el.id = items[items.length -1].id + 1;
        //   } else{

        //     el.id = 0;
        //   }
  
       
        // })


        return items;



      }

  const addItems = function(item){

      const allItems = getItems();


      // id = document.querySelectorAll(".selected-outputitem").length -1

      console.log(allItems)
      allItems.push(item);
      localStorage.setItem("items", JSON.stringify(items));
      console.log(allItems)

  }

  const createDisplay = function(){
    const items = getItems();
    console.log(items.length)

  
    

    if(items.length === 0){

    } else {

    items.forEach(function(el){

      let name = el.name;
      let calories = el.calories;
      let protein = el.protein;
      let fat = el.fat;
      let newWeight = el.newWeight;

      if(newWeight === ""){
        newWeight = 100;
      }

      const output = `
  
      <div class="selected-outputitem">
        <ul>
          <li id="firstone">${name}</li>
          <li><b>Calories</b>:<span id="calNum">${calories}</span></li>
          <li><b>Protein</b>:<span id="proNum">${protein}</span></li>
          <li><b>Fat</b>:<span id="fatNum">${fat}</span></li>
          <li class="endone"><i class="far fa-edit fa-lg edit"></i></li>
          <div class="edit-buttons hide">
            <li><button class="deleteItem">Delete</button></li>
            <li><button class="edittheQuant">Edit Quantity</button></i></li>
          </div>
          <div class="quantity-edit hide">
            <label>Quantity in Grams</label>
            <input type="number" id="changeQuantVal" value="${newWeight}" class="changequantityvalue" placeholder="">
            <i class="far fa-check-circle"></i>
          </div>
          </ul>
      </div>
  `

  
        document.querySelector(".list").innerHTML += output;
        CreateOutputList.callitemAdditionNiceEaseIn();

        calories = parseFloat(calories)
        protein = parseFloat(protein)
        fat = parseFloat(fat)


        caloriesTotalValue += calories;
        proteinTotalValue += protein;
        fatTotalValue += fat;

        document.querySelector(".caloriestotal").innerHTML = caloriesTotalValue;
        document.querySelector(".proteintotal").innerHTML = proteinTotalValue;
        document.querySelector(".fattotal").innerHTML = fatTotalValue;
          });
      }
  }

  const removeItem = function(nazza){

    console.log(nazza)
    
    const items = getItems();

    let indexPosition;
    for(let i = 0; i < items.length; i++){
        if(items[i].name === nazza){
          indexPosition = i;
        }
    }
    console.log()

    items.splice(indexPosition, 1);



    // const compare = document.querySelectorAll(".selected-outputitem").innerHTML;
    // console.log(compare)




    // items.forEach(function(item, index){

    //   items.splice(index, 1);

    // })

    // console.log(items)

    
    localStorage.setItem("items", JSON.stringify(items))


  }



  return {

    callGetItems: function(){
      getItems();
    },

    callAddItems: function(item){
      addItems(item);
    },

    callCreateDisplay: function(){
      createDisplay();
    },

    callRemoveItem: function(nazza){
      removeItem(nazza);
    }

  }


})();