<script>
  import { getDatabase, ref, push } from "firebase/database";
  import {
    getStorage,
    ref as refImage,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  let hour = new Date().getHours().toString();
  let minute = new Date().getMinutes().toString();
  setInterval(() => {
    hour = new Date().getHours().toString();
    minute = new Date().getMinutes().toString();
  }, 1000);

  let input;
  let title;
  let price;
  let description;
  let place;
  let image;
  let showImage = false;

  const Preview = () => {
    const file = input.files[0];
    if (file) {
      showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);
      console.log(reader);

      return;
    }
    showImage = false;
  };

  function writeUserData(url) {
    const db = getDatabase();
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
      atime: new Date().getTime(),
      url,
    });
    window.location.hash = "/";
  }

  async function uploadFile() {
    const storage = getStorage();
    const file = input[0];
    const name = file.name;
    const imgRef = refImage(storage, name);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  }

  async function handleSubmit() {
    const url = await uploadFile();
    writeUserData(url);
  }
</script>

<header>
  <Header></Header>

  <!-- 제출바 -->
  <div class="submit-bar">
    <div class="submit-bar_img">
      <a href="/">
        <img class="exit" src="assets/x.svg" alt="" />
      </a>
    </div>
    <div class="submit-bar_txt">중고거래 글쓰기</div>
  </div>
</header>

<form id="write-form" on:submit|preventDefault={() => handleSubmit()}>
  <div class="img-form">
    <label class="label_img" for="image">
      <img src="assets/image.svg" alt="" />
    </label>
    <input
      type="file"
      id="image"
      name="image"
      bind:this={input}
      on:change={Preview}
    />
    <div class="image-preview">
      {#if showImage}
        <img bind:this={image} src="" alt="Preview" />
      {:else}
        <div></div>
      {/if}
    </div>
  </div>

  <div class="title-form">
    <input
      type="text"
      id="title"
      name="title"
      placeholder="제목을 적어주세요."
      size="47"
      required
      bind:value={title}
    />
  </div>
  <div class="price-form">
    <input
      type="number"
      id="price"
      name="price"
      placeholder="₩ 가격 입력"
      required
      bind:value={price}
    />
  </div>
  <div class="description-form">
    <textarea
      name="description"
      cols="45"
      rows="20"
      id="description"
      placeholder="게시글 내용을 작성해주세요."
      bind:value={description}
    ></textarea>
  </div>
  <div class="place-form">
    <input
      type="text"
      id="place"
      name="place"
      placeholder="게시글을 보여줄 동네 작성"
      required
      bind:value={place}
    />
  </div>
  <div>
    <button type="submit" class="submit">완료</button>
  </div>
</form>

<Footer location="write"></Footer>

<style>
  .image-preview {
    width: 70px;
  }
  .image-preview img {
    width: 100%;
  }
</style>
