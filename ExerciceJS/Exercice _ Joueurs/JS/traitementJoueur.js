
var   cpt,TabJoueur= new Array(4),TabPoint= new Array(4);
cpt=0;
function btnAjouter_onclick()
{

var   Nom, Points;
        Nom = document.getElementById("txtNom").value;
        Points=parseFloat(document.getElementById("txtPoints").value);
    TabJoueur[cpt]=Nom;
     TabPoint[cpt]=Points;

    cpt++;
    document.getElementById("lblNbreJoueur").innerHTML=("Numéro du joueur"+(cpt+1));


    if (cpt==4)
    {
        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnRechercher").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;



    }


}
function btnTrouverMoy_onclick()
{
   var moy;
   moy=TrouverMoy();
    document.getElementById("lblReponse").innerHTML=("la moyenne est :"+moy);



}
function TrouverMoy()
{
    var Moy , TotPoints;
    Moy=0;
    TotPoints=0;
    for(i=0;i<TabPoint.length;i++)
    {
        TotPoints+=TabPoint[i];
    }
    Moy=TotPoints/4;
    return Moy;
}
 function btnTrouverMeilleur_onclick()
 {

     var Max;
     Max=TrouverMoy();


     document.getElementById("lblReponse").innerHTML=("le meilleur pointage  est :"+Max);

 }
function TrouverMoy()
{
    var  max ;
    max=0;

    for(i=0;i<=TabPoint.length;i++)
    {
        if(max<TabPoint[i])
        {
            max=TabPoint[i];
        }

    }
return max;
}

function btnTrouverPire_onclick()
 {
      var Pire;
      Pire=TrouverPire();


     document.getElementById("lblReponse").innerHTML=("le pire pointage  est :"+Pire);
 }
function TrouverPire()
{
    var pire;
    pire = 0;
    for (i = 0; i <= TabPoint.length; i++) {

        if (pire > TabPoint[i]) {
            pire = TabPoint[i];
        }

    }
    return pire;
}

 function btnRechercher_onclick()
 { var  Trouve,Nbre,Joueur ;
    Trouve=false;
    Nbre=0;
    Joueur=document.getElementById("txtNom").value;
    while((Trouve=false)&& (Nbre<=4) )

    {
        if (TabJoueur[Nbre]==Joueur)
        {
            Trouve=true;
        }
        else
        {
            Nbre++;
        }
    }

    if (Trouve==true)
    {
        document.getElementById("lblMessageJoueur").innerText=("le nombre de point de  "+TabJoueur[Nbre]+"est"+TabPoint[Nbre]);
    }
    else
    {
        alert("eleve non trouvr");
    }


 }