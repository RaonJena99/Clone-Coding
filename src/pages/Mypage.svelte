<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import { user$ } from "../store";

  const logout = () => {
    localStorage.removeItem("token");
    location.reload();
  };
</script>

<div>
  <Header></Header>
  <div class="header-bar">
    <div class="header-txt">나의 당근</div>
    <img src="assets/setting.svg" alt="" />
  </div>

  <div class="my-bar">
    <div class="my-profile">
      <div class="my-img">
        <img src={$user$.photoURL} alt="" />
      </div>

      <div class="my-info">
        <div class="my-name">{$user$.displayName}</div>
        <div class="my-email">{$user$.email}</div>
      </div>
    </div>

    <div class="look-profile">프로필 보기</div>
  </div>

  <div class="sale-bar">
    <div class="sale">
      <div class="sale-img">
        <img src="assets/sale.svg" alt="" />
      </div>
      <div>판매내역</div>
    </div>
    <div class="buy">
      <div class="sale-img">
        <img src="assets/buy.svg" alt="" />
      </div>
      <div>구매내역</div>
    </div>
    <div class="like">
      <div class="sale-img">
        <img src="assets/like.svg" alt="" />
      </div>

      <div>관심목록</div>
    </div>
  </div>

  <div class="my-select">
    <img src="assets/around.svg" alt="" />
    <div>내 동네 설정</div>
  </div>

  <div class="my-select">
    <img src="assets/proof.svg" alt="" />
    <div>동네 인증하기</div>
  </div>

  <div class="my-select">
    <img src="assets/keyword.svg" alt="" />
    <div>키워드 알림</div>
  </div>

  <div id="select-four" class="my-select">
    <img id="four-button" src="assets/four-button.svg" alt="" />
    <div>모아보기</div>
  </div>

  <div class="my-select">
    <img src="assets/logout.svg" alt="" />
    <button type="button" on:click={logout}>로그아웃</button>
  </div>
</div>

<Footer location="mypage"></Footer>

<style>
  button {
    cursor: pointer;
  }

  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px 10px 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
  }

  .header-txt {
    font-size: 20px;
    font-weight: bold;
  }

  .header-bar img {
    width: 40px;
    cursor: pointer;
  }

  .my-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
  }

  .my-profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border: 1px solid #777777;
    border-radius: 50%;
  }

  .my-img img {
    width: 60px;
    border-radius: 50%;
  }

  .my-info {
    margin-left: 15px;
  }

  .my-name {
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(254, 111, 15, 0.8);
  }

  .my-email {
    font-size: small;
    color: rgb(195, 193, 193);
  }

  .look-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    font-size: large;
    font-weight: bold;
    border: 1.5px solid #cacaca;
    border-radius: 7px;
    cursor: pointer;
  }

  .my-select {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px 20px 20px 30px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
  }

  .my-select img {
    width: 30px;
    opacity: 0.9;
  }

  .my-select button {
    background: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    margin-left: 20px;
    font-size: 18px;
  }
  .my-select div {
    cursor: pointer;
    margin-left: 20px;
    font-size: 18px;
  }

  #select-four {
    padding: 20px 20px 20px 32px;
  }

  #select-four div {
    cursor: pointer;
    margin-left: 24px;
    font-size: 18px;
  }

  #four-button {
    width: 24px;
  }

  .sale-bar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 20px 20px 20px;
    margin-bottom: 10px;
    border-bottom: 5px solid #f3f3f3;
  }

  .sale-bar img {
    width: 40px;
  }

  .sale-img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: rgba(254, 111, 15, 0.2);
  }
</style>
