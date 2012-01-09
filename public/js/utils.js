(function(multisweeper, $) {
    var templates = new multisweeper.Templates();
    templates.preload();

    function msg(playerName, message) {
        if (typeof message === "undefined") {
            message = playerName;
            playerName = null;
        }
        templates.get("message", function(template) {
            var d = new Date();
            $("#log").append(template({
                "time" : d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds(),
                "playerName" : playerName,
                "message" : message
            }));
            $("#log").scrollTop(1000000);
        });
    };

    function log(playerName, message) {
        if (document.cookie && document.cookie.match(/bacon/)) {
            msg(playerName, message);
        }
    };

    function showModal(title, message) {
        templates.get("modal", function(template) {
            $("#modal").html(template({ "title" : title, "message" : message }));
            $(".overlay").show();
            $("#modal").show();
        });
    };

    var Utils = multisweeper.Utils = {
        "templates" : templates,
        "log" : log,
        "message": msg,
        "showModal" : showModal
    };
})(window.multisweeper = window.multisweeper || {}, jQuery);
