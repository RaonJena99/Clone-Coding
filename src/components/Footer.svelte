<script>
  export let location;

  const moveToHome = () => (window.location.hash = "/");

  const moveToMypage = () => (window.location.hash = "/mypage");
</script>

<!-- 하단바 -->
<footer>
  <div class="footer-block">
    <button class="select_block" on:click={moveToHome}>
      {#if location === "home"}
        <img src="assets/home2.svg" alt="home" />
      {:else}
        <img src="assets/home.svg" alt="home" />
      {/if}
      <div class="home_word">홈</div>
    </button>
    <div class="select_block">
      <img id="img2" src="assets/life.svg" alt="life" />
      <div class="life_word">동네생활</div>
    </div>
    <div class="select_block">
      <img id="img3" src="assets/around.svg" alt="around" />
      <div class="around_word">내 근처</div>
    </div>
    <div class="select_block">
      <img id="img4" src="assets/chatting.svg" alt="chatting" />
      <div class="chatting_word">채팅</div>
    </div>
    <button class="select_block" on:click={moveToMypage}>
      {#if location === "mypage"}
        <img src="assets/my2.svg" alt="my" />
      {:else}
        <img src="assets/my.svg" alt="my" />
      {/if}
      <div class="my_word">나의 당근</div>
    </button>
  </div>
</footer>
