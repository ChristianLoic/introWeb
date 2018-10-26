 function btnCalculer_onclick()
{
    var day ,doctor,tarif , toilet,total;
    day=parseFloat(document.getElementById("txtNbreJours").value);
     doctor=document.getElementById("lstVeterinaire").value;
      toilet=0;

    if( document.getElementById("chkServ").checked==true)
    {
        if(document.getElementById("radChien").checked==true)
        {
            tarif=24,46;

        }
        else
        {
            tarif=16,95;
        }
        doctor="Audrey Bouchard";
        toilet=5;
    }
     else
    {
         if (document.getElementById("radChien").checked==true)
         {
             tarif=18,50;
         }
         else
         {
             tarif=19,4675;
         }
         doctor="Maxime Simard";


    }

    total=tarif+toilet+(toilet*tarif*1.0475);
    total=total*day;

    console.log("le montant a payer est de :"+total+"$");

}