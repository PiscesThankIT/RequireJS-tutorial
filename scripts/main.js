//File: scripts/main.js
// requirejs([], function() {
//     alert("Hello World");
// });
require.config({
    paths: {
        "hello": "helper/world"
    },
});
requirejs(['hello'], function(helper_world) {
    var message = helper_world.getMessage();
    alert(message);
});