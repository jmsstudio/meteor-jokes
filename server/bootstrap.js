/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 09/10/15
 */
Meteor.startup(function(){
    if (Jokes.find().count() == 0){
        var data = [];
        Meteor.http.call("GET", "http://api.icndb.com/jokes/random/50", function(error, result){
            data = result.data.value;

            _.each(data, function(joke){
                console.log(joke);
                Jokes.insert(joke);
            });
        });
    }
});
