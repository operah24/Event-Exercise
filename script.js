document.addEventListener("DOMContentLoaded", function(){
})

// 2. Replace the text "Change me" with "Hello World!".
var changeText = document.getElementById("change_heading")
changeText.innerText = "Hello World!";

// 3.When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
var section = document.querySelector("section");
section.addEventListener("mouseover", function(event){
    var selectedColor = document.querySelector('.selected');
    selectedColor.innerText = event.target.className;
})

// 4. Create a new div element
var newDiv = document.createElement("div")

// 5. Give your new div a class of purple and style it so that it has a background color of purple.
newDiv.classList.add("purple")
console.log(newDiv)

// 6. Append your new div to the page to the section tag.
var section = document.querySelector("section");
section.appendChild(newDiv)


        // PART 2
var button = document.querySelector("button");
var car1 = document.querySelector('.car1');
var car2 = document.querySelector('.car2');
car1.style.marginLeft = 0;
car2.style.marginLeft = 0;

function reset(car1, car2){
    clearTimeout(car1.timer);
    clearTimeout(car2.timer);
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    button.disabled = false;
}

button.addEventListener("click", function(event){
    button.disabled = true;
    car1.timer = setInterval(function(){
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
        if(parseInt(car1.style.marginLeft) > window.innerWidth){
            alert("Car 1 wins!");
            reset(car1,car2);
        }
    },60)

    car2.timer = setInterval(function(){
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
        if(parseInt(car2.style.marginLeft) > window.innerWidth){
            alert("Car 2 wins!");
            reset(car1,car2);
        }
    },60)


})




