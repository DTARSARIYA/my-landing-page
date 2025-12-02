const ham = document.getElementById("ham-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

ham.addEventListener("click", () => {
    sidebar.style.left = "0px";
});

closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-250px";
});




function myFunction(){
  let email = document.getElementById('email').value;

    if (email === "") {
      alert("Please enter your email first!");
    } if (!email.includes("@") || !email.includes(".")) {
  alert("Please enter a valid email address!");
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

