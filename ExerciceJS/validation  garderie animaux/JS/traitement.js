var day ,doctor,tarif, toilet,total ,rabais,hour,horaire,paydoc, NomClient,NumClient;
function btnCalculer_onclick()
{



    if (valideChampsObligatoires()===true )
    {


        saisirInfos();
        calulerPrix();
        afficherMessage();
    }
}
function saisirInfos()
{



    NomClient=document.getElementById("txtNom").value
    NumClient=parseFloat(document.getElementById("txtNum").value);

    day = parseFloat(document.getElementById("txtNbreJours").value);
    doctor = document.getElementById("lstVeterinaire").value;
    hour = parseFloat(document.getElementById("txtNbreHeures").value);
    toilet = 0;
}
function calulerPrix()
{

    DeterminerTarifEtDoc();
    determinerRabais();
    tarif = tarif - (tarif * rabais);
    CalculerPayDoc();

    total = tarif + toilet + (toilet * tarif * 1.1);
    total = (total * day) + paydoc;
    total =total- (rabais * total);
}
function afficherMessage()
{


    console.log("le montant a payer est de :"+total+"$");
    document.getElementById("lblMessage").innerHTML="le montant a payer est de :"+total+"$ puisque vous avez eu droit a un rabais de :"+rabais+" $ et le service sera supervise par le docteur :"+doctor;
}
function radChien_onclick()
{

   document.getElementById("imgLogo").src="img/chien.jpg";
}
 function radChat_onclick()
 {
     document.getElementById("imgLogo").src="img/chat1.jpg";
 }
 function determinerRabais()
 {
     if ((day >= 1) && (day < 5)) {
         rabais = 0;
     }
     else if ((day >= 5) && (day < 10)) {
         rabais = 0.05;
     }
     else if ((day >= 10) && (day < 30)) {
         rabais = 0.1;
     }
     else if (day >= 30) {
         rabais = 0.15;
     }
 }
 function CalculerPayDoc()
 {
     switch (doctor) {
         case "Audrey Bouchard":
             horaire = 25;
             break;
         case "Maxime Simard":
             horaire = 35;
             break;
         case "Stéphane Tremblay":
             horaire = 40;
             break;
         case "Mélissa Caron":
             horaire = 45;
             break;
     }
     paydoc = hour * horaire;

     paydoc = paydoc + (paydoc * 1.1);
 }
 function DeterminerTarifEtDoc()
 {
     if (document.getElementById("chkServ").checked == true)
     {
         if (document.getElementById("radChien").checked == true)
         {
             tarif = 24.5;

         }
         else {
             tarif = 17;
         }
         doctor = "Audrey Bouchard";
         toilet = 5;
     }
     else
     {
         if (document.getElementById("radChien").checked == true)
         {
             tarif = 18.5;
         }
         else {
             tarif = 19.5;
         }
         doctor = "Maxime Simard";


     }
 }
function valideChampsObligatoires()
{
    var valide =false;

    var tabNomid= new Array("txtNom","txtNum","txtNbreJours","txtNbreHeures");
    for(i=0;i<tabNomid.length;i++)
    {

        if((valideExiste(tabNomid[i])===true))
        {
            valide = true;
        }
    }
    return valide;

}
function valideExiste(nomID)
{
    var valide =true;
    if (document.getElementById(nomID).value ==="")
    {
        document.getElementById(nomID).style.backgroundColor = "red";
        valide=false;
    }
    else
    {
        document.getElementById(nomID).style.backgroundColor = "white";
    }
    return valide
}
