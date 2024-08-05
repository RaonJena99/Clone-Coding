const form = document.getElementById("write-form");

async function handleSubmitForm(event) {
  event.preventDefault();
  const body = new FormData(form);
  body.append("atime", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error("에러가 발생했습니다.");
  }
}

form.addEventListener("submit", handleSubmitForm);
