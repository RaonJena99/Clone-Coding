<form action="/signup" method="post" id="signup-form">
  <div>
    <label for="name">이름</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">이메일</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="id">아이디</label>
    <input type="text" id="id" name="id" required />
  </div>
  <div>
    <label for="password">비밀번호</label>
    <input type="password" id="password" name="password" required />
  </div>
  <div>
    <label for="chk-password">비밀번호 확인</label>
    <input type="password" id="chk-password" name="chk-password" required />
  </div>
  <div>
    <button type="submit">가입하기</button>
  </div>
</form>
