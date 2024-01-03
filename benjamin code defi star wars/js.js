document.addEventListener("DOMContentLoaded", () => {



    const clickflecheleft = document.querySelector(".div_fleche_left");
    const clickflecheright = document.querySelector(".div_fleche_right");

    const fleche_barre_left_end = document.querySelector("#barre_fleche_left");
    const fleche_pointe_left_end = document.querySelector("#pointe_fleche_left");
    const fleche_barre_right_end = document.querySelector("#barre_fleche_right");
    const fleche_pointe_right_end = document.querySelector("#pointe_fleche_right");

    const circle = document.querySelector("#circle1");
    const circle2 = document.querySelector("#circle2");
    const circle3 = document.querySelector("#circle3");
    const circle4 = document.querySelector("#circle4");
    const circle5 = document.querySelector("#circle5");

    const central_line1 = document.querySelector("#central_line1");
    const central_line2= document.querySelector("#central_line2");
    const central_line3 = document.querySelector("#central_line3");
    const central_line4 = document.querySelector("#central_line4");

    const fleche_barre_left = document.querySelector(".barre_fleche_left");
    const fleche_pointe_left = document.querySelector(".pointe_fleche_left");
    const fleche_barre_right = document.querySelector(".barre_fleche_right");
    const fleche_pointe_right = document.querySelector(".pointe_fleche_right");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    const txt3 = document.querySelector("#txt3");

    const title1 = document.querySelector("#title1");
    const title2 = document.querySelector("#title2");
    const title3 = document.querySelector("#title3");

    const date1 = document.querySelector("#date1");
    const date2 = document.querySelector("#date2");
    const date3 = document.querySelector("#date3");

    const img1 = document.querySelector("#img_p1");
    const img2 = document.querySelector("#img_p2");
    const img3 = document.querySelector("#img_p3");

    const affiche1 = document.querySelector("#affiche1");
    const affiche2 = document.querySelector("#affiche2");
    const affiche3 = document.querySelector("#affiche3");

    let current = 1;
    
    clickflecheright.addEventListener('click', () => {
        if (current === 1) {
            
        img1.classList.add("img_hidden1");
        img2.classList.remove("img_hidden2");

        txt1.classList.add("txt_hidden1");
        txt2.classList.remove("txt_hidden2");

        title1.classList.add("h2_hidden1");
        title2.classList.remove("h2_hidden2");

        date1.classList.add("date1_hidden");
        date2.classList.remove("date2_hidden");

        affiche2.classList.remove("affiche_hidden2_right");
        setTimeout(function() {
            affiche1.classList.add("affiche_hidden1");
        }, 500)

        circle2.classList.add("using");
        central_line1.classList.add("using_central");

        fleche_barre_left_end.classList.remove("barre_fleche_left_end");
        fleche_pointe_left_end.classList.remove("pointe_fleche_left_end");

            current = 2;
        }

        else if (current === 2) {

            img2.classList.add("img_hidden2");
            img3.classList.remove("img_hidden3");

            txt2.classList.add("txt_hidden2");
            txt3.classList.remove("txt_hidden3");
    
            title2.classList.add("h2_hidden2");
            title3.classList.remove("h2_hidden3");
    
            date2.classList.add("date2_hidden");
            date3.classList.remove("date3_hidden");

            
            affiche3.classList.remove("affiche_hidden3");
            setTimeout(function() {
                affiche2.classList.add("affiche_hidden2_left");
            }, 500)
    
            circle3.classList.add("using");
            central_line2.classList.add("using_central");

            fleche_barre_right_end.classList.add("barre_right_end");
            fleche_pointe_right_end.classList.add("pointe_right_end");

            current = 3;

        }
    })


    clickflecheleft.addEventListener('click', () => {
        if (current === 2) {
            console.log("click left 2");

            img1.classList.remove("img_hidden1");
            img2.classList.add("img_hidden2");

            txt1.classList.remove("txt_hidden1");
            txt2.classList.add("txt_hidden2");
    
            title1.classList.remove("h2_hidden1");
            title2.classList.add("h2_hidden2");
    
            date1.classList.remove("date1_hidden");
            date2.classList.add("date2_hidden");
    
            affiche1.style.zIndex = 2;
            affiche2.style.zIndex = 1; 
            affiche1.classList.remove("affiche_hidden1");
            setTimeout(function() {
                affiche2.classList.add("affiche_hidden2_right");
                setTimeout(function() {
                    affiche1.style.zIndex = "auto";
                    affiche2.style.zIndex = "auto"; 
                }, 1000)
            }, 500)
    
            circle2.classList.remove("using");
            central_line1.classList.remove("using_central");
    
            fleche_barre_left_end.classList.add("barre_fleche_left_end");
            fleche_pointe_left_end.classList.add("pointe_fleche_left_end");

            current = 1;
        }

        else if (current === 3) {
            
            img2.classList.remove("img_hidden2");
            img3.classList.add("img_hidden3");
    
            txt2.classList.remove("txt_hidden2");
            txt3.classList.add("txt_hidden3");
    
            title2.classList.remove("h2_hidden2");
            title3.classList.add("h2_hidden3");
    
            date2.classList.remove("date2_hidden");
            date3.classList.add("date3_hidden");
    
            affiche2.style.zIndex = 2;
            affiche3.style.zIndex = 1; 
            affiche2.classList.remove("affiche_hidden2_left");
            setTimeout(function() {
                affiche3.classList.add("affiche_hidden3");
                setTimeout(function () {
                    affiche2.style.zIndex = "auto"; 
                    affiche3.style.zIndex = "auto"; 
                }, 1000)
            }, 500)
    
            circle3.classList.remove("using");
            central_line2.classList.remove("using_central");
    
            fleche_barre_right_end.classList.remove("barre_right_end");
            fleche_pointe_right_end.classList.remove("pointe_right_end");

            current = 2
    
        }

    })


})