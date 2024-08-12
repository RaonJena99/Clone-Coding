<script>
  import { loc } from "svelte-spa-router";

  export let location;

  const moveToHome = () => {
    window.location.hash = "/";
  };
</script>

<!-- 하단바 -->
<footer>
  <div class="footer-block">
    <button class="home_block" on:click={moveToHome}>
      {#if location === "home"}
        <img id="img0" src="assets/home2.svg" alt="home" />
      {:else}
        <img id="img1" src="assets/home.svg" alt="home" />
      {/if}
      <div class="home_word">홈</div>
    </button>
    <div class="life">
      <img id="img2" src="assets/life.svg" alt="life" />
      <div class="life_word">동네생활</div>
    </div>
    <div class="around">
      <img id="img3" src="assets/around.svg" alt="around" />
      <div class="around_word">내 근처</div>
    </div>
    <div class="chatting">
      <img id="img4" src="assets/chatting.svg" alt="chatting" />
      <div class="chatting_word">채팅</div>
    </div>
    <div class="my">
      <img id="img5" src="assets/my.svg" alt="my" />
      <div class="my_word">나의 당근</div>
    </div>
  </div>
</footer>
