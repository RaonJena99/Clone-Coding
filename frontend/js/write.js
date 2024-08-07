const form = document.getElementById("write-form");
const upload = document.getElementById("image");
const exit = document.querySelector(".exit");

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

function createElement(e, file) {
  const img = document.createElement("img");
  img.setAttribute("src", e.target.result);
  img.setAttribute("data-file", file.name);
  return img;
}

function getImageFiles(event) {
  const file = event.currentTarget.files[0];
  const img_Preview = document.querySelector(".image-preview");

  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = createElement(e, file);
    img_Preview.appendChild(preview);
  };
  reader.readAsDataURL(file);
}

function handleExit() {
  window.location.pathname = "/";
}

form.addEventListener("submit", handleSubmitForm);
upload.addEventListener("change", getImageFiles);
exit.addEventListener("click", handleExit);
