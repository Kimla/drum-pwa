"use strict";

var Drums = (function () {
    var s;

    return {

        settings: {
            keys: document.querySelectorAll('.key'),
            sounds: {
                65: new Audio('sounds/clap.wav'),
                83: new Audio('sounds/hihat.wav'),
                68: new Audio('sounds/kick.wav'),
                70: new Audio('sounds/openhat.wav'),
                71: new Audio('sounds/boom.wav'),
                72: new Audio('sounds/ride.wav'),
                74: new Audio('sounds/snare.wav'),
                75: new Audio('sounds/tom.wav'),
                76: new Audio('sounds/tink.wav'),
            },
        },

        init: function() {
            s = this.settings;
            this.bindUIActions();
        },

        bindUIActions: function() {
            window.addEventListener('keydown', Drums.keyDown);

            for (var i = 0; i < s.keys.length; i++) {
                s.keys[i].addEventListener('click', Drums.clickHandler);
            }
        },

        keyDown: function(e) {
            if ( typeof s.sounds[e.keyCode] != 'undefined' ) {
                Drums.playSound(e.keyCode);
            }
        },

        clickHandler: function() {
            Drums.playSound(this.dataset.key);
        },

        playSound: function(key) {
            s.sounds[key].play();
            const keyEl = document.querySelector(`div[data-key="${key}"]`);
            keyEl.classList.add("playing");
            setTimeout(function () {
                keyEl.classList.remove("playing");
            }, 70);
        },

    };
})();

Drums.init();
