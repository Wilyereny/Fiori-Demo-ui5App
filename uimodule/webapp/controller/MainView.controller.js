sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.myUI5App.controller.MainView", {

            onBeforeRendering: function() {
                jQuery.sap.log.error("A problem occurred!");
            },

            onAfterRendering: function() {
                debugger
            },

            onInit: function () {

            },
        });
    });
