const Storage = (function(){

  let items;

  const getItems = function(){
        if(localStorage.getItem("items") === null){

          items = [];
          console.log(items)
        } else {
          items = JSON.parse(localStorage.getItem("items"))
        }

        return items;
      }

  const addItems = function(item){

      const allItems = getItems();

      allItems.forEach(function(el){
        parseInt(el.id)
        el.id++
      })


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
          </div>
          <div class="quantity-edit hide">
            <label>Quantity in Grams</label>
            <input type="number" id="changeQuantVal" value="100" class="changequantityvalue" placeholder="">
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

  const removeItem = function(){

    const items = getItems();
    console.log(items)
  //   console.log(items)

  //  for(let i=0; i< items.length; i++){

  //   if(items[i] === i){
  //     items.splice(i, 1)
  //   }
  // }

  //   console.log(items)

    const compare = document.querySelectorAll(".selected-outputitem").id;


    // get index of the selected-output item




    //get the index of items and if they are the smae ,remove.

    // console.log(compare)

    items.forEach(function(item, index){

      items.splice(index, 1);

    })

    console.log(items)

    
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

    callRemoveItem: function(){
      removeItem();
    }

  }


})();