import update from 'playcanvas-update-fn'

let app = pc.Application.getApplication()

function timeout(fn, delay) {
    delay = delay || 0;
    var t = 0;
    var exit = false;
    function reset() {
        exit = true
    }
    app.on('clear', reset)
    update(function (dt) {
        if (exit) {
            app.off('clear', reset)
            return false;
        }
        t += dt * 1000;
        if (t >= delay) {
            fn();
            app.off('clear', reset)
            return false;
        }
    });
    return reset
}

pc.timeout = timeout

export default timeout
