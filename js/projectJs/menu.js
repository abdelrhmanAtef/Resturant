$(document).ready(function () {
    swal({
        text: "Click on category to list your data!! and click on image if you want to know the ways of food",
      });
  
    $(".url-list li , .url li").click(function(){
       
        $(this).addClass('active').siblings().removeClass("active");
    });

});

let link =document.querySelectorAll("#link");
let resultApi = document.getElementById("resultApi");
let allResapies=[];
async function getRecipes(term){
    let apiResapies = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
    let data = await apiResapies.json();
      allResapies = data.recipes;
      listData();
      console.log(allResapies)
}


link.forEach(element => {
 
    element.addEventListener("click",function(){
        getRecipes(element.getAttribute("data"));
    });
});

function listData(){
    let cartona=``;
    for(let i=0 ; i<allResapies.length ; i++){
        cartona+=`
        <div class="col-md-4"  onclick="getDetails('${allResapies[i].recipe_id}')">
        <div class="v-product">
            <div class="price">${allResapies[i].recipe_id}</div>
            <img src="${allResapies[i].image_url}" class="w-100">
            <h3>${allResapies[i].title}</h3>
            <p class="lead">${allResapies[i].publisher}</p>
        </div>
    </div>
        `
    }
    resultApi.innerHTML=cartona;
}

let ways=document.getElementById("ways");
let over =document.getElementById("over");
async function getDetails(id){
   
    let recipeDetails;
   let details = await fetch(`https://forkify-api.herokuapp.com/api/get?&rId=${id}`);
   details= await details.json();
   recipeDetails=  details.recipe;
showRecpieDetails(recipeDetails); 
   console.log(recipeDetails)

}
function showRecpieDetails(recipeDetails){
    let cartona=`
    <div class="col-6" >
    <h4>${recipeDetails.title}</h4>
    <img src="${recipeDetails.image_url}" class="w-100" style="height:400px">  
    <p>${recipeDetails.publisher}</p> 
    <a target="_blank" class="btn btn-primary" href="${recipeDetails.publisher_url}">Go</a>    
    </div>

   <div class="col-6">
    <ul>

    `;
    for(let i = 0 ; i < recipeDetails.ingredients.length ; i++){
        cartona+=`
        <li>${ recipeDetails.ingredients[i]}</li>
        `
    }
   cartona+= ` </ul> 
   </div>
   `;
   over.style.display="flex";   
    ways.innerHTML=cartona;
}
let close=document.getElementById("close");
function closes(){
    over.style.display="none"
}
close.addEventListener("click",closes);

document.addEventListener("keydown",function(e){

     if(e.key == "Escape"){
        closes();
    }

}); 