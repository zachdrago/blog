$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("sbKiF5BGV13YZfTm9tzxM4SCepj9gHaQ3vFWcEsi", "UQ8G4kH6FXy0n4K43sUR3DlFlZ65WNvKHQr2XsET");
 
    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({
    model: Blog
});
    var blogs = new Blogs();
    blogs.fetch({
    success: function(blogs) {
        console.log(blogs);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});
 
});