const TruffleBadge = artifacts.require("TruffleBadge");

contract("TruffleBadge", function (accounts) {

  let badge;
  beforeEach(async () => {
    badge = await TruffleBadge.new();
  })

  describe("Creation", () => {

    it("award badge", async () => {
      const meta = "META";
      await badge.awardBadge(accounts[1], 1);
      assert.equal(
        await badge.balanceOf(accounts[1], 1),
        1
      );
    });
  })

});
