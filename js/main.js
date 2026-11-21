// Fills the page from SITE data and keeps the open/closed badge fresh.
(function () {
  function $(id) { return document.getElementById(id); }
  function setText(id, text) { $(id).textContent = text; }
  function setHref(ids, href) { ids.forEach(function (id) { $(id).href = href; }); }

  function renderStatus() {
    var s = Hours.getStatus(SITE.hours, new Date());
    var badge = $("status-badge");
    badge.textContent = s.label;
    badge.className = "status " + (s.open ? "open" : "closed");
    setText("today-hours", s.todayRange);
    renderHours();
  }

  function renderHours() {
    var tbody = $("hours-table").querySelector("tbody");
    var todayKey = Hours.miamiDayKey(new Date());
    tbody.textContent = "";
    Hours.DAYS.forEach(function (key) {
      var tr = document.createElement("tr");
      if (key === todayKey) tr.className = "today";
      var d = document.createElement("td"); d.textContent = Hours.DAY_NAMES[key];
      var h = document.createElement("td");
      h.textContent = SITE.hours[key] && SITE.hours[key].length ? Hours.rangeText(SITE.hours[key]) : "Closed";
      tr.appendChild(d); tr.appendChild(h); tbody.appendChild(tr);
    });
  }

  function renderPromo() {
    var p = SITE.promo;
    if (!p) return;
    setText("promo-title", p.title);
    setText("promo-text", p.text);
    setText("promo-note", p.note || "");
    var btn = $("promo-code-btn");
    btn.textContent = p.code;
    btn.addEventListener("click", function () {
      var done = function (msg) { setText("promo-copied", msg); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(p.code).then(function () { done("Copied!"); }, function () { done("Tap and hold to copy"); });
      } else { done("Use code " + p.code); }
    });
    $("promo").hidden = false;
  }

  function init() {
    var a = SITE.address;
    var oneLine = a.line1 + ", " + a.city + ", " + a.state + " " + a.zip;
    setText("tagline", SITE.tagline);
    setText("hero-address", oneLine + (a.note ? " · " + a.note : ""));
    setText("find-address", oneLine);
    setText("find-note", a.note || "");
    setText("footer-address", oneLine);
    setText("footer-phone", SITE.phone);
    setText("year", String(new Date().getFullYear()));
    Array.prototype.forEach.call(document.querySelectorAll(".js-order"), function (n) { n.href = SITE.toastUrl; });
    setHref(["directions-btn", "directions-btn-2"], SITE.mapsUrl);
    var tel = "tel:" + SITE.phone.replace(/[^0-9]/g, "");
    setHref(["call-btn", "footer-phone"], tel);
    setHref(["footer-ig"], SITE.instagram);

    if (SITE.todayNote) { setText("today-note", SITE.todayNote); $("today-note").hidden = false; }

    renderPromo();
    renderStatus();
    setInterval(renderStatus, 60000);
    initMenu();
    initCatering();
  }

  init();
})();
