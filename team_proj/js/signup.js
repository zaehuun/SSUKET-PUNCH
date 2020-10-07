const logo = document.querySelector(".logo-img");
const form = document.querySelector(".form-signup");

logo.addEventListener("click", () => {
  location.href = "signin.html";
});

form.addEventListener("submit", e => {
  alert("이 부분에 REST API 전송(POST) 예정입니다.");
});
