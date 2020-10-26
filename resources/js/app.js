require('./bootstrap');

// TODO: INJECT REAL VALUES FROM CONTROLLER
let defaultLight = {"reachable": false, "isOn": false, "brightness": 0, "colour": "0,0,0"};
window.lightStatus = {
    "hue11": defaultLight,
    "hue16": defaultLight,
    "hue17": defaultLight,
    "hue19": defaultLight,
    "hue20": defaultLight,
    "hue21": defaultLight,
    "hue22": defaultLight,
    "hue23": defaultLight,
    "hue24": defaultLight,
    "hue25": defaultLight,
    "hue26": defaultLight,
    "hue27": defaultLight,
    "hue28": defaultLight,
    "lifxd073d512326b": defaultLight,
    "lifxd073d5032114": defaultLight
};

(function updateStatus() {
    axios.get('/lights')
        .then((response) => {
            window.lightStatus = response.data;
            window.dispatchEvent(new Event('new-status'));
        })
        .catch(function (error) {
            console.log(error);
        });

    setTimeout(updateStatus, 2.5 * 1000);
})();

window.dashboard = function () {
    return {
        loaded: false,
        lightStatus: window.lightStatus,
        updateStatus() {
            console.log('Updating status');
            this.lightStatus = window.lightStatus;
            this.loaded = true;
        }
    }
}

window.light = function (id) {
    return {
        wait: false,
        id: id,
        toggle() {
            this.wait = true;
            axios.get('/lights/' + id + '/toggle')
                .then(() => {
                    this.wait = false;
                })
                .catch(function (error) {
                    console.log(error);
                    this.wait = false;
                });
        },
        details() {
            location.href = '/lights/' + id + '/detail';
        }
    }
}

window.group = function (path) {
    return {
        path: path,
        toggle() {
            axios.get('/groups/' + path + '/toggle')
                .then((response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}


window.details = function (id, brightness) {
    return {
        id: id,
        brightness: brightness,
        setColour(colour) {
            axios.get('/lights/' + id + '/set-colour', {params: {colour: colour}})
                .then((response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        on() {
            axios.get('/lights/' + id + '/on')
                .then((response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        off() {
            axios.get('/lights/' + id + '/off')
                .then((response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        setBrightness() {
            axios.get('/lights/' + id + '/set-brightness', {params: {brightness: this.brightness}})
                .then((response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}

