var link = document.querySelector(".login");

      var popup = document.querySelector(".popup-sing-in");
      var close = popup.querySelector(".popup-close");

      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=login]");
      var password = popup.querySelector("[name=password]");

      var storage = localStorage.getItem("login");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("popup-show");

        if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      });

      form.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.remove("popup-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("popup-error");
        } else {
          localStorage.setItem("login", login.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
            popup.classList.remove("popup-error");
          }
        }
      });


var mapOpen = document.querySelector(".js-open-map");

      var mapPopup = document.querySelector(".popup-map");
      var mapClose = mapPopup.querySelector(".popup-close");

      mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("popup-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("popup-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("popup-show")) {
            mapPopup.classList.remove("popup-show");
          }
        }
      });