var tablica;
var tim;
var igrac;
var zahtjev_tablica;
var zahtjev_klub;
var zahtjev_igraci;
var sifra;
var odabrani_igrac;


var nadimakKluba;
var opisKlub;
var opisStadion;
var imeStadion;
var urlFace;
var urlOfficial;
var urlYoutube;
var igraci;
var slikaKlub;
var klub;


window.onload = function(){
    DohvatiTablicu();
    
    document.getElementById("a_timovi").addEventListener("click",PrebaciNaTim);
    document.getElementById("a_pocetna").addEventListener("click",PrebaciNaPocetnu);
    document.getElementById("a_favoriti").addEventListener("click",PrebaciNaFavorite);
    document.getElementById("btnistrazi").addEventListener("click",PrikaziNogometasa);
    document.getElementById("potvrdi").addEventListener("click",DohvatiKlub);
    
    document.getElementById("sluzbenistr").addEventListener("click",SluzbenaStranica);
    document.getElementById("beze").addEventListener("click",FacebookStranica);

    
    document.getElementById("btnPovratak").addEventListener("click",PrebaciNaPocetnu);
    document.getElementById("btnFavoritKlub").addEventListener("click",SpremiFavorit);
    document.getElementById("btnFavoritIgrac").addEventListener("click",SpremiFavorit2);
    document.getElementById("ocisti").addEventListener("click",OcistiFavorite);

    
    
}


function DohvatiTablicu(){
    zahtjev_tablica = new XMLHttpRequest();
    zahtjev_tablica.onreadystatechange=ObradaZahtjevaTablica;
    zahtjev_tablica.open("GET","https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1819",true);
    zahtjev_tablica.send();
}
function SluzbenaStranica(){
    
    window.open("http://"+urlOfficial,"_system");
    
}
function FacebookStranica(){
    window.open("http://"+urlFace,"_system");
}
function ObradaZahtjevaTablica(){
    if(zahtjev_tablica.status==200 & zahtjev_tablica.readyState == 4){
        var i = 1;
        var rezultat = JSON.parse(zahtjev_tablica.responseText);
        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;
        i+=1;
        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;
        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;
        i+=1;
        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;
        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;
        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;
        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;

        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;

        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;

        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;

        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        i+=1;

        document.getElementById("ime"+i).innerHTML = rezultat.table[i-1].name;
        document.getElementById("oi"+i).innerHTML = rezultat.table[i-1].played;
        document.getElementById("gr"+i).innerHTML = rezultat.table[i-1].goalsdifference;
        document.getElementById("p"+i).innerHTML = rezultat.table[i-1].win;
        document.getElementById("n"+i).innerHTML = rezultat.table[i-1].draw;
        document.getElementById("i"+i).innerHTML = rezultat.table[i-1].loss;
        document.getElementById("bod"+i).innerHTML = rezultat.table[i-1].total;


        
    }
    
}

function PrikaziNogometasa(){
    var selekt = document.getElementById("igraci_select").value;
    
    if(selekt!="null"){
    odabrani_igrac = $("#igraci_select option:selected").text();
    DohvatiPlayer();
    document.getElementById("div_tablica").style.display="none";
    document.getElementById("div_tim").style.display="none"
    document.getElementById("div_favoriti").style.display="none";
    document.getElementById("div_igrac").style.display="block";
    }
    else{
        alert("PRVO ODABERITE IGRACA!!!");
    }
}
function PrebaciNaTim(){
    document.getElementById("div_igrac").style.display="none";
    var vr = document.getElementById("odabir_tim").value;
    if(vr!="null"){
    document.getElementById("a_timovi").className="active";
    document.getElementById("a_pocetna").className="";
    document.getElementById("a_favoriti").className="";
    document.getElementById("div_tablica").style.display="none";
    document.getElementById("div_tim").style.display="block"
    document.getElementById("div_favoriti").style.display="none";
    document.getElementById("div_igrac").style.display="none";
    }
    else
    {
        alert("Trebate prvo odabrati tim!");
    }
    

    
}



function PrebaciNaPocetnu(){
    document.getElementById("a_timovi").className="";
    document.getElementById("a_pocetna").className="active";
    document.getElementById("a_favoriti").className="";
    document.getElementById("div_tim").style.display="none";
    document.getElementById("div_favoriti").style.display="none";
    document.getElementById("div_tablica").style.display="block";
    document.getElementById("div_igrac").style.display="none";
}

