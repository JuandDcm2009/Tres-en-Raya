const slot1 = document.querySelector(".slot_1");
const slot2 = document.querySelector(".slot_2");
const slot3 = document.querySelector(".slot_3");
const slot4 = document.querySelector(".slot_4");
const slot5 = document.querySelector(".slot_5");
const slot6 = document.querySelector(".slot_6");
const slot7 = document.querySelector(".slot_7");
const slot8 = document.querySelector(".slot_8");
const slot9 = document.querySelector(".slot_9");

slot1.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(1)
    .then(function (response) {
      slot1.textContent = response;
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot2.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(2)
    .then(function (response) {
      slot2.textContent = response;
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot3.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(3)
    .then(function (response) {
      slot3.textContent = response;
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot4.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(4)
    .then(function (response) {
      slot4.textContent = response;
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot5.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(5)
    .then(function (response) {
      slot5.textContent = response;
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot6.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(6)
    .then(function (response) {
      slot6.textContent = response;
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot7.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(7)
    .then(function (response) {
      slot7.textContent = response; // ahora sí imprime X u O
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot8.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(8)
    .then(function (response) {
      slot8.textContent = response; // ahora sí imprime X u O
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});

slot9.addEventListener("click", function () {
  window.pywebview.api
    .setPosition(9)
    .then(function (response) {
      slot9.textContent = response; // ahora sí imprime X u O
    })
    .catch(function (error) {
      console.error("Error ñero:", error);
    });
});
