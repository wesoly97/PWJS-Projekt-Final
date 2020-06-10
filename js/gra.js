const pole = document.getElementById("gra");
pole.width = 500;
pole.height = 500;
const kontekst = pole.getContext('2d');
const kwadrat=Math.floor(500/22);
const rozmiarPola=Math.floor(500/22);
let wynik=0;

let waz= [];
waz [0] = 
{
x:Math.floor(rozmiarPola/2)*kwadrat,
y:Math.floor(rozmiarPola/2)*kwadrat
}


document.addEventListener('keydown',kierunek);
function kierunek(event)
{
  
if(event.keyCode==37 && kierunek!='prawo')
    kierunek= "lewo";
if(event.keyCode==38 && kierunek!='dol')
    kierunek= "gora";
if(event.keyCode==39 && kierunek!='lewo')
    kierunek= "prawo";
if(event.keyCode==40 && kierunek!='gora')
    kierunek= "dol";

}
function losuj()
{

    return Math.floor(1+Math.random()*(rozmiarPola-1) )*kwadrat;
}
let jedzenie=
{
x:losuj() ,
y:losuj()

} 

function rysuj()
{

kontekst.fillStyle='green';
kontekst.fillRect(kwadrat,kwadrat,rozmiarPola*kwadrat-kwadrat,rozmiarPola*kwadrat-kwadrat);
for(let i=0;i<22;i++)
{


for(let j=0;j<22;j++)
{

kontekst.strokeStyle = 'black';
kontekst.lineWidth   = 0.1;
kontekst.strokeRect(kwadrat*j,kwadrat*i,kwadrat,kwadrat);

}
}

for(let i=0;i<waz.length;i++)
{
    kontekst.fillStyle = 'lightgreen';
    kontekst.fillRect(waz[i].x,waz[i].y,kwadrat,kwadrat);
    kontekst.strokeStyle = 'black';
    kontekst.lineWidth   = 2;
    kontekst.strokeRect(waz[i].x,waz[i].y,kwadrat,kwadrat);
}
let wazX = waz[0].x;
let wazY= waz[0].y;
if( kierunek== "lewo")
    wazX-=kwadrat;
if( kierunek== "prawo")
    wazX+=kwadrat;
if( kierunek== "gora")
    wazY-=kwadrat;
if( kierunek== "dol")
    wazY+=kwadrat;

if(waz[0].x==jedzenie.x && waz[0].y==jedzenie.y)
{
 wynik+=1;
window.document.getElementById("wynik").innerHTML ='Liczba Punktów: '+wynik;
 jedzenie=
 {
    x:losuj(),
    y:losuj()
 }
}
else
{
    waz.pop();

}

let nowaGlowa=
{

    x:wazX,
    y:wazY
}


function kolizja(glowa,tablica)
{
for (let i=0;i<tablica.length;i++)
{

if(glowa.x ==tablica[i].x && glowa.y==tablica[i].y)
{

return true;

}

}
return false;
}
if(wazX<kwadrat || wazY<kwadrat || wazX>(rozmiarPola-1)*kwadrat || wazY>(rozmiarPola-1)*kwadrat || kolizja(nowaGlowa,waz))
{
kontekst.font = "120px Arial";
kontekst.textAlign = "center";
kontekst.strokeText("KONIEC", pole.width/2, pole.height/4);
kontekst.font = "32px Arial";
kontekst.textAlign = "center";
kontekst.strokeText("Wcisnij f5 aby zagrac ponownie", pole.width/2, pole.height/2);
clearInterval(gra);

}
waz.unshift(nowaGlowa);

kontekst.fillStyle = 'red';
kontekst.fillRect(jedzenie.x,jedzenie.y,kwadrat,kwadrat);

}
let gra = setInterval(rysuj,100);
window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);