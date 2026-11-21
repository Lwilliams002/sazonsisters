const test = require("node:test");
const assert = require("node:assert");
const { getStatus } = require("../js/hours.js");
const { SITE } = require("../data/site.js");

// January 2027 is EST (UTC-5). Jan 1, 2027 is a Friday.
const at = (iso) => getStatus(SITE.hours, new Date(iso));

test("Friday 11:59 pm Miami is open", () => {
  const s = at("2027-01-02T04:59:00Z");
  assert.strictEqual(s.open, true);
  assert.strictEqual(s.label, "Open now · until 12:00 AM");
});

test("Saturday 12:00 am Miami is closed and opens today at 5:00 PM", () => {
  const s = at("2027-01-02T05:00:00Z");
  assert.strictEqual(s.open, false);
  assert.strictEqual(s.label, "Closed · opens today at 5:00 PM");
});

test("Monday 12:30 am Miami is closed", () => {
  assert.strictEqual(at("2027-01-04T05:30:00Z").open, false);
});

test("Sunday exactly 5:00 pm is open", () => {
  const s = at("2027-01-03T22:00:00Z");
  assert.strictEqual(s.open, true);
  assert.strictEqual(s.label, "Open now · until 10:00 PM");
  assert.strictEqual(s.todayRange, "5:00 PM - 10:00 PM");
});

test("Sunday exactly 10:00 pm is closed and opens tomorrow", () => {
  const s = at("2027-01-04T03:00:00Z");
  assert.strictEqual(s.open, false);
  assert.strictEqual(s.label, "Closed · opens tomorrow at 5:00 PM");
});

test("Wednesday 4:59 pm is closed and opens today at 5:00 PM", () => {
  const s = at("2027-01-06T21:59:00Z");
  assert.strictEqual(s.open, false);
  assert.strictEqual(s.label, "Closed · opens today at 5:00 PM");
});

test("Status uses Miami time even for a viewer in Los Angeles", () => {
  // 23:00Z = Wednesday 6 pm Miami, 3 pm Los Angeles
  assert.strictEqual(at("2027-01-06T23:00:00Z").open, true);
});

test("Friday range shows midnight close", () => {
  assert.strictEqual(at("2027-01-02T01:00:00Z").todayRange, "5:00 PM - 12:00 AM");
});
