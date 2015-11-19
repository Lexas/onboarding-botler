var casper = require('casper').create();
var system = require('system');

var args = system.args;

console.log(args);

if (!args.length > 4){
	exit();
}

var url = 'https://github.com/login',
    url2 = 'https://github.com/iram-aguirre/test/settings/collaboration';

casper.start(url, function() {
    this.echo(this.getTitle());
		    
     this.fill('#login > form', {
		'login': 'iram-aguirre',
		'password': 'iram123'
	 }, true);
			 
});

casper.then(function(){
	this.echo(this.getTitle());

	casper.open(url2);
})

casper.then(function(){
	this.echo(this.getTitle());
		
	this.fill('#collaborators > form', {
		'member': args[4],
	}, true);
});

casper.run();
