// Myanmar / English switch. The choice is remembered on this device.
(function () {
  var KEY = "nissaya-editor-lang";
  function set(code) {
    document.documentElement.lang = code;
    var buttons = document.querySelectorAll(".lang button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-lang") === code ? "true" : "false");
    }
    try { localStorage.setItem(KEY, code); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  set(saved === "en" ? "en" : "my");
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".lang button");
    if (b) set(b.getAttribute("data-lang"));
  });
})();
