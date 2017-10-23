function Like() {
    $(".recsGamepad .button:nth-child(4)").click()
}

function GetRandom() {
    return Math.floor((Math.random() * 500) + 500);
}

$(document).ready(function() {
    setInterval(function() {Like()}, GetRandom());
});
