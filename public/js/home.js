document
  .querySelector("#dropdownMenuButton2")
  .addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target.innerText);
  });

document
  .querySelector("#dropdownMenuButton1")
  .addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target.innerText);
  });