function PrebaciNaFavorite(){
    document.getElementById("a_timovi").className="";
    document.getElementById("a_pocetna").className="";
    document.getElementById("a_favoriti").className="active";
    document.getElementById("div_tim").style.display="none";
    document.getElementById("div_favoriti").style.display="block";
    document.getElementById("div_tablica").style.display="none";
    document.getElementById("div_igrac").style.display="none";
    favoritiListaIgraci.innerHTML="";
    favoritiListaKlub.innerHTML="";
    for(i = 0; i < localStorage.length; i++){
        var kljuc = localStorage.key(i);
        var vrijednost = localStorage.getItem(kljuc);
        var test = kljuc.substr(0,4);
        if(test=="Klub"){
            $("#favoritiListaKlub").append($("<li>").text(vrijednost));

        }
        else{
            $("#favoritiListaIgraci").append($("<li>").text(vrijednost));
        }
    }
}
function PromjenaVrijednosti(){
    document.getElementById("div_igrac").style.display="none";
    var izbor = document.getElementById("odabir_tim").value;

    document.getElementById("igraci_select").innerHTML="";
    
    if(izbor==1){
        klub="Arsenal";
    }
    else if(izbor==2){
        klub="Bournemouth";
    }
    else if(izbor==3){
        klub="Brighton";
    }
    else if(izbor==4){
        klub="Burnley";
    }
    else if(izbor==5){
        klub="Cardiff";
    }
    else if(izbor==6){
        klub="Chelsea";
    }
    else if(izbor==7){
        klub="Crystal";
    }
    else if(izbor==8){
        klub="Everton";
    }
    else if(izbor==9){
        klub="Fulham";
    }
    else if(izbor==10){
        klub="Huddersfield";
    }
    else if(izbor==11){
        klub="Leicester";
    }
    else if(izbor==12){
        klub="Liverpool";
    }
    else if(izbor==13){
        klub="Man+City";
    }
    else if(izbor==14){
        klub="Man+Uni";
    }
    else if(izbor==15){
        klub="Newcastle";
    }
    else if(izbor==16){
        klub="Southampton";
    }
    else if(izbor==17){
        klub="Tottenham";
    }
    else if(izbor==18){
        klub="Watford";
    }
    else if(izbor==19){
        klub="West";
    }
    else if(izbor==20){
        klub="Wolverhampton";
    }
    else{
        klub="";
        alert("Morate odabrati neki klub!!");
    }
}
function DohvatiKlub(){
    PromjenaVrijednosti();
    zahtjev_klub = new XMLHttpRequest();
    zahtjev_klub.onreadystatechange=ObradaZahtjevaKlub;
    

    zahtjev_klub.open("GET","https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="+klub,true);
    zahtjev_klub.send();
    if(klub!=""){
    document.getElementById("a_timovi").className="active";
    document.getElementById("a_pocetna").className="";
    document.getElementById("a_favoriti").className="";
    document.getElementById("div_tablica").style.display="none";
    document.getElementById("div_tim").style.display="block"
    document.getElementById("div_favoriti").style.display="none";
    if(klub=="Wolverhampton"){
        klub="Wolves";
    }
    DohvatiIgrace();
    }
}

function ObradaZahtjevaKlub(){
    if(zahtjev_klub.status==200 & zahtjev_klub.readyState == 4){
        
        var rezultat_klub = JSON.parse(zahtjev_klub.responseText);

        nadimakKluba = rezultat_klub.teams[0].strAlternate;

        opisKlub=rezultat_klub.teams[0].strDescriptionEN;
        
        opisStadion=rezultat_klub.teams[0].strStadiumDescription;
        imeStadion=rezultat_klub.teams[0].strStadium;
        tim = rezultat_klub.teams[0].strTeam;
        urlFace = rezultat_klub.teams[0].strFacebook;
        urlOfficial = rezultat_klub.teams[0].strWebsite;
        slikaKlub = rezultat_klub.teams[0].strTeamBadge;
        sifra = rezultat_klub.teams[0].idTeam;
        document.getElementById("fejs").href="http://"+urlFace;
        document.getElementById("sluzbenistr").href="http://"+urlOfficial;
        DohvatiUtakmice();

        DohvatiUtakmice2();
        


        if(klub!=""){
        document.getElementById("slika_tim1").src = slikaKlub;
        document.getElementById("span_klub_ime").innerHTML=tim;
        document.getElementById("nadimak_klub").innerHTML=nadimakKluba;
        document.getElementById("opsirno_klub").innerHTML=opisKlub;
        document.getElementById("opsirno_stadion").innerHTML=opisStadion;
        
        
        
        
        
        
        
        }

        
        
        


    }
    
}

