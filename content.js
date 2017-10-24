$(function () {
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
                if($(ref.discoverNewMatchesButton).length) {
                    $(ref.discoverNewMatchesButton).on("click", function(e) {
                        e.preventDefault();
                        ref.toggle();
                    });
                    ref.createSwipeButton();
                    clearInterval(discoverBtnWait);
                }
            }, 100);
        },

        createSwipeButton: function() {
            var discoverBtn = $(this.discoverNewMatchesButton);
            var swipeBtn = discoverBtn.clone();
            swipeBtn.find("h3").text("Begin Swiping");
            swipeBtn.find(".Heading__subtitle").text("Click here to automate your swiping");
            swipeBtn.insertBefore(discoverBtn);

        },

        toggle: function() {
            if(this.liking) {
                this.stop();
                console.log("stopping");
                this.liking = false;
            } else {
                this.like();
                console.log("starting");
                this.liking = true;
            }
        }
    }

    LikeBot.start();

});
