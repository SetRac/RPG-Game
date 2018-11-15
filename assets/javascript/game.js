var scorpion = {
    // name: "SCORPION", 
    // src: "assets/images/scorpion.jpg",
    hp: 120,
};

var subzero = {
    hp: 100
};

var kitana = {
    hp: 110
};

var shaokahn = {
    hp: 200
};

function resetvalues() {
    charname = "";
    charhp = 0;
    charap = 0;
    baseattack = 0;
    enemyname = "";
    enemyhp = 0
    enemycap = 0;
    remainingenemies = 3;

    charselected = false;
    enemyselected = false;

    $("#scorpion-hp").text(scorpion.hp);
    $("#subzero-hp").text(subzero.hp);
    $("#kitana-hp").text(kitana.hp);
    $("#shaokahn-hp").text(shaokahn.hp);
}

function resetcharacters() {
    $(".characters").append($("#scor"));
    $(".characters").append($("#sub"));
    $(".characters").append($("#kit"));
    $(".characters").append($("#shao"));
    $("#reset").detach();
}

resetvalues();

// var scorpion = $("<img>");
// scorpion.addClass("char-image");
// scorpion.attr("src", "assets/images/scorpion.jpg");
// $("#scorpion-character").text(190);


// var subzero = $("<img>");
// subzero.addClass("char-image");
// subzero.attr("src", "assets/images/subzero.jpg");
// subzero.attr("hp", 120);
// subzero.attr("ap", 8);
// subzero.attr("cap", 150);


// $("#scorpion-char").append(scorpion);

// $("#characters").append(subzero);

// $(".choice").on("click", function() {
//     $(this).attr("src", "assets/images/kitana.jpg");
//     $("#selected").append($(this));
// });



// if booleans are true - can't select stuff



$(".choice").on("click", function() {
    if (charselected == false && enemyselected == false) {
        charname = $(this).attr("name");
        charhp = $(this).attr("hp");
        charap = $(this).attr("ap");
        charhp = parseInt(charhp);
        charap = parseInt(charap);
        baseattack = charap;
        $("#selected").append($(this));
        if (charname == "scorpion") {
            $("#enemy").append($("#sub"));
            $("#enemy").append($("#kit"));
            $("#enemy").append($("#shao"));
        }
        if (charname == "subzero") {
            $("#enemy").append($("#scor"));
            $("#enemy").append($("#kit"));
            $("#enemy").append($("#shao"));
        }
        if (charname == "kitana") {
            $("#enemy").append($("#scor"));
            $("#enemy").append($("#sub"));
            $("#enemy").append($("#shao"));
        }
        if (charname == "shaokahn") {
            $("#enemy").append($("#scor"));
            $("#enemy").append($("#kit"));
            $("#enemy").append($("#sub"));
        }
        charselected = true;
    } else if (charselected == true && enemyselected == false) {
        enemyname = $(this).attr("name");
        enemyhp = $(this).attr("hp");
        enemycap = $(this).attr("cap");
        enemyhp = parseInt(enemyhp);
        enemycap = parseInt(enemycap);
        $("#defender").append($(this));
        enemyselected = true;
    }
});

$(".btn").on("click", function() {
    if (charselected == true && enemyselected == true) {
    enemyhp = enemyhp - charap;
    charhp = charhp - enemycap;
    charap = charap + baseattack;
    $("#" + charname + "-hp").text(charhp);
    $("#" + enemyname + "-hp").text(enemyhp);
    checkoutcome();
    }
});

function checkoutcome() {
    if (enemyhp <= 0) {
        resetvalues();
        var resetbutton = $("<button>");
        resetbutton.attr("id", "reset");
        resetbutton.attr("class", "btn btn-secondary");
        resetbutton.text("Reset");
        $("#info").append(resetbutton);
        $("#reset").on("click", function() {
            resetcharacters();
        });
    }
}

console.log(charhp);
console.log(enemyhp);
console.log(charap);
console.log(enemycap);
// #item.detach() will remove item