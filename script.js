var burgerIcon = document.querySelector('.burger-icon');
var burgerMenu = document.querySelector('.burger-menu');

burgerIcon.addEventListener('click', function() {
  burgerIcon.classList.toggle('active');
  burgerMenu.classList.toggle('show');
});

var burgerIcon1 = document.querySelector('.burger-icon1');
var burgerMenu1 = document.querySelector('.burger-menu');

burgerIcon1.addEventListener('click', function() {
  burgerIcon1.classList.toggle('active');
  burgerMenu1.classList.toggle('show');
});

var burgerIcon2 = document.querySelector('.burger-icon2');
var burgerMenu2 = document.querySelector('.burger-menu');

burgerIcon2.addEventListener('click', function() {
  burgerIcon2.classList.toggle('active');
  burgerMenu2.classList.toggle('show');
});

var accordionItems = document.getElementsByClassName("accordion-item");

for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordionContent = this.querySelector(".accordion-content");
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
}
