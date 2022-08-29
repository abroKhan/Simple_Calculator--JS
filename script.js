let btn = document.querySelectorAll("button");
let value = document.querySelector("#input_el");


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == "Clear") {
        value.innerHTML = "";
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  });
}
