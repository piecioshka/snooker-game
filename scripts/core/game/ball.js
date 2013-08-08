(function (global) {
    "use strict";

    // imports
    var _ = global._;
    var snooker = (global.snooker = global.snooker || {});
    var Keys = (global.Keys = global.Keys || {});

    /**
     * @param {string} color
     * @constructor
     */
    snooker.Ball = function (color) {
        if (!_.isString(color)) {
            throw new Error("snooker.Ball: color should creating with *string*, not " + typeof color);
        }

        /**
         * @type {CanvasRenderingContext2D}
         */
        this.ctx = null;

        /**
         * @type {string}
         */
        this.color = color.toLowerCase();

        /**
         * @type {Image}
         */
        this.img = null;

        /**
         * Positions
         * @type {object}
         */
        this.position = {
            x: null,
            y: null
        };
    };

    /**
     * Setup Ball dimensions.
     * @type {number}
     */
    snooker.Ball.RADIUS = 5.25 * Game.SCALE;

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {Object} pos
     * @param {Object} pos.x
     * @param {Object} pos.y
     * @returns {Ball}
     */
    snooker.Ball.prototype.build = function (ctx, pos) {
        this.ctx = ctx;
        this.position = pos;
        this.draw();
        return this;
    };

    snooker.Ball.prototype.draw = function () {
        var resource = game.resourceLoader.getResource("ball-" + this.color);
        var texture = resource.img;
        this.ctx.drawImage(texture, this.position.x, this.position.y, snooker.Ball.RADIUS * 2, snooker.Ball.RADIUS * 2);
    };

    snooker.Ball.prototype.move = function (direction, power) {
        // this.ctx.clearRect(this.position.x, this.position.y, snooker.Ball.RADIUS * 2, snooker.Ball.RADIUS * 2);
        snooker.draw();

        switch (direction) {
            case Keys.LEFT:
                this.position.x -= power;
                break;
            case Keys.UP:
                this.position.y -= power;
                break;
            case Keys.RIGHT:
                this.position.x += power;
                break;
            case Keys.DOWN:
                this.position.y += power;
                break;
        }

        this.draw();
    };

}(this));
