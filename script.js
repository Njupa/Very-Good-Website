let coloredP = document.getElementById('colored');

coloredP.addEventListener('mouseover', function() {
  coloredP.style.color = 'blue';
});
coloredP.addEventListener('mouseout', function() {
  coloredP.style.color = 'red';
})