function DohvatiUtakmice(){
    zahtjev_utakmice = new XMLHttpRequest();
    zahtjev_utakmice.onreadystatechange=ObradaUtakmice;
    zahtjev_utakmice.open("GET","https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id="+sifra,true);
    zahtjev_utakmice.send();
}

function ObradaUtakmice(){
    if(zahtjev_utakmice.status==200 & zahtjev_utakmice.readyState==4){
        var rezultat_utakmice=JSON.parse(zahtjev_utakmice.responseText);
        document.getElementById("prijasnje_utakmice").innerHTML="";
        for(var k=0;k<5;k++){
            var datum = "<b>["+rezultat_utakmice.results[k].dateEvent+"]</b>";
            var natjecanje = rezultat_utakmice.results[k].strLeague;
            var sve;
            var event = rezultat_utakmice.results[k].strEvent;
            var domacini = rezultat_utakmice.results[k].intHomeScore;
            var gosti = rezultat_utakmice.results[k].intAwayScore;
            sve =datum + " <b>" + natjecanje +"</b><br> " + event + " : " + "<b>" + domacini + "-" + gosti+ "</b><br>"; 
            document.getElementById("prijasnje_utakmice").innerHTML+=sve+"<br>";

        }
        

        
        

    }
}
function DohvatiUtakmice2(){
    zahtjev_utakmice2 = new XMLHttpRequest();
    zahtjev_utakmice2.onreadystatechange=ObradaUtakmice2;
    zahtjev_utakmice2.open("GET","https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id="+sifra,true);
    zahtjev_utakmice2.send();
}
function ObradaUtakmice2(){
    if(zahtjev_utakmice2.status==200 & zahtjev_utakmice2.readyState==4){
        var rezultat_utakmice2=JSON.parse(zahtjev_utakmice2.responseText);
        document.getElementById("sljedece_utakmice").innerHTML="";
        for(var k=0;k<5;k++){
            var datum = "<b>["+rezultat_utakmice2.events[k].dateEvent+"]</b>";
            var natjecanje = rezultat_utakmice2.events[k].strLeague;
            var event = rezultat_utakmice2.events[k].strEvent;
            
            
            document.getElementById("sljedece_utakmice").innerHTML+= datum + " <b>"+natjecanje+"<br></b> "+event+"<br><br>";

        }
        

        
        

    }

}
function DohvatiIgrace(){
    
    zahtjev_igraci = new XMLHttpRequest();
    zahtjev_igraci.onreadystatechange=ObradaZahtjevaIgraci2;
    zahtjev_igraci.open("GET","https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t="+klub,true);
    zahtjev_igraci.send();
}

function ObradaZahtjevaIgraci2(){
    if(zahtjev_igraci.status==200 & zahtjev_igraci.readyState == 4){
    var rezultat_igraci=JSON.parse(zahtjev_igraci.responseText);
    document.getElementById("igr1").src = rezultat_igraci.player[0].strThumb;
    document.getElementById("igr2").src = rezultat_igraci.player[1].strThumb;
    document.getElementById("igr3").src = rezultat_igraci.player[2].strThumb;
    document.getElementById("igr4").src = rezultat_igraci.player[3].strThumb;
    document.getElementById("igr5").src = rezultat_igraci.player[4].strThumb;
    document.getElementById("igr6").src = rezultat_igraci.player[5].strThumb;
    document.getElementById("igr7").src = rezultat_igraci.player[6].strThumb;
    document.getElementById("igr8").src = rezultat_igraci.player[7].strThumb;
    document.getElementById("igr9").src = rezultat_igraci.player[8].strThumb;
    document.getElementById("igr10").src = rezultat_igraci.player[9].strThumb;
    document.getElementById("igr11").src = rezultat_igraci.player[10].strThumb;
    document.getElementById("igr12").src = rezultat_igraci.player[11].strThumb;
    document.getElementById("igr13").src = rezultat_igraci.player[12].strThumb;
    document.getElementById("igr14").src = rezultat_igraci.player[13].strThumb;
    document.getElementById("igr15").src = rezultat_igraci.player[14].strThumb;
    document.getElementById("igr16").src = rezultat_igraci.player[15].strThumb;
    document.getElementById("igr17").src = rezultat_igraci.player[16].strThumb;
    document.getElementById("igr18").src = rezultat_igraci.player[17].strThumb;
    document.getElementById("igr19").src = rezultat_igraci.player[18].strThumb;
    document.getElementById("igr20").src = rezultat_igraci.player[19].strThumb;


    document.getElementById("impr1").innerHTML = rezultat_igraci.player[0].strPlayer;
    document.getElementById("impr2").innerHTML = rezultat_igraci.player[1].strPlayer;
    document.getElementById("impr3").innerHTML = rezultat_igraci.player[2].strPlayer;
    document.getElementById("impr4").innerHTML = rezultat_igraci.player[3].strPlayer;
    document.getElementById("impr5").innerHTML = rezultat_igraci.player[4].strPlayer;
    document.getElementById("impr6").innerHTML = rezultat_igraci.player[5].strPlayer;
    document.getElementById("impr7").innerHTML = rezultat_igraci.player[6].strPlayer;
    document.getElementById("impr8").innerHTML = rezultat_igraci.player[7].strPlayer;
    document.getElementById("impr9").innerHTML = rezultat_igraci.player[8].strPlayer;
    document.getElementById("impr10").innerHTML = rezultat_igraci.player[9].strPlayer;
    document.getElementById("impr11").innerHTML = rezultat_igraci.player[10].strPlayer;
    document.getElementById("impr12").innerHTML = rezultat_igraci.player[11].strPlayer;
    document.getElementById("impr13").innerHTML = rezultat_igraci.player[12].strPlayer;
    document.getElementById("impr14").innerHTML = rezultat_igraci.player[13].strPlayer;
    document.getElementById("impr15").innerHTML = rezultat_igraci.player[14].strPlayer;
    document.getElementById("impr16").innerHTML = rezultat_igraci.player[15].strPlayer;
    document.getElementById("impr17").innerHTML = rezultat_igraci.player[16].strPlayer;
    document.getElementById("impr18").innerHTML = rezultat_igraci.player[17].strPlayer;
    document.getElementById("impr19").innerHTML = rezultat_igraci.player[18].strPlayer;
    document.getElementById("impr20").innerHTML = rezultat_igraci.player[19].strPlayer;
    var p = document.getElementById("igraci_select");
    
    for(var w=0;w<20;w++){
        var opcija = document.createElement("option");
        opcija.innerHTML = rezultat_igraci.player[w].strPlayer;
        opcija.value = w;
        p.add(opcija);
    }
    


    
    }

}

