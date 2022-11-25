var TrafficLight = function () {
    var count          = 0;
    var currentState   = new Red(this);

    this.change = function (state) {
        if (count++ >= 10) return;  // limits number of changes ;
        currentState = state;
        currentState.go();
    };

    this.start = function () {
        currentState.go();
    };
}

var Red = function (light) {
    this.light = light;
    this.go    = function () {
        console.log("Red --> for 1 minute");
        setTimeout(() => {
            light.change(new Green(light));
        }, 3000);
    }
};

var Yellow = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Yellow --> for 10 seconds");
        setTimeout(() => {
            light.change(new Red(light));
        }, 2000);
    }
};

var Green = function (light) {
    this.light = light;
    console.log("Green --> for 1 minute");
    this.go = function () {
        setTimeout(() => {
            light.change(new Yellow(light));
        }, 5000);
    }
};

function run() {
    var light = new TrafficLight();
    light.start();
}

run();