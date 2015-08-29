import Ember from 'ember';

var ServiceMomento = Ember.Object.extend({
    'current-time': 1,
    'step-interval': 1000,
    init: function(...etc) {
        this._super(...etc);
        Ember.debug('Start ServiceMomento...');
        this.Run();
    },
    Run:function() {
        var that = this;
        this.SetCurrentTime();
        setInterval(function() {
            that.SetCurrentTime();
        }, this.get('step-interval'));
    },
    SetCurrentTime: function() {
        this.set('current-time', window.moment());
    }
});

function Init(container) {
    container.register('service:moment-interval', ServiceMomento, {
        instantiate: false,
        singleton: true
    });
}

export default {
    name: 'gt-momento',
    initialize: Init
};