function DohvatiPlayer(){
    zahtjev1 = new XMLHttpRequest();
    zahtjev1.onreadystatechange=ObradaIgraca;
    zahtjev1.open("GET","https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p="+odabrani_igrac,true);
    zahtjev1.send();
}

function ObradaIgraca(){
    if(zahtjev1.status==200 & zahtjev1.readyState==4){
        var rez_obrade = JSON.parse(zahtjev1.responseText);
        document.getElementById("ime_prezime").innerHTML = "<br>"+ rez_obrade.player[0].strPlayer +"<br><br>";
        document.getElementById("rodenje").innerHTML = "<br>"+rez_obrade.player[0].dateBorn+"<br><br>";
        document.getElementById("nacionalnost").innerHTML = "<br>"+rez_obrade.player[0].strNationality+"<br><br>";
        document.getElementById("pozicija").innerHTML = "<br>"+rez_obrade.player[0].strPosition+"<br><br>";
        document.getElementById("visina_tezina").innerHTML = "<br>"+rez_obrade.player[0].strHeight+"m "+rez_obrade.player[0].strWeight+"kg"+"<br><br>";
        document.getElementById("vrijednost").innerHTML = "<br>"+rez_obrade.player[0].strSigning+"<br><br>";
        document.getElementById("placa").innerHTML= "<br>"+rez_obrade.player[0].strWage+"<br><br>";
        document.getElementById("opis_igraca").innerHTML = "<br>"+rez_obrade.player[0].strDescriptionEN+"<br><br>";
        document.getElementById("slika_igraca").src = rez_obrade.player[0].strThumb;


        
    }
}


function SpremiFavorit(){
    var boolfavorit=true;
    for(i = 0; i < localStorage.length; i++){
        var kljuc = localStorage.key(i);
        var vrijednost = localStorage.getItem(kljuc);
        if(vrijednost==klub){
            boolfavorit=false;
            break;
        }
    }
    if(boolfavorit){
        var id=localStorage.length;
        localStorage.setItem("Klub"+id,klub);
    }


    
    
}
function SpremiFavorit2(){
    var boolfavorit=true;
    for(i = 0; i < localStorage.length; i++){
        var kljuc = localStorage.key(i);
        var vrijednost = localStorage.getItem(kljuc);
        if(vrijednost==odabrani_igrac){
            boolfavorit=false;
            break;
        }
    }
    if(boolfavorit){
        var id=localStorage.length;
        localStorage.setItem("Igrac"+id,odabrani_igrac);
    }
    
    
}

function OcistiFavorite(){
    localStorage.clear();
    favoritiListaIgraci.innerHTML="";
    favoritiListaKlub.innerHTML="";
}
