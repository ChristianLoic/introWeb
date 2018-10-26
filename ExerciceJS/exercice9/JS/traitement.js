function btnCalculer_onclick()
{ 
 	var  Etu,Vieux ,Autres,Total,Prix,Rabais ;

    Etu = parseFloat(document.getElementById("NbEtu").value);
    Vieux = parseFloat(document.getElementById("NbVieux").value);
    Autres = parseFloat(document.getElementById("NbAutres").value);

    Total=Etu+Vieux+Autres;

    if ( Total>5)
    {
        Rabais=0.1;
    }
    else
    {
        Rabais=0;
    }

    Prix=(Etu*12)+(Vieux*15)+(Autres*20);
    Prix= Prix-(Prix*Rabais);

    console.log("le prix  total a payer est de :"+Prix+" $");
}