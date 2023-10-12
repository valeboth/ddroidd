let buttons = document.querySelectorAll('.join-us-button');

buttons.forEach(function(button) {
  button.addEventListener('click', redirectToSecondPage);
});

function redirectToSecondPage() {
  window.location.href = 'secondpage.html';
}
