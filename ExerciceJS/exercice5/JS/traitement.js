function btnCalculer_onclick()
{
    var salary,home ,food,move,rest;

    salary=parseFloat(document.getElementById("NbreRevenus").value);
    home=parseFloat(document.getElementById("NbreLoyer").value);
    food=parseFloat(document.getElementById("NbreNourriture").value);
    move=parseFloat(document.getElementById("NbreDeplacements").value);

    rest=salary-home-move-food;
    rest=(rest*12)/52;

    console.log("le reste hebdomadaire est de :"+rest);

}