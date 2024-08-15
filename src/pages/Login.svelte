<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      window.localStorage.setItem("token", token);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };
</script>

<body class="login-body">
  <div class="box">
    <div class="login-txt">
      <div>
        <img src="assets/carrot.svg" alt="" />
      </div>
      로그인을 해주세요.
    </div>
    <form action="/login" method="post" id="login-form">
      <div>
        <label class="login-label" for="id">아이디</label><br />
        <input type="text" id="id" name="id" required />
      </div>
      <div>
        <label class="login-label" for="password">비밀번호</label><br />
        <input type="password" id="password" name="password" required />
      </div>
      <div class="log-sign">
        <div>
          <button type="submit">로그인하기</button>
        </div>
        <div>
          <a href="/#/signup">
            <button type="button" class="signup">회원가입하기</button>
          </a>
        </div>
      </div>
    </form>
    <div>
      <button class="login-btn" on:click={loginGoogle}>
        <div>
          <img
            class="google-img"
            src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo-thumbnail.png"
            alt=""
          />
        </div>
        <div>Google 로그인</div>
      </button>
    </div>
  </div>
</body>

<style>
  .login-body {
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .box {
    margin-top: 40px;
    width: 400px;
    height: 300px;
    border: 1px solid #dddada;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-txt {
    width: 300px;
    height: 30px;
    font-size: large;
    font-weight: bold;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 5px;
  }

  .login-txt img {
    width: 20px;
    height: 20px;
    margin-right: 7px;
  }

  .login-label {
    color: rgba(254, 111, 15, 0.8);
    opacity: 0.7;
    font-size: 15px;
  }

  #login-form {
    width: 300px;
  }

  .box input {
    margin: 5px 0px 5px 0px;
    width: 295px;
    height: 23px;
    font-size: medium;
    background-color: white;
    border: 1px solid #dddada;
    border-radius: 2px;
    outline: none;
  }

  .box input:focus {
    border: 1px solid #d98888;
  }

  .log-sign {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .log-sign button {
    margin: 10px 5px 0px 5px;
    width: 144px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(254, 111, 15, 0.8);
    opacity: 0.7;
    border: 0;
    font-size: 13px;
    cursor: pointer;
  }

  .log-sign button:active {
    background-color: rgba(241, 105, 14, 0.8);
  }

  .login-btn {
    margin: 20px;
    padding: 0px 45px 0px 5px;
    width: 180px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    background: none;
    box-shadow: none;
    border: 1px solid silver;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
  }

  .google-img {
    width: 20px;
  }
</style>
