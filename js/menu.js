// Renders the tabbed menu from the global MENU.
(function () {
  function money(n) { return "$" + n.toFixed(2); }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function tag(cls, text) { return el("span", "tag " + cls, text); }

  function renderMenu(categoryId) {
    var cat = MENU.filter(function (c) { return c.id === categoryId; })[0] || MENU[0];
    var tabs = document.querySelectorAll("#menu-tabs button");
    for (var t = 0; t < tabs.length; t++) tabs[t].setAttribute("aria-selected", String(tabs[t].dataset.id === cat.id));

    var box = document.getElementById("menu-items");
    box.textContent = "";
    box.setAttribute("aria-labelledby", "tab-" + cat.id);
    cat.items.forEach(function (it) {
      var card = el("div", "item" + (it.soldOut ? " sold-out" : ""));
      var top = el("div", "item-top");
      var name = el("span", "item-name", it.name);
      if (it.vegan) name.appendChild(el("span", "vegan-tag", "V")).style.marginLeft = ".4rem";
      if (it.promo && typeof SITE !== "undefined" && SITE.promo) name.appendChild(tag("tag-bogo", "BOGO"));
      if (it.soldOut) name.appendChild(tag("tag-sold", "Sold out"));
      top.appendChild(name);
      top.appendChild(el("span", "item-price", money(it.price)));
      card.appendChild(top);
      if (it.description) card.appendChild(el("p", "item-desc", it.description));
      box.appendChild(card);
    });
  }

  function initMenu() {
    var tabs = document.getElementById("menu-tabs");
    MENU.forEach(function (c) {
      var b = el("button", null, c.label);
      b.type = "button";
      b.id = "tab-" + c.id;
      b.dataset.id = c.id;
      b.setAttribute("role", "tab");
      b.addEventListener("click", function () { renderMenu(c.id); });
      tabs.appendChild(b);
    });
    renderMenu(MENU[0].id);
  }

  window.renderMenu = renderMenu;
  window.initMenu = initMenu;
})();
