describe('arrayMaker', function() {
  it("it turns a string into an array split on characters", function() {
      expect(arrayMaker("kitten")).to.eql(['k', 'i', 't', 't', 'e', 'n']);
  })
});

describe('reverse', function() {
  it("it reverses the chars in the array", function() {
      expect(reverse(['p', 'u', 'p', 'p', 'y'])).to.eql(['y', 'p', 'p', 'u', 'p']);
  })
});
