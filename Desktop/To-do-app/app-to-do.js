let add_btn = document.querySelector('#add-btn');

// console.log(add_btn);
let dlt_btn=document.querySelector(".dlt-btn");
let update_btn=document.querySelectorAll(".update-btn");
console.log(update_btn);

let input =document.querySelector("#input-text");
console.log(input);

let item =document.querySelector("#item");
console.log(item);
add_btn.addEventListener("click",()=>
        {
        
            if(input.value!="")
            {
              item.innerHTML += `
              <div class="todo-item">
                <h1 class="itm">${input.value}</h1>
                <div class="todo-buttons">
                    <button class="update-btn" type="submit">Update</button>
                    <button class="delete-btn" type="submit">Delete</button>
                </div>
              </div>
              `;
              
              input.value="";
            }
          


        });

item.addEventListener("click", function(e) {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }

});



item.addEventListener("click",(e)=>
{

  if(e.tartget.classList.contains("update"))
  {
    e.target.parentElement.innerHTML
  }
});