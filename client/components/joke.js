/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 16/10/15
 */
Template.joke.events({

    'click .edit': function (event, target){
        $("#joke_id").val(target.data._id);
        $("#joke").val(target.data.joke);
        $("#category").val(target.data.categories);
    },
    'click .delete': function (event, target){
        if (confirm("Would you like to remove this joke?")) {
            Jokes.remove(target.data._id);
        }
    }
});