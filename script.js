const h1 = document.querySelector(".value");
const btns = document.getElementsByTagName("button");
const spans = document.getElementsByTagName("span");
const inputs = document.getElementsByTagName("input");

btns[1].addEventListener("click", () => {
  setTimeout(() => {
    if (inputs[0].value.length === 0) {
      alert("Qiymat kamida 1ta uzunlikdan iborat bo'lishi kerak");
    } else {
      h1.innerHTML += inputs[0].value;
      spans[1].innerHTML++;
      spans[2].innerHTML++;
    }
  }, inputs[1].value * 1000 && spans[3].innerHTML++);
});

btns[0].addEventListener("click", () => {
  setTimeout(() => {
    h1.innerHTML = h1.innerHTML - inputs[0].value;
    spans[0].innerHTML++;
    spans[2].innerHTML++;
    if (inputs[0].value.length === 0) {
      alert("Qiymat kamida 1ta uzunlikdan iborat bo'lishi kerak");
      h1.innerHTML = "";
      spans[0].innerHTML = 0;
      spans[2].innerHTML = 0;
    }
  }, inputs[1].value * 1000 && spans[3].innerHTML++);
});
