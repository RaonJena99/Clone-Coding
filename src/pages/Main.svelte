<script>
  import { getDatabase, ref, onValue } from "firebase/database";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";

  $: items = [];

  const db = getDatabase();
  const itemsRef = ref(db, "items/");
  onMount(() =>
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
    })
  );

  const calTime = (timestamp) => {
    const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
    const time = new Date(curTime - timestamp);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    if (hour) return `${hour}시간 전`;
    else if (minute) return `${minute}분 전`;
    else return `${second}초 전`;
  };
</script>

<header>
  <Header></Header>
  <!-- 메뉴바 -->
  <div class="menu-bar">
    <div class="menu-bar_location">
      <div class="menu-bar_place">역삼1동</div>
      <div class="menu-bar_select">
        <img src="assets/select.svg" alt="select" />
      </div>
    </div>
    <div class="menu-bar_icons">
      <div class="menu-bar_search">
        <img src="assets/search.svg" alt="search" />
      </div>
      <div class="menu-bar_menu">
        <img src="assets/menu.svg" alt="menu" />
      </div>
      <div class="menu-bar_alarm">
        <img src="assets/alarm.svg" alt="alarm" />
      </div>
    </div>
  </div>
</header>

<!-- 메인 페이지 -->
<main>
  {#each items as item}
    <div class="list-block_item">
      <div class="list-block_img">
        <img src={item.url} alt="" />
      </div>
      <div class="index">
        <div class="describe">
          <div class="list-block_name">{item.title}</div>
          <div class="list-block_register">
            {item.place} • {calTime(item.atime)}
          </div>
          <div class="list-block_price">{item.price}</div>
        </div>
        <div class="alarm">
          <img src="assets/chatting.svg" alt="" />
          <div>0</div>
          <img src="assets/heart.svg" alt="" />
          <div>0</div>
        </div>
      </div>
    </div>
  {/each}
  <div class="write">
    <a href="#/write">+ 글쓰기</a>
  </div>
</main>

<Footer location="home"></Footer>

<div class="info_mes">화면 사이즈를 줄여주세요</div>
