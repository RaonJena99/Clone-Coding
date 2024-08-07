const form = document.getElementById("signup-form");

const checkPassword = () => {
  const body = new FormData(form);
  const password = body.get("password");
  const chkPassword = body.get("chk-password");
  if (password === chkPassword) {
    return true;
  } else return false;
};

async function handleSignupForm(event) {
  event.preventDefault();
  const body = new FormData(form);
  const sha256PW = sha256(body.get("password"));
  body.set("password", sha256PW);

  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") {
      alert("회원가입을 성공했습니다.");
    }
  } else {
    alert("비밀번호가 같지 않습니다.");
  }
}

form.addEventListener("submit", handleSignupForm);
