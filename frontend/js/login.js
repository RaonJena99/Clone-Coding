const form = document.getElementById("login-form");

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

  if (res.status === 200) {
    alert("로그인에 성공했습니다.");
    window.location.pathname = "/";
  } else if (res.status === 401) {
    alert("id 혹은 password가 유효하지 않습니다.");
  }
}

form.addEventListener("submit", handleLoginForm);
