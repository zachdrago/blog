$(function() {

	Parse.$ = jQuery;

	// Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("sbKiF5BGV13YZfTm9tzxM4SCepj9gHaQ3vFWcEsi", "UQ8G4kH6FXy0n4K43sUR3DlFlZ65WNvKHQr2XsET");

	var Blog = Parse.Object.extend("Blog"),
		Blogs = Parse.Collection.extend({
			model: Blog
		}),
		BlogsView = Parse.View.extend({
			template: Handlebars.compile($('#blogs-tpl').html()),
			render: function() { 
				var collection = { blog: this.collection.toJSON() };
				this.$el.html(this.template(collection));
			}
		});
		blogs = new Blogs();

		blogs.fetch({
			success: function(blogs) {
				var blogsView = new BlogsView({ collection: blogs });
				blogsView.render();
				$('.main-container').html(blogsView.el);
			},
			error: function(blogs, error) {
				console.log(error);
			}
		});

});