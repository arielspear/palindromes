describe('arrayMaker', function() {
  it("it turns a string into an array split on characters", function() {
      expect(arrayMaker("kitten")).to.equal(['k', 'i', 't', 't', 'e', 'n']);
  })
});
