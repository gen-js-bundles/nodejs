var Main = require('../lib/main');

describe("Main : ", function() {

  beforeEach(function () {
    this.main = new Main();
  });

  it("should be initialized", function () {
    expect(this.main).not.toBeUndefined();
  });

  it("should return 'Hello'", function () {
    // when
    var message = this.main.hello();
    // then
    expect(message).toEqual('Hello');
  });
});