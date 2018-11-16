

function btnCalculer_onclick()
{


 if (valideChampsObligatoires()===true )
 {
     Traiter();

 }
}
function Traiter()
{
    var  Nbre1,Nbre2,oper;
    var result;
    result=0;

    Nbre1=parseFloat(document.getElementById("txtNbre1").value);
    Nbre2=parseFloat(document.getElementById("txtNbre2").value);

    oper=document.getElementById("txtOperateur").value;
    result = calculer(Nbre1, Nbre2, oper);
    document.getElementById("lblMessage").innerHTML = "Le resultat est : " + result;
}
function calculer(Nbre1,Nbre2,oper)
{
    var result;
    switch (oper)
    {
        case "+" : result=Nbre2+Nbre1;
            break;
        case "*"  : result=Nbre1*Nbre2;
            break;
        case "/" : result=Nbre1/Nbre2;
            break;
        case "-"  :result=Nbre1-Nbre2;
            break;

    }
    return result;
}
function valideChampsObligatoires()
{
    var valide =false;

    var tabNomid= new Array("txtNbre1","txtNbre2","txtOperateur");
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

