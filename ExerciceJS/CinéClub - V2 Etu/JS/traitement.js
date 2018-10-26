function btnCalculer_onclick()
 {
 	var PrixBase, Age,PrixFinal,rabais,film ,horaire;

 	PrixBase=parseFloat(document.getElementById("txtBasePrix").value);
 	Age=parseFloat(document.getElementById("txtAge").value);
    film=document.getElementById("lstOptions").value ;

  if (document.getElementById("chkMiSession").checked==true)
  {


 	if (Age<=16)
    {
        if(document.getElementById("radMidi").checked==true)
        {
            rabais=0.6;
            horaire="midi";
        }
        else
        {
            rabais=0.4;
            horaire="soir"
        }
    }
    else
    {
        if(document.getElementById("radMidi").checked==true)
        {
            rabais=0.3;
            horaire="midi";
        }
        else
        {
            rabais=0;
            horaire="soir"
        }
    }

  }
  else
   {   rabais=0;
      if(document.getElementById("radMidi").checked==true)
      {


          horaire="midi";
      }
      else
      {

          horaire="soir"
      }

   }

    PrixFinal=PrixBase-(PrixBase*rabais);

    console.log(" un billet  du "+horaire+" pour un spectateur de "+Age+" ans  coute "+PrixFinal+" $ pour le film "+film+".");


 }