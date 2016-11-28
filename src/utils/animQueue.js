'use strict';
var _ = require('lodash');
//  import animation from js bundle
var animation = __weex_require__('@weex-module/animation');

module.exports = function (el) {
    var frames = (function () {
        /**
         *  constructor
         *  @param {Object} el the element we want to attach animation
         *  @return {Object} frames animation queue object
         */
        var frames = function (el) {
            //  bind element
            this._el = el;
            this._queue = [];
        }
        /**
         *  add animation frame
         *  @param {Object} options animation options
         *  @param {Function} callback the function execute when animation is done
         *  @return {Object} this frames object itself
         */
        frames.prototype.add = function (options, callback) {
            if (_.isArray(this._queue) && options && typeof options === 'object') {
                var animItem = new Object();
                animItem.options = options;
                if (callback && typeof callback === 'function') {
                    animItem.callback  = callback;
                } else {
                    animItem.callback = function () {};
                }
                this._queue.push(animItem);

                return this;
            } else {
                throw new TypeError('Error occured in animation options examination, please check out.');
            }
        }
        //  renane
        frames.prototype.subscribe = frames.prototype.bind = frames.prototype.add;
        /**
         *  execute all animation frame in the queue
         */
        frames.prototype.execute = function () {
            if (this._queue.length) {
                var self = this;
                var frame = this._queue.shift();
                var options = frame.options;
                var callback = frame.callback;

                animation.transition(this._el, options, function () {
                    callback();
                    if (self._queue.length) {
                        self.execute();
                    } else {
                        return;
                    }
                });
            } else {
                return;
            }
        }
        //  renane
        frames.prototype.run = frames.prototype.execute;

        return frames;
    })();
    //  return new object
    return new frames(el);
}
