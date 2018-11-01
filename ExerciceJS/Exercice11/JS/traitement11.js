function btnCalculer_onclick()
{
    var Nbre1,Nbre2,Signe;

     Nbre1=parseInt(document.getElementById("txtNbre1").value);
    Nbre2=parseInt(document.getElementById("txtNbre2").value);

    if (((Nbre1>=0)&&(Nbre2>=0))||((Nbre2<0)&&(Nbre1<0)))
    {
        Signe="Positif";
    }
    else
    {
        Signe="Negatif";
    }

    document.getElementById("lblMessage").innerHTML="le signe du produit sera : "+Signe;

}