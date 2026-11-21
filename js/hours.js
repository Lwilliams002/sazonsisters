// Open/closed status, always evaluated in Miami time.
(function (root) {
  var TZ = "America/New_York";
  var DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  var DAY_NAMES = { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" };

  function toMinutes(t) {
    var p = t.split(":");
    return Number(p[0]) * 60 + Number(p[1]);
  }

  function fmt(mins) {
    var h = Math.floor(mins / 60) % 24;
    var m = mins % 60;
    var ampm = h >= 12 ? "PM" : "AM";
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + ":" + (m < 10 ? "0" : "") + m + " " + ampm;
  }

  function miamiNow(now) {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(now);
    var get = function (type) {
      for (var i = 0; i < parts.length; i++) if (parts[i].type === type) return parts[i].value;
    };
    return {
      dayIndex: DAYS.indexOf(get("weekday").toLowerCase().slice(0, 3)),
      minutes: Number(get("hour")) * 60 + Number(get("minute"))
    };
  }

  function rangeText(ranges) {
    return ranges.map(function (r) { return fmt(toMinutes(r.open)) + " - " + fmt(toMinutes(r.close)); }).join(", ");
  }

  // hours: { sun: [{open:"17:00", close:"22:00"}], ... }; now: Date
  function getStatus(hours, now) {
    var cur = miamiNow(now || new Date());
    var today = hours[DAYS[cur.dayIndex]] || [];
    var todayRange = today.length ? rangeText(today) : "Closed";
    var i, r;

    for (i = 0; i < today.length; i++) {
      r = today[i];
      if (cur.minutes >= toMinutes(r.open) && cur.minutes < toMinutes(r.close)) {
        return { open: true, label: "Open now · until " + fmt(toMinutes(r.close)), todayRange: todayRange };
      }
    }
    for (i = 0; i < today.length; i++) {
      if (toMinutes(today[i].open) > cur.minutes) {
        return { open: false, label: "Closed · opens today at " + fmt(toMinutes(today[i].open)), todayRange: todayRange };
      }
    }
    for (var d = 1; d <= 7; d++) {
      var key = DAYS[(cur.dayIndex + d) % 7];
      var ranges = hours[key] || [];
      if (ranges.length) {
        var when = d === 1 ? "tomorrow" : DAY_NAMES[key];
        return { open: false, label: "Closed · opens " + when + " at " + fmt(toMinutes(ranges[0].open)), todayRange: todayRange };
      }
    }
    return { open: false, label: "Closed", todayRange: todayRange };
  }

  var api = { getStatus: getStatus, miamiDayKey: function (now) { return DAYS[miamiNow(now || new Date()).dayIndex]; }, rangeText: rangeText, DAYS: DAYS, DAY_NAMES: DAY_NAMES };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Hours = api;
})(typeof window !== "undefined" ? window : this);
