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

const renderData = (data) => {
  const main = document.querySelector("main");
  data.reverse().forEach(async (obj) => {
    const listBlock_item = document.createElement("div");
    listBlock_item.className = "list-block_item";

    const listBlock_img = document.createElement("div");
    listBlock_img.className = "list-block_img";

    const img = document.createElement("img");
    const res = await fetch(`/images/${obj.id}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    img.src = url;

    const index = document.createElement("div");
    index.className = "index";

    const describe = document.createElement("div");
    describe.className = "describe";

    const listBlock_name = document.createElement("div");
    listBlock_name.className = "list-block_name";
    listBlock_name.innerText = obj.title;

    const listBlock_register = document.createElement("div");
    listBlock_register.className = "list-block_register";
    listBlock_register.innerText = `${obj.place} • ${calTime(obj.atime)}`;

    const listBlock_price = document.createElement("div");
    listBlock_price.className = "list-block_price";
    listBlock_price.innerText = obj.price;

    const alarm = document.createElement("div");
    alarm.className = "alarm";
    const alarm_img1 = document.createElement("img");
    alarm_img1.src = "assets/chatting.svg";
    const alarm_cnt1 = document.createElement("div");
    alarm_cnt1.innerText = "0";
    const alarm_img2 = document.createElement("img");
    alarm_img2.src = "assets/heart.svg";
    const alarm_cnt2 = document.createElement("div");
    alarm_cnt2.innerText = "0";

    //list-block_img
    listBlock_img.appendChild(img);

    //describe
    describe.appendChild(listBlock_name);
    describe.appendChild(listBlock_register);
    describe.appendChild(listBlock_price);

    //alarm
    alarm.appendChild(alarm_img1);
    alarm.appendChild(alarm_cnt1);
    alarm.appendChild(alarm_img2);
    alarm.appendChild(alarm_cnt2);

    //index
    index.appendChild(describe);
    index.appendChild(alarm);

    //list-block_item
    listBlock_item.appendChild(listBlock_img);
    listBlock_item.appendChild(index);

    //main
    main.appendChild(listBlock_item);
  });
};

async function fetchList() {
  const res = await fetch("/items");
  const data = await res.json();
  renderData(data);
}

fetchList();
