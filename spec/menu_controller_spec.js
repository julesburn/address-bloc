const MenuController = require("../controllers/MenuController");

//#1

describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });

  describe("#remindMe()",() => {


    //#1
    it("should return 'Learning is a lifelong pursuit.'", () => {
      expect(this.menu.remindMe()).toBe("Learning is a lifelong pursuit.")
    });
  });
});
