function btnCalculer_onclick()
{ 
 var  destination ,distance,conso,PrixLitre,cout ;

  destination=document.getElementById("txtDestination").value;
  distance=parseFloat(document.getElementById("NbreDistance").value );
  conso=parseFloat(document.getElementById("NbreConso").value);
  PrixLitre=parseFloat(document.getElementById("NbrePrix").value);


  cout=(distance*conso*PrixLitre)/100;
   console.log("le cout est de :"+cout);



}