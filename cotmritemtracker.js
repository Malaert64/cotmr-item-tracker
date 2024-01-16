/* Disable right-click context menus. */
$(document).bind("contextmenu", function() {
    return false;
});

/* KEY ITEMS */

/* Left-click to activate the icon, left-click again to disable it.
 * I copy-pasted this setup for every icon except for the Last Key counter.
 */
$("#dash-boots").on("click", function() {
    if ($("#dash-boots").hasClass("grayscale") === true) {
        $("#dash-boots").removeClass("grayscale");
    } else {
        $("#dash-boots").addClass("grayscale");
    }
});

$("#double").on("click", function() {
    if ($("#double").hasClass("grayscale") === true) {
        $("#double").removeClass("grayscale");
    } else {
        $("#double").addClass("grayscale");
    }
});

$("#tackle").on("click", function() {
    if ($("#tackle").hasClass("grayscale") === true) {
        $("#tackle").removeClass("grayscale");
    } else {
        $("#tackle").addClass("grayscale");
    }
});

$("#kick-boots").on("click", function() {
    if ($("#kick-boots").hasClass("grayscale") === true) {
        $("#kick-boots").removeClass("grayscale");
    } else {
        $("#kick-boots").addClass("grayscale");
    }
});

$("#heavy-ring").on("click", function() {
    if ($("#heavy-ring").hasClass("grayscale") === true) {
        $("#heavy-ring").removeClass("grayscale");
    } else {
        $("#heavy-ring").addClass("grayscale");
    }
});

$("#cleansing").on("click", function() {
    if ($("#cleansing").hasClass("grayscale") === true) {
        $("#cleansing").removeClass("grayscale");
    } else {
        $("#cleansing").addClass("grayscale");
    }
});

$("#roc-wing").on("click", function() {
    if ($("#roc-wing").hasClass("grayscale") === true) {
        $("#roc-wing").removeClass("grayscale");
    } else {
        $("#roc-wing").addClass("grayscale");
    }
});

/* KEY COUNTER */

$("#card-counter, #last-keys").mousedown(function(event) {
    var curr_img = $("#card-counter").attr("src");

    switch (event.which) {
        case 1:
            /* If left-clicked, increase Hint Card count by 1. */
            if (curr_img === "./Assets/Counter0.png") {
                $("#card-counter").attr("src", "./Assets/Counter1.png");
            } else if (curr_img === "./Assets/Counter1.png") {
                $("#card-counter").attr("src", "./Assets/Counter2.png");
            } else if (curr_img === "./Assets/Counter2.png") {
                $("#card-counter").attr("src", "./Assets/Counter3.png");
            } else if (curr_img === "./Assets/Counter3.png") {
                $("#card-counter").attr("src", "./Assets/Counter4.png");
            } else if (curr_img === "./Assets/Counter4.png") {
                $("#card-counter").attr("src", "./Assets/Counter5.png");
            } else if (curr_img === "./Assets/Counter5.png") {
                $("#card-counter").attr("src", "./Assets/Counter6.png");
            } else if (curr_img === "./Assets/Counter6.png") {
                $("#card-counter").attr("src", "./Assets/Counter7.png");
            } else if (curr_img === "./Assets/Counter7.png") {
                $("#card-counter").attr("src", "./Assets/Counter8.png");
            } else if (curr_img === "./Assets/Counter8.png") {
                $("#card-counter").attr("src", "./Assets/Counter9.png");
            } else {
                $("#card-counter").attr("src", "./Assets/Counter0.png");
            }
        case 2:
            /* Middle mouse button does nothing. Just break. */
            break;
        case 3:
            /* If right-clicked, decrease Hint Card count by 1. */
            if (curr_img === "./Assets/Counter0.png") {
                $("#card-counter").attr("src", "./Assets/Counter9.png");
            } else if (curr_img === "./Assets/Counter1.png") {
                $("#card-counter").attr("src", "./Assets/Counter0.png");
            } else if (curr_img === "./Assets/Counter2.png") {
                $("#card-counter").attr("src", "./Assets/Counter1.png");
            } else if (curr_img === "./Assets/Counter3.png") {
                $("#card-counter").attr("src", "./Assets/Counter2.png");
            } else if (curr_img === "./Assets/Counter4.png") {
                $("#card-counter").attr("src", "./Assets/Counter3.png");
            } else if (curr_img === "./Assets/Counter5.png") {
                $("#card-counter").attr("src", "./Assets/Counter4.png");
            } else if (curr_img === "./Assets/Counter6.png") {
                $("#card-counter").attr("src", "./Assets/Counter5.png");
            } else if (curr_img === "./Assets/Counter7.png") {
                $("#card-counter").attr("src", "./Assets/Counter6.png");
            } else if (curr_img === "./Assets/Counter8.png") {
                $("#card-counter").attr("src", "./Assets/Counter7.png");
            } else {
                $("#card-counter").attr("src", "./Assets/Counter8.png");
            }
    }
});

