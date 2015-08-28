var ServiceMomento = Ember.Object.extend({
    'current-time': 1,
    'step-interval': 1000,
    init: function(...etc) {
        Ember.debug('Start ServiceMomento...');
        this.Run();
        return
    },
    Run:function(){
        var that = this;
        this.SetCurrentTime();
        setInterval(function() {
            that.SetCurrentTime();
        }, this.get('step-interval'));
    },
    SetCurrentTime: function() {
        this.set('current-time', moment());
        return
    }
});

function Init(container, application) {
    container.register('service:moment-interval', ServiceMomento.create(), {
        instantiate: false,
        singleton: true
    });
}

export default {
    name: 'gt-momento',
    initialize: function (container, application) {
        Init(container, application);
    }
};
