<script>
  import Footer from "../components/Footer.svelte";

  const logout = () => {
    localStorage.removeItem("token");
    location.reload();
  };
</script>

<div>나의 페이지</div>
<button type="button" on:click={logout}>로그아웃</button>

<Footer location="mypage"></Footer>

<style>
  button {
    cursor: pointer;
  }
</style>
