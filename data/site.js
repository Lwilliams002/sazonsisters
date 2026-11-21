// Edit this file to change hours, contact info, the Toast link, or to show a banner.
var SITE = {
  name: "Sazón Sisters",
  tagline: "Cuban Flavor, Vegan Love, Made Fresh",
  address: {
    line1: "7300 NW 84th Ave",
    city: "Medley",
    state: "FL",
    zip: "33166",
    note: "At Route 74 Miami"
  },
  phone: "305-833-4872",
  instagram: "https://www.instagram.com/sazonsistersfoodtruck/",
  toastUrl: "https://toast.app/r/sazon-sisters-7300-northwest-84th-avenue/order/r-19ee2e3f-4d26-4554-91ec-3d88eb3ec5d2?diningOption=takeout",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=7300+NW+84th+Ave+Medley+FL+33166",
  // Current promotion. Set to null to hide the promo banner and menu tags.
  promo: {
    title: "Buy 1, Get 1 Free",
    text: "Buy 1 Chicken Empanada and 1 Beef Empanada, get 1 Chicken Empanada and 1 Beef Empanada free.",
    code: "SAZONBOGO",
    note: "Select items. Enter the code at checkout on Toast."
  },
  // Set to a string to show a banner at the top, e.g. "Closed Sunday for a private event". null hides it.
  todayNote: null,
  // Paste your Formspree form ID here (see README). Empty = form shows a "call us" message.
  formspreeId: "",
  // Times are Miami time. "24:00" means midnight at the end of that day.
  hours: {
    sun: [{ open: "17:00", close: "22:00" }],
    mon: [{ open: "17:00", close: "22:00" }],
    tue: [{ open: "17:00", close: "22:00" }],
    wed: [{ open: "17:00", close: "22:00" }],
    thu: [{ open: "17:00", close: "22:00" }],
    fri: [{ open: "17:00", close: "24:00" }],
    sat: [{ open: "17:00", close: "24:00" }]
  }
};
if (typeof module !== "undefined") module.exports = { SITE: SITE };