/* ACTION CARDS */

$("#mercury").on("click", function() {
    if ($("#mercury").hasClass("grayscale") === true) {
        $("#mercury").removeClass("grayscale");
    } else {
        $("#mercury").addClass("grayscale");
    }
});

$("#venus").on("click", function() {
    if ($("#venus").hasClass("grayscale") === true) {
        $("#venus").removeClass("grayscale");
    } else {
        $("#venus").addClass("grayscale");
    }
});

$("#jupiter").on("click", function() {
    if ($("#jupiter").hasClass("grayscale") === true) {
        $("#jupiter").removeClass("grayscale");
    } else {
        $("#jupiter").addClass("grayscale");
    }
});

$("#mars").on("click", function() {
    if ($("#mars").hasClass("grayscale") === true) {
        $("#mars").removeClass("grayscale");
    } else {
        $("#mars").addClass("grayscale");
    }
});

$("#diana").on("click", function() {
    if ($("#diana").hasClass("grayscale") === true) {
        $("#diana").removeClass("grayscale");
    } else {
        $("#diana").addClass("grayscale");
    }
});

$("#apollo").on("click", function() {
    if ($("#apollo").hasClass("grayscale") === true) {
        $("#apollo").removeClass("grayscale");
    } else {
        $("#apollo").addClass("grayscale");
    }
});

$("#neptune").on("click", function() {
    if ($("#neptune").hasClass("grayscale") === true) {
        $("#neptune").removeClass("grayscale");
    } else {
        $("#neptune").addClass("grayscale");
    }
});

$("#saturn").on("click", function() {
    if ($("#saturn").hasClass("grayscale") === true) {
        $("#saturn").removeClass("grayscale");
    } else {
        $("#saturn").addClass("grayscale");
    }
});

$("#uranus").on("click", function() {
    if ($("#uranus").hasClass("grayscale") === true) {
        $("#uranus").removeClass("grayscale");
    } else {
        $("#uranus").addClass("grayscale");
    }
});

$("#pluto").on("click", function() {
    if ($("#pluto").hasClass("grayscale") === true) {
        $("#pluto").removeClass("grayscale");
    } else {
        $("#pluto").addClass("grayscale");
    }
});

/* ATTRIBUTE CARDS */

$("#salamander").on("click", function() {
    if ($("#salamander").hasClass("grayscale") === true) {
        $("#salamander").removeClass("grayscale");
    } else {
        $("#salamander").addClass("grayscale");
    }
});

$("#serpent").on("click", function() {
    if ($("#serpent").hasClass("grayscale") === true) {
        $("#serpent").removeClass("grayscale");
    } else {
        $("#serpent").addClass("grayscale");
    }
});

$("#mandragora").on("click", function() {
    if ($("#mandragora").hasClass("grayscale") === true) {
        $("#mandragora").removeClass("grayscale");
    } else {
        $("#mandragora").addClass("grayscale");
    }
});

$("#golem").on("click", function() {
    if ($("#golem").hasClass("grayscale") === true) {
        $("#golem").removeClass("grayscale");
    } else {
        $("#golem").addClass("grayscale");
    }
});

$("#cockatrice").on("click", function() {
    if ($("#cockatrice").hasClass("grayscale") === true) {
        $("#cockatrice").removeClass("grayscale");
    } else {
        $("#cockatrice").addClass("grayscale");
    }
});

$("#manticore").on("click", function() {
    if ($("#manticore").hasClass("grayscale") === true) {
        $("#manticore").removeClass("grayscale");
    } else {
        $("#manticore").addClass("grayscale");
    }
});

$("#griffin").on("click", function() {
    if ($("#griffin").hasClass("grayscale") === true) {
        $("#griffin").removeClass("grayscale");
    } else {
        $("#griffin").addClass("grayscale");
    }
});

$("#thunderbird").on("click", function() {
    if ($("#thunderbird").hasClass("grayscale") === true) {
        $("#thunderbird").removeClass("grayscale");
    } else {
        $("#thunderbird").addClass("grayscale");
    }
});

$("#unicorn").on("click", function() {
    if ($("#unicorn").hasClass("grayscale") === true) {
        $("#unicorn").removeClass("grayscale");
    } else {
        $("#unicorn").addClass("grayscale");
    }
});

$("#black-dog").on("click", function() {
    if ($("#black-dog").hasClass("grayscale") === true) {
        $("#black-dog").removeClass("grayscale");
    } else {
        $("#black-dog").addClass("grayscale");
    }
});