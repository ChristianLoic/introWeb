function btnCalculer_onclick()
{ 
 	var PrixBase, Age,PrixFinal,rabais;

 	PrixBase=parseFloat(document.getElementById("txtBasePrix").value);
 	Age=parseFloat(document.getElementById("txtAge").value);



 	if (Age<=16)
    {
        if(document.getElementById("radMidi").checked==true)
        {
            rabais=0.6;
        }
        else
        {
            rabais=0.4;
        }
    }
    else
    {
        if(document.getElementById("radMidi").checked==true)
        {
            rabais=0.3;
        }
        else
        {
            rabais=0;
        }
    }

    PrixFinal=PrixBase-(PrixBase*rabais);

    console.log("ton ticket te coutera:"+PrixFinal+"$");
}