var g = G$('Arjun', 'Khode');

g.greet().greet(true).log();

$('#login').click(function(){
	var loginGreeter = G$('Arjun','Khode');

	$('#logindiv').hide();

	loginGreeter.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
});