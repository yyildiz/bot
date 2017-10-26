
var LikeBot = {
    likeButton: ".recsGamepad .button:nth-child(4)",
    discoverNewMatchesButton: ".discoverNewMatchesButton",
    randFirst: 500,
    randSecond: 500,
    liking: false,

    like: function() {
        var ref = this;
        this.likeIntervalId = setInterval(function() {
            $(ref.likeButton).click();
        }, this.getRandom());
    },
    getRandom: function() {
        var ref = this;
        return Math.floor((Math.random() * ref.randFirst) + ref.randSecond);
    },

    stop: function() {
        var ref = this;
        clearInterval(ref.likeIntervalId);
    },

    start: function() {
        var ref = this;
        var discoverBtnWait = setInterval(function() {
            if ($(ref.discoverNewMatchesButton).length) {
                ref.createSettingsPanel($(ref.discoverNewMatchesButton));
                clearInterval(discoverBtnWait);
                ref.toggle();
            }
        }, 100);

    },

    createSettingsPanel(panelItem) {
        var ref = this;
        $(panelItem).addClass("tinder_settings")
        $(panelItem).find(".Heading__title").text("Tinder Bot");
        $(panelItem).find(".Heading__subtitle").text("To view or change settings please refer to the chrome extensions page.")
    },

    settingsPanelTrigger() {
        this.toggle();
    },

    toggle: function() {
        if (this.liking) {
            this.stop();
            this.liking = false;
        } else {
            this.like();
            this.liking = true;
        }
    }
}
$(function() {
    chrome.runtime.sendMessage({action: "getInformation"}, function(response) {
        console.log(response);
        LikeBot.start();
    })


});
