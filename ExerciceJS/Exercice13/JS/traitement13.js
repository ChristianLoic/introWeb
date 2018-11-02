function btnCalculer_onclick()
{ var numero , jours;

   numero=parseInt(document.getElementById("txtNumSem").value);

   switch(numero)
    {
        case 1: jours="Lundi";
                      break;
        case 2:    jours="Mardi";
                        break;
        case 3:    jours="Mercredi";
                     break;
        case 4:    jours="Jeudi";
                     break;
        case 5:    jours="Vendredi";
                     break;
        case 6:    jours="Jeudi";
                      break;
        case 7:    jours="Vendredi";
                     break;

    }

    document.getElementById("lblMessage").innerHTML="le jour de la semaine correspondant est : "+jours;
 	

}