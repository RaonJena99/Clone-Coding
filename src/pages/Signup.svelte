<body class="signup-body">
  <div class="box">
    <div class="signup-txt">
      <div>
        <img src="assets/carrot.svg" alt="" />
      </div>
      회원가입을 해주세요.
    </div>
    <form action="/signup" method="post" id="signup-form">
      <div>
        <label class="signup-label" for="name">이름</label><br />
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label class="signup-label" for="email">이메일</label><br />
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label class="signup-label" for="id">아이디</label><br />
        <input type="text" id="id" name="id" required />
      </div>
      <div>
        <label class="signup-label" for="password">비밀번호</label><br />
        <input type="password" id="password" name="password" required />
      </div>
      <div>
        <label class="signup-label" for="chk-password">비밀번호 확인</label><br
        />
        <input type="password" id="chk-password" name="chk-password" required />
      </div>
      <div class="sign-log">
        <div>
          <button type="submit">회원가입하기</button>
        </div>
        <div>
          <a href="/#/mypage">
            <button type="button" class="login">로그인하러 가기</button>
          </a>
        </div>
      </div>
    </form>
  </div>
</body>

<style>
  .signup-body {
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .box {
    margin-top: 40px;
    width: 400px;
    height: 450px;
    border: 1px solid #dddada;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .signup-txt {
    width: 300px;
    height: 30px;
    font-size: large;
    font-weight: bold;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 5px;
  }

  .signup-txt img {
    width: 20px;
    height: 20px;
    margin-right: 7px;
  }

  .signup-label {
    color: rgba(254, 111, 15, 0.8);
    opacity: 0.7;
    font-size: 15px;
  }

  #signup-form {
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

  .sign-log {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sign-log button {
    margin: 10px 5px 0px 5px;
    width: 144px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(254, 111, 15, 0.8);
    opacity: 0.7;
    border: 0;
    font-size: 13px;
  }

  .sign-log button:active {
    background-color: rgba(241, 105, 14, 0.8);
  }
</style>
