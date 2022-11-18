var _time = null,
    _nTotalItem = 0;

$(document).ready(function () {
    StartTime();
    GenerateCards();
    InitializeEvents();

});
function StartTime() {

    _time = setInterval(function () {
        $("#spnTime").text(parseInt($("#spnTime").text()) + 1);
    }, 1000);
}

function GenerateCards() {
    $(".spnChild").remove();
    var charArray = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
    _nTotalItem = charArray.length;
    var totalItem = _nTotalItem,
        nId = 0;
    while (totalItem > 0) {
        nId++;
        var index = Math.floor(Math.random() * charArray.length);
        var item = charArray[index];
        $("#divParent").append("<span id=" + nId + " class='spnChild secret' >" + item + "</span>");
        charArray.splice(index, 1);
        totalItem--;

    }
}

function InitializeEvents() {
    $(".spnChild").not(".matched").click(function () {
        $(".matched").removeClass("display");
        if (!$(this).hasClass("display")) {
            $("#spnClickCount").text(parseInt($("#spnClickCount").text()) + 1);

        }
        var itemsCount = $(".display").length;
        if (itemsCount == 2) {
            $(".display").removeClass("display").addClass("secret");
            $(this).removeClass("secret").addClass("display");
        }
        else if (itemsCount == 1) {
            var previousSelectedItem = $(".display").text();
            var currentSelectedItem = $(this).text();
            var previousSelectedItemId = $(".display").attr("id");
            var currentSelectedItemId = $(this).attr("id");

            if (previousSelectedItem === currentSelectedItem && previousSelectedItemId != currentSelectedItemId) {
                $(".display").removeClass("secret").removeClass("display").addClass("matched");
                $(this).removeClass("secret").removeClass("display").addClass("matched");
            } else {
                $(this).removeClass("secret").addClass("display");
            }
        }
        else if (itemsCount == 0) {
            $(this).removeClass("secret").addClass("display");

        }

        if (_nTotalItem == $(".matched").length) {
            if (_time != null) {
                clearInterval(_time);
                alert("Taking time:" + $("#spnTime").text() + "seconds and Total Click:" + $("#spnClickCount").text());


            }
        }
    });
    $("#btnRestart").click(function () {
        if (_time != null) {
            clearInterval(_time);
            $("#spnTime,#spnClickCount").text(0);
            StartTime();
            GenerateCards();
            InitializeEvents();

        }
    });
}