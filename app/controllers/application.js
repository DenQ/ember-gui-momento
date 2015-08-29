import Ember from 'ember';

export default Ember.Controller.extend({
    'current-time': window.moment().unix(),
    interval: [
        32,
        34,
        36,
        38,
        40,
        45,
        99,
        120,
        150,
        155,
        160,
        200,
        230,
        1800,
        3600,
        36000,
        750000,
        1750000,
        17500000,
        155000000,
    ],
    pull: [],
    init: function() {
        this._super();
        var that = this;
        this.get('interval').forEach(function(item){
            that.PushTime(item);
        });
    },
    PushTime: function(interval) {
        var currentTime = this.get('current-time');
        var deliveryTime = currentTime - interval;
        var obj = {
            'time': deliveryTime,
            'component-string': '{{gt-momento datetime=' + deliveryTime + '}}'
        };
        this.get('pull').pushObject(obj);
        console.log(currentTime, deliveryTime, obj);
    }

});
