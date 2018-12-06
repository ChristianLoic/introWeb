var  cpt ,tabAge=new Array(4), tabNom=new Array(4) ,tabPrenom =new Array(4) ;

cpt=0;
function btnAjouter_onclick()
{
    var Nom,Age , Prenom;

    Nom= document.getElementById("txtNom").value ;
    Prenom=document.getElementById("txtPrenom").value;
    Age=parseInt(document.getElementById("txtAge").value);

    tabNom[cpt]=Nom;
    tabPrenom[cpt]=Prenom;
    tabAge[cpt]=Age;

    cpt++;
    if(cpt==4)
    {

        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnEnvoyer").disabled=false;
        document.getElementById("btnRechercher").disabled=false;
        document.getElementById("btnReset").disabled=false;
        document.getElementById("btnSearchWholeName").disabled=false;
    }

}
function btnRechercher_onclick()
{
   var jeun;
   jeun=rechercherplusjeune();
   document.getElementById("lbLMessage").innerHTML="le plus vieux est :"+tabNom[jeun]+" "+tabPrenom[jeun]+" ager de:"+tabAge[jeun]+"ans";
}
function rechercherplusjeune()
{
    var pos, jeune;
    jeune=0;
    pos=0;
    for (i=0;i<tabAge.length;i++)
    {
        if (jeune>tabAge[i])
        {
            jeune=tabAge[i];
            pos=i;
        }
    }
   return pos;
}
function btnSearchWholeName_onclick()
{
    var trouve;
    trouve=chercherPersonne();
    if(trouve==false)
    {
        document.getElementById("lbLMessage2").innerHTML="cette personne n'existe pas ici";
    }
    else if(trouve==true)
    {
        document.getElementById("lbLMessage2").innerHTML="cette personne existe bel et bien";
    }

}
function chercherPersonne()
{ var Nom,sa,ss ,Prenom ,trouvePreNom, trouveNom;
      sa=0;
      ss=0;
    trouveNom=false;
    trouvePreNom=false;
    trouve=false;
    Nom=document.getElementById("txtNom").value ;
    Prenom=document.getElementById("txtPrenom").value;
    while((trouveNom==false)&&(sa<tabNom.length))
    {
        if (Nom==tabNom[sa])
        {
            trouveNom=true;
        }
        sa++;
    }
    while( (trouvePreNom==false)&&(ss<tabPrenom.length))
    {
        if(Prenom==tabPrenom[ss])
        {
            trouvePreNom=true;
        }
        ss++;
    }

    if ((trouvePreNom==true)&&(trouveNom==false))
    {
        trouve=true;
    }

    return trouve;
}
function frmMembre_onsubmit()
{
 var valid=true;

    if (validChampOblig()===true)
    {
        if(validFormat()===true)
        {
            tarif= DterminerTarif();

            if(confirm( "voulez-vous vous inscrire pour "+tarif+"? dollars ?")!=true)
            {
                valid = false;
            }
        }
    }
  return valid;
}
function DterminerTarif()
{
     var categorie ,tarif;
     categorie=document.getElementById("type").value;
      if (categorie=="adulte")
      {
          tarif=90;
      }
      else if (categorie=="étudiant")
      {
          tarif=60;
      }
      else if (categorie=="retraité")
      {
          tarif=80;
      }
      document.getElementById("lblMessagetarif").innerHTML="le tarif est de :"+tarif+"$";
  return tarif;
}

function ValiExist(NomID)
{
    var valide =true;
    if(document.getElementById(NomID).value ==="")

    {
        valide = false;

        document.getElementById("lblMessageErreur").innerHTML="TOUS LES ELEMENTS AYANT UNE ETOILE SONT OBLIGATOIRES";
        document.getElementById("lblMessageErreur").style.color ="Red";

    }
    else
    {
        valide = true;
        document.getElementById(NomID).style.borderColor = "White";
        document.getElementById("lblMessageErreur").innerHTML=" ";
    }

    return valide;
}
function validChampOblig()

{
    var valide = true;
    var TabChamp = new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");

    for (var i = 0;i<TabChamp.length;i++)
    {
        if(ValiExist(TabChamp[i])===false)
        {
            valide = false;
        }
    }
    return valide;
}

function validFormat()
{

    var valide = true;

    if (valideNom(document.getElementById("txtNom").value)=== false)
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor = "Red";
    }
    else
    {
        document.getElementById("txtNom").style.borderColor = "";
    }

    if (valideNom(document.getElementById("txtPrenom").value)=== false)
    {
        valide = false;
        document.getElementById("txtPrenom").style.borderColor = "Red";
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor = "";
    }



    if(valideNom(document.getElementById("txtVille").value)=== false)
    {
        valide = false;
        document.getElementById("txtVille").style.borderColor = "Red";
    }
    else
    {
        document.getElementById("txtVille").style.borderColor = "";
    }

    if(validTel(document.getElementById("txtTel").value)=== false)
    {
        valide = false;
        document.getElementById("txtTel").style.borderColor = "Red";
    }
    else
    {
        document.getElementById("txtTel").style.borderColor = "";
    }

    if((valideCodePOSTAL(document.getElementById("txtCodePostal").value)=== false )&& (document.getElementById("txtCodePostal").value!="") )
    {
        valide = false;
        document.getElementById("txtCodePostal").style.borderColor = "Red";
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor = "";
    }
    if(validerCodePermanant(document.getElementById("txtCodePerm").value)=== false)
    {
        valide = false;
        document.getElementById("txtCodePerm").style.borderColor = "Red";
    }
    else
    {
        document.getElementById("txtCodePerm").style.borderColor = "";
    }


    return valide;

}
function valideNom(chaine)
{

    return /^[A-z]+$/.test(chaine);
}


function  validTel(chaine)
{
    return /^((\(\d{3}\))|\d{3}) \d{3}[-]\d{4}$/.test(chaine);
}
function valideCodePOSTAL(chaine)
{
    return /^[A-z][0-9][A-z] [0-9][A-z][0-9]/.test(chaine);
}
function validerCodePermanant(chaine)
{
     return /^[A-z]{4}[0-9]{8}/.test(chaine);
}


