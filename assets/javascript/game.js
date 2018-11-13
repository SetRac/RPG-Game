var scorpion = {
    name: "SCORPION", 
    src: "assets/images/scorpion.jpg",
    hp: 120,
    ap: 8,
    cap: 150
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

$("#scorpion-hp").text(scorpion.hp);
$("#subzero-hp").text(subzero.hp);
$("#kitana-hp").text(kitana.hp);
$("#shaokahn-hp").text(shaokahn.hp);

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

$(".choice").on("click", function() {
    $(this).attr("src", "assets/images/kitana.jpg");
    $("#selected").append($(this));
});