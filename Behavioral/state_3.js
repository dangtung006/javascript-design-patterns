function Player(){
    var _currentState = null;

    var _states = {
        'playing'   : new playing(),
        'pausing'   : new pausing(),
        'stopping'  : new stopping(),
    }

    return {
        initialize : function(){
            _currentState = _states['stopping'];

            for(let state in _states) {
                _states[state].initialize(this);
            }
        },

        changeState : function(state){
            if (_currentState !== _states[state]) {
                _currentState.exit();
                _currentState = _states[state];
                _currentState.enter();
                _currentState.execute();
            }
        },

        play : function(){
            _currentState.play(this);
        },

        pause : function(){
            _currentState.pause(this);
        },

        stop : function(){
            _currentState.stop(this);
        }
    }
}

// playerState interface
class PlayerState{
    constructor(actions) {
        for(let key in actions){
            this[key] = actions[key];
        }
    }
}

function playing(){
    var _context   = null;
    return new PlayerState({
        initialize : function(context){
            _context = context;
        },
    
        enter : function(){
            console.log('setting up the playing state');
        },
    
        execute : function() {
            console.log('playing!');
        },
    
        exit : function() {
            console.log('tearing down the playing state');
        },
    
        play : function(){
            console.log('already playing!');
        },
    
        pause : function(){
            _context.changeState('pausing');
        },
    
        stop : function(){
            _context.changeState('stopping');
        }
    });
}

function pausing(){
    var _context = null;

    return new PlayerState({
        initialize : function(context){
            _context = context;
        },
    
        enter : function(){
            console.log('setting up the pausing state');
        },
    
        execute : function() {
            console.log('pausing!');
        },
    
        exit : function() {
            console.log('tearing down the pausing state!');
        },
    
        play : function(){
            _context.changeState("playing");
        },
    
        stop : function(){
            context.changeState('stopping');
        },

        pause : function(){
            console.log('already paused!');
        }
    });
}

function stopping(){
    var _context = null;
    return new PlayerState( {
        initialize : function(context){
            _context = context;
        },
    
        enter : function(){
            console.log('setting up the stopping state');
        },
    
        execute : function() {
            console.log('stopping!');
        },
    
        exit : function() {
            console.log('tearing down the stopping state');
        },
    
        play : function(){
            _context.changeState("playing");
        },
        
        pause : function(){
            _context.changeState("pausing");
        },

        stop : function(){
            console.log('already stopped!');
        }
    });
}

function main(){
    const player = new Player();
    player.initialize();
    player.stop();
    player.play();

    setTimeout(function(){
        player.pause();
    }, 2000);

}

main();