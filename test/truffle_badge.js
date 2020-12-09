const TruffleBadge = artifacts.require("TruffleBadge");

contract("TruffleBadge", function (accounts) {

  let badge;
  beforeEach(async () => {
    badge = await TruffleBadge.new('0xb050D4F46E28a80B18e6fE5edd96fa6E3643D9f9');
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
