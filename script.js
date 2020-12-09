let space = document.getElementsByClassName("cases");

for(let choice of space) {
    choice.addEventListener("mouseup", function game(event) {
        switch (event.button) {

            //Clic gauche

            case 0:
                if(player() ==="joueurUn") {
                    if(choice.getElementsByTagName("img").length === 0) {
                        let rond = document.createElement("img");
                        rond.src = "rond.jpg";
                        rond.style.width = "55%";
                        rond.style.height = "75%";
                        choice.appendChild(rond);
                        choice.classList.add("joueurUn");
                    }
                }
                break;

            //Clic droit

            case 2:
                if(player() ==="joueurDeux") {
                    if(choice.getElementsByTagName("img").length === 0) {
                        let croix = document.createElement("img");
                        croix.src = "croix.jpg";
                        croix.style.width = "55%";
                        croix.style.height = "75%";
                        choice.appendChild(croix);
                        choice.classList.add("joueurDeux");
                    }
                }
                break;
        }

        //Fin de la parti + reset

        let finGame = win();
        if(finGame !== false) {
            alert(finGame);
            for(let del of space) {
                del.classList.remove("joueurUn", 'joueurDeux');
                let imgs = del.getElementsByTagName('img');
                if(imgs.length > 0) {
                    imgs[0].remove();
                }

                del++;
            }
        }
    });
}

// Altérnance des joueurs

function player() {
    let joueur1 = 0;
    let joueur2 = 0;

    for(let rempli of space) {
        if(rempli.classList.contains("joueurUn")) {
            joueur1++;
        }
        else if(rempli.classList.contains("joueurDeux")) {
            joueur2++
        }
    }
    if(joueur1 === joueur2) {
        return "joueurUn"
    }
    else {
        return "joueurDeux"
    }
}

function win() {
    let joueur1 = 0;
    let joueur2 = 0;
    let complet = 0;

    // Condition pour que le joueur 1 gagne

    if((space[0].classList.contains("joueurUn") && space[1].classList.contains("joueurUn") && space[2].classList.contains("joueurUn")) ||
        (space[3].classList.contains("joueurUn") && space[4].classList.contains("joueurUn") && space[5].classList.contains("joueurUn")) ||
        (space[6].classList.contains("joueurUn") && space[7].classList.contains("joueurUn") && space[8].classList.contains("joueurUn")) ||
        (space[0].classList.contains("joueurUn") && space[3].classList.contains("joueurUn") && space[6].classList.contains("joueurUn")) ||
        (space[1].classList.contains("joueurUn") && space[4].classList.contains("joueurUn") && space[7].classList.contains("joueurUn")) ||
        (space[2].classList.contains("joueurUn") && space[5].classList.contains("joueurUn") && space[8].classList.contains("joueurUn")) ||
        (space[0].classList.contains("joueurUn") && space[4].classList.contains("joueurUn") && space[8].classList.contains("joueurUn")) ||
        (space[2].classList.contains("joueurUn") && space[4].classList.contains("joueurUn") && space[6].classList.contains("joueurUn"))) {
            joueur1++;
    }

    // Condition pour que le joueur 2 gagne

    else if((space[0].classList.contains("joueurDeux") && space[1].classList.contains("joueurDeux") && space[2].classList.contains("joueurDeux")) ||
        (space[3].classList.contains("joueurDeux") && space[4].classList.contains("joueurDeux") && space[5].classList.contains("joueurDeux")) ||
        (space[6].classList.contains("joueurDeux") && space[7].classList.contains("joueurDeux") && space[8].classList.contains("joueurDeux")) ||
        (space[0].classList.contains("joueurDeux") && space[3].classList.contains("joueurDeux") && space[6].classList.contains("joueurDeux")) ||
        (space[1].classList.contains("joueurDeux") && space[4].classList.contains("joueurDeux") && space[7].classList.contains("joueurDeux")) ||
        (space[2].classList.contains("joueurDeux") && space[5].classList.contains("joueurDeux") && space[8].classList.contains("joueurDeux")) ||
        (space[0].classList.contains("joueurDeux") && space[4].classList.contains("joueurDeux") && space[8].classList.contains("joueurDeux")) ||
        (space[2].classList.contains("joueurDeux") && space[4].classList.contains("joueurDeux") && space[6].classList.contains("joueurDeux"))) {
            joueur2++;
    }

    // Condition pour que la partie finisse en cas de draw

    for(let rempli of space) {
        if(rempli.classList.contains("joueurUn") || rempli.classList.contains("joueurDeux")) {
            complet++;
        }
    }

    // Condition pour finir la partie

    if(joueur1 === 1){
        return "Joueur 1 a gagné";
    }
    else if(joueur2 === 1) {
        return "Joueur 2 a gagné";
    }
    else if(complet === 9) {
        return "Personne ne gagne";
    }
    return false;
}

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

