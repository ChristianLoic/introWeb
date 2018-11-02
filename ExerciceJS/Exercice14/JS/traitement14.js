function btnCalculer_onclick()
{var  Nbre1,Nbre2,oper,result;

Nbre1=parseFloat(document.getElementById("txtNbre1").value);
Nbre2=parseFloat(document.getElementById("txtNbre2").value);
oper=document.getElementById("txtOperateur").value;

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


    document.getElementById("lblMessage").innerHTML="Le resultat est : "+result;
}