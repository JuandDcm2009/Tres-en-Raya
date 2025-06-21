const slot1 = document.querySelector(".slot_1");
const slot2 = document.querySelector(".slot_2");
const slot3 = document.querySelector(".slot_3");
const slot4 = document.querySelector(".slot_4");
const slot5 = document.querySelector(".slot_5");
const slot6 = document.querySelector(".slot_6");
const slot7 = document.querySelector(".slot_7");
const slot8 = document.querySelector(".slot_8");
const slot9 = document.querySelector(".slot_9");

const reset = document.querySelector(".button_reset");

slot1.addEventListener("click", function () {
  window.pywebview.api.setPosition(1).then(function (response) {
    slot1.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

slot2.addEventListener("click", function () {
  window.pywebview.api.setPosition(2).then(function (response) {
    slot2.textContent = response.text;
    combo = response.win;
    console.log(combo);
    setWin(combo);
  });
});

slot3.addEventListener("click", function () {
  window.pywebview.api.setPosition(3).then(function (response) {
    slot3.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

slot4.addEventListener("click", function () {
  window.pywebview.api.setPosition(4).then(function (response) {
    slot4.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

slot5.addEventListener("click", function () {
  window.pywebview.api.setPosition(5).then(function (response) {
    slot5.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

slot6.addEventListener("click", function () {
  window.pywebview.api.setPosition(6).then(function (response) {
    slot6.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

slot7.addEventListener("click", function () {
  window.pywebview.api.setPosition(7).then(function (response) {
    slot7.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

slot8.addEventListener("click", function () {
  window.pywebview.api.setPosition(8).then(function (response) {
    slot8.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

slot9.addEventListener("click", function () {
  window.pywebview.api.setPosition(9).then(function (response) {
    slot9.textContent = response.text;
    combo = response.win;
    setWin(combo);
  });
});

reset.addEventListener("click", function () {
  window.pywebview.api.resetPosition();
  slot1.id = "slot";
  slot2.id = "slot";
  slot3.id = "slot";
  slot4.id = "slot";
  slot5.id = "slot";
  slot6.id = "slot";
  slot7.id = "slot";
  slot8.id = "slot";
  slot9.id = "slot";

  slot1.textContent = "";
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
  slot5.textContent = "";
  slot6.textContent = "";
  slot7.textContent = "";
  slot8.textContent = "";
  slot9.textContent = "";
});

function setWin(combo) {
  combo.forEach((i) => {
    if (i == 1) {
      slot1.id = "winner";
    } else if (i == 2) {
      slot2.id = "winner";
    } else if (i == 3) {
      slot3.id = "winner";
    } else if (i == 4) {
      slot4.id = "winner";
    } else if (i == 5) {
      slot5.id = "winner";
    } else if (i == 6) {
      slot6.id = "winner";
    } else if (i == 7) {
      slot7.id = "winner";
    } else if (i == 8) {
      slot8.id = "winner";
    } else if (i == 9) {
      slot9.id = "winner";
    }
  });
}
