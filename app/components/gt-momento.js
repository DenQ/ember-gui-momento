import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['time'],
    datetime: 1,
    'service-moment': Ember.inject.service('moment-interval'),

    GetDateTime:function() {
        var a = this.get('service-moment.current-time');
        var b = moment( this.get('datetime') * 1000 );
        return b.from(a);
    }.property('service-moment.current-time')
});
