//Losowanie haseł
var hasla = new Array(6);
hasla[0] = "Wroclaw";
hasla[1] = "Warsaw";
hasla[2] = "New York";
hasla[3] = "Los Angeles";
hasla[4] = "Tokio";
hasla[5] = "Moscow";

function losowanie()
{
	var losowana_liczba = Math.floor(Math.random() * 6);
	wylosowane = hasla[losowana_liczba];
}
losowanie();


var haslo = wylosowane;

//Zwiększanie liter
haslo = haslo.toUpperCase();

//Długość hasła
var dlugosc = haslo.length;

var ile_skuch=0;

var haslo1 = "";

for(i=0;i<dlugosc;i++)
{
	if (haslo.charAt(i)==" ")haslo1 = haslo1+ " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "B";
litery[2] = "C";
litery[3] = "D";
litery[4] = "E";
litery[5] = "F";
litery[6] = "G";
litery[7] = "H";
litery[8] = "I";
litery[9] = "J";
litery[10] = "K";
litery[11] = "L";
litery[12] = "M";
litery[13] = "N";
litery[14] = "O";
litery[15] = "P";
litery[16] = "Q";
litery[17] = "R";
litery[18] = "S";
litery[19] = "T";
litery[20] = "U";
litery[21] = "V";
litery[22] = "W";
litery[23] = "X";
litery[24] = "Y";
litery[25] = "Z";

function start()
{
	var tresc_diva ="";
	
	for(i=0;i<=25;i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<input type="button" value="'+litery[i]+'" class="litera" onclick = "sprawdz('+i+')" id="'+element+'"></div>';
		if( (i+1) % 145 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></input>'
	}

	document.getElementById("alfabet").innerHTML = tresc_diva;
		
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.legth - 1) return this.toString();
	else return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	var trafiona = false;
	
	for(i=0;i<dlugosc;i++)
	{
		if(haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		ile_skuch++;
		var obraz = "img/s"+  ile_skuch + ".png";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'"alt=""/>';
		
	}
	
	if(haslo == haslo1)
	document.getElementById("alfabet").innerHTML = "You win, password is: "+haslo+
	'<br /><br /><span class="reset" onclick="location.reload()">AGAIN?</span>'
	
	if(ile_skuch>=6)
	document.getElementById("alfabet").innerHTML = "You lost!"+
	'<br /><br /><span class="reset" onclick="location.reload()">AGAIN?</span>'
	
	
}