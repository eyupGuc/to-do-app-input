//! Selectors

const input = document.querySelector("input");
// console.log(input);
const addBtn = document.querySelector("button");
// console.log(addBtn);

const cardBody = document.querySelector(".card-body");
const ul = document.querySelector(".list-group");

cardBody.addEventListener("click", (e) => {
  //   console.log(e.target.className);
  if (e.target.classList.contains("btn")) {
    // console.log("butona tklandı");
    // console.log(input.value);
    if (input.value.trim()) {
      ul.innerHTML += `<li class="list-group-item bg-primary text-white"> ${input.value} <i class="fa-solid fa-trash text-danger"> </i></li> 
       `;
    }
  }

  //   console.log(e.target);
});
