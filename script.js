let pass = document.querySelector("#password");
let btn = document.querySelector("#button");
let result = document.querySelector("#message");

function checkPass() {
  let passWord = pass.value.length;

  if (pass.value === "") {
    result.style.color = "red";
    result.textContent = "Please input your password first";
  } else if (passWord >= 10) {
    result.style.color = "green";
    result.textContent = "Strong Password";
  } else if (passWord >= 7) {
    result.style.color = "orange";
    result.textContent = "Medium Password";
  } else {
    result.style.color = "red";
    result.textContent = "Weak Password";
  }
}

btn.addEventListener("click", checkPass);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkPass();
  }
});
