// Catering inquiry form -> Formspree. With no form ID configured, it asks people to call instead.
(function () {
  function initCatering() {
    var form = document.getElementById("catering-form");
    var status = document.getElementById("form-status");
    var btn = form.querySelector("button[type=submit]");

    function say(msg, cls) { status.textContent = msg; status.className = "full form-status " + (cls || ""); }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = false;
      Array.prototype.forEach.call(form.querySelectorAll("[required]"), function (f) {
        var invalid = !f.value.trim();
        f.setAttribute("aria-invalid", String(invalid));
        if (invalid) bad = true;
      });
      if (bad) return say("Please fill in the highlighted fields.", "error");

      if (!SITE.formspreeId) {
        return say("Catering requests are almost ready. Please call us at " + SITE.phone + ".", "error");
      }

      btn.disabled = true;
      say("Sending…");
      fetch("https://formspree.io/f/" + encodeURIComponent(SITE.formspreeId), {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (!res.ok) throw new Error("bad status");
        form.reset();
        say("Thank you! We got your request and will contact you soon.", "ok");
      }).catch(function () {
        say("Sorry, something went wrong. Please call us at " + SITE.phone + ".", "error");
      }).then(function () { btn.disabled = false; });
    });
  }
  window.initCatering = initCatering;
})();
