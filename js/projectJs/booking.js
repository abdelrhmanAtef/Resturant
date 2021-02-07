//////////////////////////////validate of  day input//////////////////////////////
let day = document.getElementById("day");
day.addEventListener("focus",function(){
    day.setAttribute("type","number");
    day.style.textAlign="center"
});
day.addEventListener("blur",function(){
    if(day.value > 31 || day.value == ''){
        day.classList.add("class","is-invalid");
        day.classList.remove("class","is-valid");
    }

    else{
        day.classList.remove("class","is-invalid");
        day.classList.add("class","is-valid");
    }
});
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////validate of  month input//////////////////////////////
let month = document.getElementById("month");
month.addEventListener("focus",function(){
    month.setAttribute("type","number");
    month.style.textAlign="center"
});
month.addEventListener("blur",function(){
    if(month.value > 12 || month.value == ''){
        month.classList.add("class","is-invalid");
        month.classList.remove("class","is-valid");
    }else{
        month.classList.remove("class","is-invalid");
        month.classList.add("class","is-valid");
    }
});
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////show text wen hover on number of people input//////////////////////////////
let people = document.getElementById("people");
people.addEventListener("focus",function(){
    people.setAttribute("type","number");
    people.style.textAlign="center"
});
people.addEventListener("blur",function(){
    if(people.value > 4 || people.value == ''){
        people.classList.add("class","is-invalid");
        people.classList.remove("class","is-valid");
    }

    else{
        people.classList.remove("class","is-invalid");
        people.classList.add("class","is-valid");
    }
});
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// regular expretion for first and last name input //////////////////
let namee= document.getElementById("name");
let regxName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
namee.addEventListener("blur",function(){
    if(regxName.test(namee.value) === true){
        namee.classList.remove("class","is-invalid");
        namee.classList.add("class","is-valid");
    }else{
        namee.classList.remove("class","is-valid");
        namee.classList.add("class","is-invalid");
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// regular expretion for phone input //////////////////
let phone = document.getElementById("phone");
let regxPhone =/^(002|\+2)?01[0125][0-9]{8}$/ ; 
phone.addEventListener("blur",function(){
    if(regxPhone.test(phone.value) === true){
        phone.classList.remove("class","is-invalid");
        phone.classList.add("class","is-valid");
    }else{
        phone.classList.remove("class","is-valid");
        phone.classList.add("class","is-invalid");
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// regular expretion for email input //////////////////
let email = document.getElementById("email");
let regxEmail = /^[a-zA-Z]{1,30}([0-9]{1,5})?@gmail.com$/ ;
email.addEventListener("blur",function(){
    if(regxEmail.test(email.value) === true){
        email.classList.remove("class","is-invalid");
        email.classList.add("class","is-valid");
    }else{
        email.classList.remove("class","is-valid");
        email.classList.add("class","is-invalid");
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// regular expretion for textarea  //////////////////
let textarea = document.getElementById("textarea");
let regxTextarea =/^[a-zA-z0-9 ]{1,50}$/;
textarea.addEventListener("blur",function(){
    if(regxTextarea.test(textarea.value) === true || textarea.value==""){
        textarea.classList.remove("class","is-invalid");
        textarea.classList.add("class","is-valid");
    }else{
        textarea.classList.remove("class","is-valid");
        textarea.classList.add("class","is-invalid");
    }
});