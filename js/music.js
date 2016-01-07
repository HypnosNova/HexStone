function clickSoundOpen() {
	$('#clickSound').remove();
	$('body').append('<embed id="clickSound" src="media/A_newdaze.ogg" autostart="true" hidden="true" loop="false">');
}

function eliminateSoundOpen() {
	$('#clearSound').remove();
	$('body').append('<embed id="clearSound" src="media/A_highlight.ogg" autostart="true" hidden="true" loop="false">');
}