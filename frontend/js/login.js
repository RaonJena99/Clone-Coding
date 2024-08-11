const form = document.getElementById("login-form");
const signup = document.querySelector(".signup");

async function handleLoginForm(event) {
  event.preventDefault();
  const body = new FormData(form);
  const sha256PW = sha256(body.get("password"));
  body.set("password", sha256PW);

  const res = await fetch("/login", {
    method: "POST",
    body,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);

  if (res.status === 200) {
    alert("로그인에 성공했습니다.");
    window.location.pathname = "/";
  } else if (res.status === 401) {
    alert("id 혹은 password가 유효하지 않습니다.");
  }
}

function handleSignup() {
  window.location.pathname = "/signup.html";
}

signup.addEventListener("click", handleSignup);
form.addEventListener("submit", handleLoginForm);
