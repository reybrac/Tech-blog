// document
//   .querySelector("#alertMe")
//   .addEventListener("click", alert("Log in to view post"));

document.querySelector("#alertMe").onclick = function () {
  alert("Login to view Post");
  console.log(alert);
};
