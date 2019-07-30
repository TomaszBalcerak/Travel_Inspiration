var ile=5; //ilosc obrazków w galerii
obrazki=new Array();
obrazki[0]='img/slajd0.jpg'; //nazwy plików z obrazkami
obrazki[1]='img/slajd1.jpg';
obrazki[2]='img/slajd2.jpg';
obrazki[3]='img/slajd3.jpg';
obrazki[4]='img/slajd4.jpg';

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var queen = new Audio("queen.mp3");

var obrazek = obrazki[0];
			var image = document.getElementById("image");
			image.src = obrazek;

var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Wieża Eiffla</span>";
	answer[1].innerHTML="<span class='lose'>Krzywa wieża w Pizie</span>";
	answer[2].innerHTML="<span class='lose'>Big Ben</span>";

var textp = document.getElementsByClassName("answer");

var count = document.getElementById("count");
var counter = 0;
var winningText = document.getElementById("heading");
var playAgain = document.getElementsByClassName("center")[0];
var lock=false;

	textp[0].addEventListener("click",function(){
		if(textp[0].childNodes[0].hasAttribute('id')&&lock==false){
			textp[0].style.color="green";
			counter+=1;
			count.innerHTML="Wynik: " +counter;
			yes.play();
			lock=true;
			if(counter>2){
	winningText.innerHTML="WYGRAŁEŚ";
	queen.play();
	playAgain.style="text-align:center";
	playAgain.innerHTML="Do you wanna play again?"+'<br></br><span class="reset" onclick="location.reload()">TAK</span><br></br><span class="reset" onclick><a class="reset" href="index1.html">NIE</a></span>'
	count.style.display="none";
}
			setTimeout(function(){
			var obrazek = obrazki[Math.floor(Math.random()*(5-0)+0)];
			var image = document.getElementById("image");
			image.src = obrazek;
			lock=false;
			textp[0].style.color="black";
			textp[1].style.color="black";
			textp[2].style.color="black";
			if(obrazek===obrazki[0]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Wieża Eiffla</span>";
	answer[1].innerHTML="<span class='lose'>Krzywa wieża w Pizie</span>";
	answer[2].innerHTML="<span class='lose'>Big Ben</span>";
} else if(obrazek===obrazki[1]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Koloseum</span>";
	answer[1].innerHTML="<span class='lose'>Piramida Cheopsa</span>";
	answer[2].innerHTML="<span class='lose'>Templo Mayor</span>";
} else if(obrazek===obrazki[2]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Most Karola</span>";
	answer[1].innerHTML="<span class='lose'>Rialto</span>";
	answer[2].innerHTML="<span class='lose'>Brooklyn Bridge</span>";
} else if(obrazek===obrazki[3]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Budynek parlamentu w Budapeszcie</span>";
	answer[1].innerHTML="<span class='lose'>Belweder w Warszawie</span>"
	answer[2].innerHTML="<span class='lose'>Pałac ludowy w Rumunii</span>";
} else if(obrazek===obrazki[4]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span class='lose'>Pałac Zwinger</span>";
	answer[1].innerHTML="<span class='lose'>Pałac Schönbrunn</span>";
	answer[2].innerHTML="<span id='win'>Buckingham Palace</span>";
}
},3000);
	} else if(lock==false){
		textp[0].style.color="red";
		counter-=1;
			count.innerHTML="Wynik: " +counter;
			no.play();
			lock=true;
			setTimeout(function(){
			var obrazek = obrazki[Math.floor(Math.random()*(5-0)+0)];
			var image = document.getElementById("image");
			image.src = obrazek;
			lock=false;
			textp[0].style.color="black";
			textp[1].style.color="black";
			textp[2].style.color="black";
			if(obrazek===obrazki[0]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Wieża Eiffla</span>";
	answer[1].innerHTML="<span class='lose'>Krzywa wieża w Pizie</span>";
	answer[2].innerHTML="<span class='lose'>Big Ben</span>";
} else if(obrazek===obrazki[1]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Koloseum</span>";
	answer[1].innerHTML="<span class='lose'>Piramida Cheopsa</span>";
	answer[2].innerHTML="<span class='lose'>Templo Mayor</span>";
} else if(obrazek===obrazki[2]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Most Karola</span>";
	answer[1].innerHTML="<span class='lose'>Rialto</span>";
	answer[2].innerHTML="<span class='lose'>Brooklyn Bridge</span>";
} else if(obrazek===obrazki[3]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Budynek parlamentu w Budapeszcie</span>";
	answer[1].innerHTML="<span class='lose'>Belweder w Warszawie</span>"
	answer[2].innerHTML="<span class='lose'>Pałac ludowy w Rumunii</span>";
} else if(obrazek===obrazki[4]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span class='lose'>Pałac Zwinger</span>";
	answer[1].innerHTML="<span class='lose'>Pałac Schönbrunn</span>";
	answer[2].innerHTML="<span id='win'>Buckingham Palace</span>";
}
},3000);
	}
  })



	textp[1].addEventListener("click", function(){
	
		if(textp[1].childNodes[0].hasAttribute('id')&&lock==false){
			textp[1].style.color="green";
			counter+=1;
			count.innerHTML="Wynik: " +counter;
			yes.play();
			lock=true;
			if(counter>2){
	winningText.innerHTML="WYGRAŁEŚ";
	queen.play();
	playAgain.style="text-align:center";
	playAgain.innerHTML="Do you wanna play again?"+'<br></br><span class="reset" onclick="location.reload()">TAK</span><br></br><span class="reset" onclick><a href="index1.html">NIE</a></span>'
	count.style.display="none";
}
			setTimeout(function(){
			var obrazek = obrazki[Math.floor(Math.random()*(5-0)+0)];
			var image = document.getElementById("image");
			image.src = obrazek;
			lock=false;
			textp[0].style.color="black";
			textp[1].style.color="black";
			textp[2].style.color="black";
			if(obrazek===obrazki[0]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Wieża Eiffla</span>";
	answer[1].innerHTML="<span class='lose'>Krzywa wieża w Pizie</span>";
	answer[2].innerHTML="<span class='lose'>Big Ben</span>";
} else if(obrazek===obrazki[1]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Koloseum</span>";
	answer[1].innerHTML="<span class='lose'>Piramida Cheopsa</span>";
	answer[2].innerHTML="<span class='lose'>Templo Mayor</span>";
} else if(obrazek===obrazki[2]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Most Karola</span>";
	answer[1].innerHTML="<span class='lose'>Rialto</span>";
	answer[2].innerHTML="<span class='lose'>Brooklyn Bridge</span>";
} else if(obrazek===obrazki[3]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Budynek parlamentu w Budapeszcie</span>";
	answer[1].innerHTML="<span class='lose'>Belweder w Warszawie</span>"
	answer[2].innerHTML="<span class='lose'>Pałac ludowy w Rumunii</span>";
} else if(obrazek===obrazki[4]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span class='lose'>Pałac Zwinger</span>";
	answer[1].innerHTML="<span class='lose'>Pałac Schönbrunn</span>";
	answer[2].innerHTML="<span id='win'>Buckingham Palace</span>";
}
},3000);
	} else if(lock==false){
		textp[1].style.color="red";
		counter-=1;
			count.innerHTML="Wynik: " +counter;
			no.play();
			lock=true;
	setTimeout(function(){
			var obrazek = obrazki[Math.floor(Math.random()*(5-0)+0)];
			var image = document.getElementById("image");
			image.src = obrazek;
			lock=false;
			textp[0].style.color="black";
			textp[1].style.color="black";
			textp[2].style.color="black";
			if(obrazek===obrazki[0]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Wieża Eiffla</span>";
	answer[1].innerHTML="<span class='lose'>Krzywa wieża w Pizie</span>";
	answer[2].innerHTML="<span class='lose'>Big Ben</span>";
} else if(obrazek===obrazki[1]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Koloseum</span>";
	answer[1].innerHTML="<span class='lose'>Piramida Cheopsa</span>";
	answer[2].innerHTML="<span class='lose'>Templo Mayor</span>";
} else if(obrazek===obrazki[2]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Most Karola</span>";
	answer[1].innerHTML="<span class='lose'>Rialto</span>";
	answer[2].innerHTML="<span class='lose'>Brooklyn Bridge</span>";
} else if(obrazek===obrazki[3]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Budynek parlamentu w Budapeszcie</span>";
	answer[1].innerHTML="<span class='lose'>Belweder w Warszawie</span>"
	answer[2].innerHTML="<span class='lose'>Pałac ludowy w Rumunii</span>";
} else if(obrazek===obrazki[4]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span class='lose'>Pałac Zwinger</span>";
	answer[1].innerHTML="<span class='lose'>Pałac Schönbrunn</span>";
	answer[2].innerHTML="<span id='win'>Buckingham Palace</span>";
}
},3000);
	}
  })

	textp[2].addEventListener("click", function(){
	
		if(textp[2].childNodes[0].hasAttribute('id')&&lock==false){
			textp[2].style.color="green";
			counter+=1;
			count.innerHTML="Wynik: " +counter;
			yes.play();
			lock=true;
			if(counter>2){
	winningText.innerHTML="WYGRAŁEŚ";
	queen.play();
	playAgain.style="text-align:center";
	playAgain.innerHTML="Do you wanna play again?"+'<br></br><span class="reset" onclick="location.reload()">TAK</span><br></br><span class="reset" onclick><a href="index1.html">NIE</a></span>'
	count.style.display="none";
}
			setTimeout(function(){
			var obrazek = obrazki[Math.floor(Math.random()*(5-0)+0)];
			var image = document.getElementById("image");
			image.src = obrazek;
			lock=false;
			textp[0].style.color="black";
			textp[1].style.color="black";
			textp[2].style.color="black";
			if(obrazek===obrazki[0]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Wieża Eiffla</span>";
	answer[1].innerHTML="<span class='lose'>Krzywa wieża w Pizie</span>";
	answer[2].innerHTML="<span class='lose'>Big Ben</span>";
} else if(obrazek===obrazki[1]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Koloseum</span>";
	answer[1].innerHTML="<span class='lose'>Piramida Cheopsa</span>";
	answer[2].innerHTML="<span class='lose'>Templo Mayor</span>";
} else if(obrazek===obrazki[2]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Most Karola</span>";
	answer[1].innerHTML="<span class='lose'>Rialto</span>";
	answer[2].innerHTML="<span class='lose'>Brooklyn Bridge</span>";
} else if(obrazek===obrazki[3]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Budynek parlamentu w Budapeszcie</span>";
	answer[1].innerHTML="<span class='lose'>Belweder w Warszawie</span>"
	answer[2].innerHTML="<span class='lose'>Pałac ludowy w Rumunii</span>";
} else if(obrazek===obrazki[4]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span class='lose'>Pałac Zwinger</span>";
	answer[1].innerHTML="<span class='lose'>Pałac Schönbrunn</span>";
	answer[2].innerHTML="<span id='win'>Buckingham Palace</span>";
}
},3000);
	} else if(lock==false){
		textp[2].style.color="red";
		counter-=1;
			count.innerHTML="Wynik: " +counter;
			no.play();
			lock=true;
	setTimeout(function(){
			var obrazek = obrazki[Math.floor(Math.random()*(5-0)+0)];
			var image = document.getElementById("image");
			image.src = obrazek;
			lock=false;
			textp[0].style.color="black";
			textp[1].style.color="black";
			textp[2].style.color="black";
			if(obrazek===obrazki[0]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Wieża Eiffla</span>";
	answer[1].innerHTML="<span class='lose'>Krzywa wieża w Pizie</span>";
	answer[2].innerHTML="<span class='lose'>Big Ben</span>";
} else if(obrazek===obrazki[1]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Koloseum</span>";
	answer[1].innerHTML="<span class='lose'>Piramida Cheopsa</span>";
	answer[2].innerHTML="<span class='lose'>Templo Mayor</span>";
} else if(obrazek===obrazki[2]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Most Karola</span>";
	answer[1].innerHTML="<span class='lose'>Rialto</span>";
	answer[2].innerHTML="<span class='lose'>Brooklyn Bridge</span>";
} else if(obrazek===obrazki[3]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span id='win'>Budynek parlamentu w Budapeszcie</span>";
	answer[1].innerHTML="<span class='lose'>Belweder w Warszawie</span>"
	answer[2].innerHTML="<span class='lose'>Pałac ludowy w Rumunii</span>";
} else if(obrazek===obrazki[4]){
	var answer = document.getElementsByClassName("answer");
	answer[0].innerHTML="<span class='lose'>Pałac Zwinger</span>";
	answer[1].innerHTML="<span class='lose'>Pałac Schönbrunn</span>";
	answer[2].innerHTML="<span id='win'>Buckingham Palace</span>";
}
},3000);
	}
  })

	