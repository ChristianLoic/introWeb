function btnCalculer_onclick()
{ 
 	var  c1,c5,c10,c25,total ;

 	c1=parseFloat(document.getElementById("1c").value);
 	c5=parseFloat(document.getElementById("5c").value);
 	c10=parseFloat(document.getElementById("10c").value);
 	c25=parseFloat(document.getElementById("25c").value);

 	total= c1+(5*c5)+(10*c10)+(25*c25);
 	total=total/100;
 	 console.log("le total est:"+total);


}