var PrixBase, Age,PrixFinal,rabais,film ,horaire;


function btnCalculer_onclick()
 {

     saisirInfos();
     DeterminerRabais();

 }
function saisirInfos()
{

    PrixBase = parseFloat(document.getElementById("txtBasePrix").value);
    Age = parseFloat(document.getElementById("txtAge").value);
    film = document.getElementById("lstOptions").value;
}
function DeterminerRabais()
{


    if (document.getElementById("chkMiSession").checked == true) {


        if (Age <= 16) {
            if (document.getElementById("radMidi").checked == true) {
                rabais = 0.6;
                horaire = "midi";
            }
            else {
                rabais = 0.4;
                horaire = "soir"
            }
        }
        else {
            if (document.getElementById("radMidi").checked == true) {
                rabais = 0.3;
                horaire = "midi";
            }
            else {
                rabais = 0;
                horaire = "soir"
            }
        }

    }
    else {
        rabais = 0;
        if (document.getElementById("radMidi").checked == true) {


            horaire = "midi";
        }
        else {

            horaire = "soir"
        }

    }

    PrixFinal = PrixBase - (PrixBase * rabais);


    document.getElementById("lblMessage").innerHTML = (" un billet  du " + horaire + " pour un spectateur de " + Age + " ans  coute " + PrixFinal + " $ pour le film " + film + ".");
}
function lstOptions_onchange()
{
    var film ;
    film=document.getElementById("lstOptions").value ;


    document.getElementById("imgLogo").src="img/"+film+".jpg";
}
