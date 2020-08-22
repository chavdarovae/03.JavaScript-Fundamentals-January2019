function solve() {
	Array.from(document.getElementsByTagName('button')).forEach((btn)=>{
		btn.addEventListener('click', encodeOrDecode)
	});


	function encodeOrDecode(e) {
		let button=e.target;
		let input;

		if(button===Array.from(document.getElementsByTagName('button'))[0]){
			button='encode';
			input=Array.from(document.getElementsByTagName('textArea'))[0].value;
			
			Array.from(document.getElementsByTagName('textArea'))[1].value=transformText(input, button);
			Array.from(document.getElementsByTagName('textArea'))[0].value='';
			
		}else if(button===Array.from(document.getElementsByTagName('button'))[1]){
			button='decode';
			input=Array.from(document.getElementsByTagName('textArea'))[1].value;
			
			Array.from(document.getElementsByTagName('textArea'))[1].value=transformText(input, button);
		}
	}

	function transformText(text,instruction) {
		let transformedText='';
		for (let i = 0; i < text.length; i++) {
			let asciiCode=text.charCodeAt(i);
			if(instruction==='encode'){
				asciiCode++;
			} else if(instruction==='decode'){
				asciiCode--;
			}
			
			transformedText+=String.fromCharCode(asciiCode);			
		}
		return transformedText;
	}
}