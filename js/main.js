$('.bid-history').on('click', function() {
    $(this).closest('.grid-el').find('.details').toggleClass('visible').slideToggle()

    if( !$(this).closest('.grid-el').find('.details').hasClass('visible')) {
        $(this).css("background", "linear-gradient(90deg, #74b946 0%, #8fb946 100%)")
        $(this).css("color", "white")
    } else {
        $(this).css("background", "white")
        $(this).css("color", "#8FB946")
    }
})

$(".upper").on("input", setFill);
$(".lower").on("input", setFill);

var max = $(".upper").attr("max");
var min = $(".lower").attr("min");

function setFill(evt) {
    var valUpper = $(".upper").val();
    var valLower = $(".lower").val();
    if (parseFloat(valLower) > parseFloat(valUpper)) {
        var trade = valLower;
        valLower = valUpper;
        valUpper = trade;
    }
    
    var width = valUpper * 100 / max;
    var left = valLower * 100 / max;
    $(".fill").css("left", "calc(" + left + "%)");
    $(".fill").css("width", width - left + "%");
    
    if (parseInt(valLower) == min) {
        $(".lower").html(`$0`);
    } else {
        $(".lower").html(`$${parseInt(valLower).toLocaleString()}`);
    }
    if (parseInt(valUpper) == max) {
        $(".upper").html("$10,000+");
    } else {
        $(".upper").html(`$${parseInt(valUpper).toLocaleString()}`);
    }
}

