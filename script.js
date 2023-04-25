"use strict";

const contents = document.querySelectorAll(".contents");

for (let i = 0; i < contents.length; i++) {
  contents[i].addEventListener("click", () => {
    contents[i].children[0].children[1].style.rotate = " 180deg";

    for (let j = 0; j < contents.length; j++) {
      contents[j].classList.remove("visible");
      contents[j].children[0].children[1].style.rotate = "0";
    }
    contents[i].classList.add("visible");
  });
}
