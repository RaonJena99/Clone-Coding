<div class="loading-box">
  <div class="loading-txt">Loading...</div>
  <div class="loading"></div>
</div>

<style>
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  .loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(241, 105, 14, 0.8);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    margin: 10px;
  }

  .loading-box {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
