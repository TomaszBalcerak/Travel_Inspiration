var ile=5; //ilosc obrazków w galerii
obrazki=new Array();
obrazki[0]='img/slajd0.jpg'; //nazwy plików z obrazkami
obrazki[1]='img/slajd1.jpg';
obrazki[2]='img/slajd2.jpg';
obrazki[3]='img/slajd3.jpg';
obrazki[4]='img/slajd4.jpg';

//kod do funkcjonalności buttona NEXT//
var btn = document.getElementById("btn");
btn.addEventListener('click', function changeImage() {
	obrazek = obrazki[Math.floor(Math.random()*ile)];
	var image = document.getElementById("image");
	image.src = obrazek;
	dots.style.display = "inline";
    clicker.innerHTML = "More info";
    showmore.style.display="none";
    foot.style.position ="absolute";
    foot.style.bottom = "0";

//ciąg dalszy funkcjonalności buttona NEXT zmieniający obrazek i podpis//
if(obrazek===obrazki[0]){
	var head = document.getElementById("heading");
	var change = document.getElementsByClassName("change");
	head.innerHTML="Wieża Eiffla";
	change[0].innerHTML= "<p>Wieża Eiffla (fr. Tour Eiffel) – najba&shyrdziej znany obiekt archite&shyktoni&shyczny Paryża, uzna&shywany za symbol tego mia&shysta i nie&shykiedy całej Francji. Jest najwy&shyższą budo&shywlą w Paryżu i piątą co do wyso&shykości we Francji. W mome&shyncie powsta&shynia była najwy&shyższą wieżą na świe&shycie.</p><p>„Żelazna dama” stoi w zacho&shydniej części miasta, nad Sekwaną, na półno&shycno-zacho&shydnim krańcu Pola Marso&shywego.</p><p>Wieżę zbudo&shywano specja&shylnie na pary&shyską wystawę świa&shytową w 1889 roku. Miała upamię&shytnić setną rocznicę rewo&shylucji fra&shyncu&shyskiej oraz zademo&shynstrować poziom wiedzy inży&shynie&shyrskiej i możli&shywości techni&shyczne epoki, być symbolem ówcze&shysnej potęgi gospo&shydarczej i naukowo-techni&shycznej Francji. Pro&shyjekt podkre&shyślał archite&shyktoni&shyczne walory stali, wbrew dominu&shyjącemu w XIX wieku akade&shymizmowi, który uważał żelazo za prosty mate&shyriał budo&shywlany. Po 20 latach budo&shywla miała być roze&shybrana, lecz Eiffel nie chciał do tego dopuścić i zało&shyżył na wieży labora&shytorium aerody&shynamiczne i meteoro&shylogiczne. Jednak dopiero udane ekspery&shymenty  z umieszczo&shynym na szczycie tele&shygrafem „bez drutu” ocaliły wieżę i odstą&shypiono od jej demo&shyntażu. W przede&shydniu I wojny świa&shytowej stała się obie&shyktem milita&shyrnym: zape&shywniała Paryżowi łączność z poste&shyrunkami wojsko&shywymi na granicy z Niemcami. Zacho&shywana budo&shywla z czasem stała się najwię&shykszą atra&shykcją tury&shystyczną Paryża, którą zwie&shydziło już ponad 200 milionów ludzi.</p>";
} else if(obrazek===obrazki[1]){
	var head = document.getElementById("heading");
	var change = document.getElementsByClassName("change");
	head.innerHTML="Coloseum";
	change[0].innerHTML="<p>Koloseum (łac. Colo&shysseum, wł. Colo&shysseo), wła&shyściwie amfi&shyteatr Fla&shywiuszów (łac. Amphi&shytheatrum Fla&shyvium) – amfi&shyteatr w Rzymie, wznie&shysiony w latach 70-72 do 80 n.e. przez Wespa&shyzjana i Tytusa – cesarzy z dyna&shystii Fla&shywiuszów.</p><p>Jest to duża, elipty&shyczna budo&shywla o długo&shyści 188 m i szero&shykości 156 m, obwo&shydzie 524 m, wysoko&shyści 48,5 m, z poje&shymną wido&shywnią, która mogła pomie&shyścić od 45 do 50 tysię&shycy widzów; z gale&shyriami komuni&shyka&shycyjnymi oraz areną z syste&shymem podzie&shymnych kory&shytarzy. W czte&shyrokondygnacyjnym podziale zewnę&shytrznym zasto&shysowano spię&shytrzenie porzą&shydków (najni&shyższa ko&shyndygnacja w porzą&shydku toska&shyńskim, druga w jońskim, trzecia w kory&shynckim).</p><p>Odby&shywały się w nim m.in. walki gladia&shytorów, nauma&shychie, polo&shywania na dzikie zwierzę&shyta. Trady&shycja mówi iż w Kolo&shyseum mordo&shywano chrze&shyścijan, co upamię&shytniono krzy&shyżem wewną&shytrz budo&shywli. Od poło&shywy XVIII wieku Kolo&shyseum jest oto&shyczone opieką jako miejsce męcze&shyństwa pie&shyrwszych chrze&shyścijan, wcze&shyśniej pozy&shyski&shywano z niego bloki ka&shymienne jako mate&shyriał budo&shywlany. Nazwa Kolo&shyseum została nadana we wcze&shysnym średnio&shywieczu od znajdu&shyjącego się w pobliżu budo&shywli ogro&shymnego (gr. „kolo&shyssos”) posągu Nerona przedsta&shywio&shynego jako Helios.</p>";
} else if(obrazek===obrazki[2]){
	var head = document.getElementById("heading");
	var change = document.getElementsByClassName("change");
	head.innerHTML="Most Karola";
	change[0].innerHTML="<p>Most Karola (czes. Karlův most, niem. Karls&shybrücke) – most na Wełta&shywie w Pradze cze&shyskiej łą&shyczący dzie&shylnice Malá Strana i Staré Město, będący jedną z najsły&shynniej&shyszych i najczę&shyściej odwie&shydzan&shyych atra&shykcji tury&shysty&shycznych miasta.</p><p>Został wsparty na szesna&shystu fila&shyrach i jest jedy&shynym średnio&shywiecznym mostem kamie&shynnym na świecie o takiej rozpię&shytości przęseł. Został zle&shycony do wybu&shydowania przez cesa&shyrza Karola IV na począ&shytku czte&shyrna&shystego wieku. Jego konstru&shyktorem był Petr Parleř. Most ma 516 m. dłu&shygości oraz 9,5 m. szero&shykości. Budo&shywę rozpo&shyczęto w 1357 roku i trwała ona do począ&shytków XV wieku. Most stanął w mie&shyjscu wcze&shyśniejszego, także kamie&shynnego, zniszczo&shynego przez powódź mostu Judy&shyty z XII wieku.</p><p>W okresie baroku, czyli w osie&shymna&shystym wie&shyku, most ozdo&shybiono 30 posą&shygami świę&shytych. Rzeźby pocho&shydzą z praco&shywni Brauna i Brokoffa. Na moście znaj&shyduje się m.in. figura Świę&shytego Jana Nepo&shymucena, które&shygo w 1342 roku zrzuco&shyno z mostu do rzeki Wełta&shywy. Na obu końcach mostu znajdu&shyją się wieże. Na wscho&shydnim krańcu stoi Staro&shymiejska Wieża Mosto&shywa z umie&shyszczo&shynymi na niej figu&shyrami cesa&shyrza Karola IV, jego syna Wacława IV oraz świę&shytych Wita, Wojcie&shycha i Zygmunta. Wieża zosta&shyła ukończo&shyna w 1380 roku.</p>";
} else if(obrazek===obrazki[3]){
	var head = document.getElementById("heading");
	var change = document.getElementsByClassName("change");
	head.innerHTML="Parlament w Budapeszcie";
	change[0].innerHTML="<p>Budynek parlamentu w Buda&shypeszcie (Orszá&shygház) – jeden z sy&shymboli sto&shylicy Wę&shygier i ca&shyłego kra&shyju. Poło&shyżony nad Duna&shyjem, w dzie&shylnicy Peszt, jest jednym z najwię&shykszych gmachów parla&shyme&shyntów naro&shydowych na świe&shycie.</p><p>Gmach powstał po połą&shyczeniu trzech da&shywnych miast w jedno – Buda&shypeszt. Władze mie&shyjskie uznały, że zjedno&shyczona sto&shylica potrze&shybuje nowej, repre&shyzenta&shycyjnej sie&shydziby. Na jej mie&shyjsce wybra&shyno podmokły, ba&shygnisty teren w oko&shylicy wówczas nieza&shymie&shyszkanej, a w doda&shytku cieszą&shycej się repu&shytacją bardzo nie&shybezpie&shycznej. Zanim doszło do rozpo&shyczę&shycia prac teren budo&shywy musiał zostać osu&shyszony i umo&shycniony, konie&shyczna była także wywó&shyzka składo&shywa&shynego tam dre&shywna – w tym celu uru&shycho&shymiono specja&shylną linię kole&shyjową, którą później transpo&shyrtowano odpowie&shydnie mate&shyriały. Pro&shyjekt budy&shynku wyko&shynał archi&shytekt Imre Steindl</p><p>Budo&shywa trwała od 1885 do 1904r., choć pie&shyrwsze posie&shydzenie odby&shyło się już w 1896, podczas hu&shycznie obcho&shydzonej ro&shycznicy 1000-lecia państwa wę&shygie&shyrskiego. Pra&shycowa&shyło przy nim 1000 osób, zuży&shyto 40 kilo&shygramów zło&shyta, pół milio&shyna ka&shymieni szla&shyche&shytnych i 40 milio&shynów ce&shygieł. Parla&shyment repre&shyzentu&shyje styl neogo&shytycki (wido&shyczne jest pewne podobie&shyństwo do sie&shydziby bryty&shyjskiego parla&shymentu) choć wido&shyczne są też ele&shymenty baro&shykowe (głównie we wnę&shytrzach). Powie&shyrzchnia uży&shytkowa budy&shynku wy&shynosi 17 000 m<sup>2</sup>, dłu&shygość – 268 m, szero&shykość - do 123 m, a wyso&shykość kopu&shyły - 96 m (drugi pod wzglę&shydem wielko&shyści budy&shynek na Wę&shygrzech). W środku znajdu&shyje się 691 pomie&shyszczeń (ponad 200 biur), 29 schodów, 13 wind, 27 wejść i 10 podwó&shyrzy. Wnę&shytrza są boga&shyto zdo&shybione fre&shyskami i malo&shywidłami, a także witra&shyżami. Na zewnę&shytrznych ścia&shynach gmachu znajdu&shyją się herby da&shywnych Wie&shylkich Wę&shygier. Główna fasa&shyda skie&shyro&shywana jest w stronę Du&shynaju, ale główne wejście umiejsco&shywione jest od strony placu Kossuth Lajos tér (na począ&shytku XX wieku nazy&shywanym Orszá&shygház tér - placu parla&shyme&shyntarnym), na któ&shyrym stoi pomnik Lajosa Kossutha.</p>";
} else if(obrazek===obrazki[4]){
	var head = document.getElementById("heading");
	var change = document.getElementsByClassName("change");
	head.innerHTML="Buckingham Palace";
	change[0].innerHTML="<p>Buckingham (ang. Buckingham Pa&shyla&shyce) – oficja&shylna londy&shyńska rezy&shyde&shyncja bry&shytyj&shyskich mona&shyrchów. Najwię&shykszy na świe&shycie pałac króle&shywski, który od 1837 roku pełni funkcję oficja&shylnej sie&shydziby mona&shyrszej. Jedna z pereł archite&shyktu&shyry pó&shyźnego ba&shyroku.</p><p>Pałac został zbudo&shywany w 1703 roku jako rezy&shydencja mie&shyjska dla księ&shycia Bucki&shyngham, Johna Sheffie&shylda. W roku 1761 król Wie&shylkiej Bry&shytanii Jerzy III wszedł w posia&shydanie pała&shycu, który zo&shystał prze&shykszta&shyłcony w jego rezy&shydencję pry&shywatną. W ciągu kole&shyjnych 75 lat pałac wielo&shykrotnie rozbu&shydowy&shywano. W pała&shycu jest sześć&shyset komnat, w tym dzie&shywiętna&shyście repre&shyzenta&shycyjnych, ponad siede&shymdzie&shysiąt ła&shyzie&shynek i prawie dwie&shyście sypia&shylni. Od 1992 roku tury&shyści mogą zoba&shyczyć część z komnat repre&shyzenta&shycyjnych. Przed sie&shydzibą mona&shyrchini bryty&shyjskiej znajdu&shyje się pomnik jej poprze&shydni&shyczki – kró&shylowej Wikto&shyrii. Rzeźbę z bia&shyłego marmu&shyru stwo&shyrzył Thomas Brock w 1931 roku.</p><p>Współ&shycześnie pałac Bucki&shyngham jest także mie&shyjscem uroczy&shystości państwo&shywych oraz oficja&shylnych spo&shytkań głów państw. Dla Bryty&shyjczyków pałac stano&shywi symbol Wie&shylkiej Bryta&shynii – to przed nim Londy&shyńczycy skła&shydali kwia&shyty po śmie&shyrci księ&shyżnej Diany.Od kwie&shytnia do lipca codzie&shynnie o 11.30 odby&shywa się przed pała&shycem uroczy&shysta zmia&shyna warty (w pozo&shystałych miesią&shycach co drugi dzień).</p>";
}
});


//kod do wyświetlenia more info - less info//
	var dots = document.getElementById("dots");
	var showmore = document.getElementById("more");
	var clicker = document.getElementById("details");
	var foot = document.getElementById("footer");
	var textp = document.getElementsByClassName("change")[0];

	clicker.addEventListener("click", function(){
		if(dots.style.display === "none") {
    		dots.style.display = "inline";
    		clicker.innerHTML = "More info";
    		showmore.style.display="none";
    		foot.style.position ="absolute";
    		foot.style.bottom = "0";
    		}
  else {
    dots.style.display = "none";
    clicker.innerHTML = "Less info"; 
    textp.style.animation="smoothy 2s";
    showmore.style.display = "inline";
    foot.style.position = "static";
  }})
