$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("BXmyd60cL3V5EysvQAtRLTZhzcFXTVMp0MMrk3aB", "pnMPtraaOAYKXsS8LtLKPBdcIHh0peprePYpluOk");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});