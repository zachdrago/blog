$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("sbKiF5BGV13YZfTm9tzxM4SCepj9gHaQ3vFWcEsi", "UQ8G4kH6FXy0n4K43sUR3DlFlZ65WNvKHQr2XsET");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});