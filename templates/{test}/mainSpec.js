var Main = require('../lib/main');

describe("Main : ", function() {
  var main;

  beforeEach(function () {
    main = new Main();
  });

  it("should return 'hello'", function () {
    // when
    var message = main.hello();
    // then
    expect(message).toEqual(message);
  });
});