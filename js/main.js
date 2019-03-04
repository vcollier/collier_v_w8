(() => {
	// hook up the Js file
	console.log("fired! ready to jam out");

	function playDrumSound(e) {
		// e in round brackets is the event object ->
		// gets generated with every event and passes some data through
		//debugger;
		//
		//try selecting the matching element
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		// the return keyword stops javascript from running (any code below it)
		if (!audio) { return; }
		

		audio.currentTime = 0;
		audio.play();

		// select the parent div and animate it
		// try selecting the matching parent div element
		let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		key.classList.add('playing');
		
	}

	function removePlayingClass(e) {
		// listen for a CSS transition to finish and then reset the element
		// by removing the playing class

	if (e.propertyName !== "transform") {
			return;
		} else {
			console.log('do some stuff here, transition is done');
			e.currentTarget.classList.remove('playing');
		}
	}

	window.addEventListener("keydown", playDrumSound);

	const keys = Array.from(document.querySelectorAll('.key'));

	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));
})();