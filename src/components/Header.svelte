<script>
  let hour = new Date().getHours().toString();
  let minute = new Date().getMinutes().toString();
  setInterval(() => {
    hour = new Date().getHours().toString();
    minute = new Date().getMinutes().toString();
  }, 1000);
</script>

<!-- 상태줄 -->
<div class="info-bar">
  <div class="info-bar_time">
    {hour.padStart(2, "0")}:{minute.padStart(2, "0")}
  </div>
  <div class="info-bar_icons">
    <div class="info-bar_network">
      <img src="assets/bar.svg" alt="netework" />
    </div>
    <div class="info-bar_wifi">
      <img src="assets/wifi.svg" alt="wifi" />
    </div>
    <div class="info-bar_battery">
      <img src="assets/battery.svg" alt="battery" />
    </div>
  </div>
</div>
