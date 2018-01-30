var machina = require('machina');

export default new machina.BehavioralFsm({
    namespace: "app-stage",
    initialState: "uninitialized",

    initialize: function(options) {},

    states: {
        uninitialized: {
            "*": function(client) {
                this.deferUntilTransition(client);
                this.transition(client, "start");
            }
        },
        start: {
            _onEnter: function(client) {
                console.log('enter start');
                client.view.container.visible = true;
            },
            load: 'demo',
            buttonPush: function(client) {
                this.handle(client, "load");
                console.log('Button pushed (start)');
                //                this.deferUntilTransition(  client, "demo" );
            },
            init: function(client) {},
            _onExit: function(client) {
                console.log('exit start');
                client.view.container.visible = false;
            }
        },
        demo: {
            _onEnter: function(client) {
                console.log('enter demo');
                client.view.container.visible = true;
            },
            init: function(client) {},
            _onExit: function(client) {
                console.log('exit demo');
                client.view.container.visible = false;
            }
        }
    },

    // ???
    reset: function(client) {
        this.handle(client, "_reset");
    },

    buttonPush: function(client) {
        this.handle(client, 'buttonPush');
    },

    init: function(client) {
        this.handle(client, 'init');
    }
});

/*
        input.down.press = () => {
            sprites['text'].x = 150;
        };
        input.down.release = () => {
            sprites['text'].x = 20;
        };
*/
