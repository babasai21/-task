const rate = document.querySelectorAll(".icon")
rate.forEach((each, index)=>{
    each.addEventListener("click", (e) => {
        console.log(each)
        output.classList.remove("hidden");
        rate.forEach((every)=>every.classList.remove("change-color"));

        for (let i=0; i< index +1; i++){
            rate[i].classList.add("change-color")
        }

        emojiIndex=index;
    });
});

function bmi(){
    var height=document.getElementById("height-input").value;
    var weight=document.getElementById("weight-input").value;

    var result=parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("output").innerHTML=result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML="underweight";
        }
        else if(result<25){
            document.getElementById("bmi-status").innerHTML="Healty";
        }
        else {
            document.getElementById("bmi-status").innerHTML="obesity";
        }
    }
}


//3.Create a program on FAQ page with js
let answers = document.querySelectorAll(".fqa");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});

//4.Create a program to toggle light and dark theme with js
function my(){
    let element=document.querySelector('.toggle');
    element.classList.toggle("dark");
}

