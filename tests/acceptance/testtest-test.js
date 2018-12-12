import { module, test } from "qunit";
import { visit, currentURL, click, pauseTest } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | testtest", function(hooks) {
  setupApplicationTest(hooks);

  test("Should show about as the home page", async function(assert) {
    await visit("/");
    assert.equal(currentURL(), "/about", "should redirect automatically");
  });

  test("Should link to about ember.js", async function(assert) {
    await visit("/");
    await click("#menu-about");
    assert.equal(currentURL(), "/about", "should navigate to about page");
  });

  test("Should link to get-started information", async function(assert) {
    await visit("/");
    await click("#menu-get-started");
    assert.equal(
      currentURL(),
      "/get-started",
      "should navigate to get-started page"
    );
  });

  test("Should link to route information", async function(assert) {
    await visit("/");
    await click("#menu-route");
    assert.equal(currentURL(), "/route", "should navigate to route page");
  });

  //The querySelectorAll method returns the elements that match the given CSS selector.
  test("Should list recomended restaurants", async function(assert) {
    await visit("/data");
    await pauseTest();
    assert.equal(
      this.element.querySelectorAll(".listing").length,
      3,
      "Should display 3 restaurants"
    );
  });

  test("Should filter the list of something by something", async function(assert) {});

  test("Should show details for a selected someting", async function(assert) {});
});
