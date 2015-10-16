/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 16/10/15
 */
Template.newJoke.events({
    'click #resetJoke': function (event, target) {
        reset();
    },
    'click #saveJoke': function (event, target) {
        var jokeId = $("#joke_id").val();
        var joke = $("#joke").val();
        var category = $("#category").val();

        if (jokeId) {
            Jokes.update({_id: jokeId}, {joke: joke, categories: category.split(", ")});
        } else {
            Jokes.insert({joke: joke, categories: category.split(", ")});
        }

        reset();
    }

});

function reset(){
    $("#joke").val("");
    $("#category").val("");
}