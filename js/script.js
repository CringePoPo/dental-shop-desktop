// Owl Carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


// // // Select total count
// const totalCount = document.querySelectorAll("total-count");


// // Variable to track count
// var count = 0;

// // Display initial count value
// totalCount.innerHTML = count;
// const handleIncrement = () => {
//     count++;
//     totalCount.innerHTML = count;
//   };
//   const handleDecrement = () => {
//     count--;
//     totalCount.innerHTML = count;
//   };

//   const incrementCount = document.querySelectorAll("increment-count");
// const decrementCount = document.querySelectorAll("decrement-count");

// incrementButtons.forEach((button, index){

// })
// // Add click event to buttons
// incrementCount.addEventListener("click", handleIncrement);
// decrementCount.addEventListener("click", handleDecrement);

const incrementButtons = document.querySelectorAll(".increment-count");
  const decrementButtons = document.querySelectorAll(".decrement-count");
  const totalCounts = document.querySelectorAll(".total-count");

const counts = Array.from(totalCounts).map(() => 0);

  // Add event listeners to increment and decrement buttons
  incrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      counts[index]++;
      totalCounts[index].textContent = counts[index];
    });
  });

  decrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(counts[index] > 0 ){

            counts[index]--;
            totalCounts[index].textContent = counts[index];
        }
    });
  });

  // Collapsible code
  var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";

    } 
  });
}

// password toggling view
  const togglePassword = document.getElementById("togglePassword")
  const password = document.getElementById("password");
  
  function toggleView(){
    const type = password.getAttribute("type") === "password" ? "text": "password";
    password.setAttribute("type", type);

    this.classList.toggle("fa-eye")
  }
  togglePassword.addEventListener("click", toggleView)
  
  
