const ham = document.getElementById("ham-btn");
const sidebar = document.getElementById("sidebar");

ham.addEventListener("click", () => {
  sidebar.style.right = sidebar.style.right === "0px" ? "-250px" : "0px";
});



function myFunction(){
  let email = document.getElementById('email').value;

    if (email === "") {
      alert("Please enter your email first!");
    } if (email!="%@gmail.com") {
        alert("please enter correct email");
    } else {
      alert("Email submitted: " + email);
    }
}



// Scroll animation system
const elements = document.querySelectorAll('.animate');

function checkAnimation() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');  // Element visible → animate
    } else {
      el.classList.remove('show'); // Scroll up → remove animation
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);
