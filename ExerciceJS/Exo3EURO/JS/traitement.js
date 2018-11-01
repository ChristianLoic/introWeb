function btnCalculer_onclick()
{
    var can,taux ,euro;
    can=parseFloat(document.getElementById("NbArg").value);
    taux=parseFloat(document.getElementById("NbTaux").value);

    euro=can*taux;
    console.log("le montant en euro est :"+euro+"euro");
 	

}