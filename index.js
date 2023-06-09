
const string = "marketer codemonkey gamer "; /* type your text here */
const array = string.split("");
const textId = document.getElementById("text");
let timer;
let isAnimating = true;

function frameLooper () {
	if (isAnimating) {
        if (array.length > 0) {
            textId.innerHTML += array.shift();
	    } else {
		clearTimeout(timer);
        setTimeout(resetText, 3000); 
        isAnimating = false;
        }
    }
	timer = setTimeout(frameLooper,70);
    /* change 70 for speed */
}

function resetText() {
    textId.innerHTML = ""; // Reset the text
    array.push(...string.split("")); // Rebuild the array with the original text	
    isAnimating = true;
		
}

frameLooper();


// SLIDER  SECTION //

const sliderBtns = document.querySelectorAll(".slider__item");
const sliderContent = document.querySelector(".slider__content")

sliderBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Remove the active class from all buttons
        sliderBtns.forEach((btn) => {
          btn.classList.remove("slider__active");
        });
        // Add the active class to the clicked button
        btn.classList.add("slider__active");
        console.log(this.id)
        if (btn.id === "splitter") {
            sliderContent.style.backgroundImage = 'url("public/splitter-design.png")';
          } else if (btn.id === "to-do") {
            sliderContent.style.backgroundImage = 'url("public/todo-design.png")';
          } else if (btn.id === "lights-out") {
            sliderContent.style.backgroundImage = 'url("public/Lights-out-design.png")';
          }
      });
});



// mouse pointer //
document.addEventListener("mousemove", function (event) {
    var light = document.getElementById("light");
    var x = event.clientX;
    var y = event.clientY;
    light.style.transform = "translate(" + x + "px, " + y + "px)";
  })