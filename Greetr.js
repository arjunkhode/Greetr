;(
function(global,$){

	var Greetr = function(firstname, lastname, language){
		return new Greetr.init(firstname,lastname,language);
	}

	var supportedLangs = ['en','es'];

	var greetings = {en:"Hello",es:"Hola"};

	var formalGreetings = {en: "Greetings", es: "Saludos"};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	Greetr.prototype = {

		fullname: function(){
			return this.firstname + ' ' + this.lastname;
		},
		validate: function(){
			if(supportedLangs.indexOf(this.language) === -1){
				throw "Invalid language";
			}
		},
		greeting: function(){
			return greetings[this.language] + " " + this.firstname + "!";
		},
		formalGreeting: function(){
			return formalGreetings[this.language] + " " + this.fullname();
		},
		greet: function(formal){
			var msg;

			//if undefined or null it will be coerced to false
			if(formal){
				msg = this.formalGreeting();
			}
			else{
				msg = this.greeting();
			}
			if (console){
				console.log(msg);
			}

			//'this' points to the calling object
			//makes the method chainable
			return this;

		},

		log: function(){
			if(console){
				console.log(logMessages[this.language]+":"+this.fullname());
			}
			return this; //make it chainable
		},

		setLang: function(lang){
			this.language = lang;
			this.validate();
			return this;
		},

		HTMLGreeting: function(selector, formal){
			if(!$){
				throw "jQuery not loaded";
			}
			if(!selector){
				throw "Missing jquery selector";
			}
			var msg;
			if (formal){
				msg = this.formalGreeting();		
			}
			else{
				msg = this.greeting();
			}
			$(selector).html(msg);
			return this;
		}
	};

	Greetr.init = function(firstname,lastname,language){
	var self = this;
	self.firstname = firstname || 'Default firstname';
	self.lastname = lastname || 'Default lastname';
	self.language = language || 'en';

	self.validate();
};

	Greetr.init.prototype = Greetr.prototype;
	global.Greetr = global.G$ = Greetr;
}(window, jQuery));
