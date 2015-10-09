/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 09/10/15
 */
Template.body.helpers({
    jokes: function(){
        return Jokes.find();
    }
});