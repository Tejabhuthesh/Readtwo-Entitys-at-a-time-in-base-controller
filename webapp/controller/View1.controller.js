sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("idemploye.readtwoentitys.controller.View1", {
            onInit: function () {
                this.onRead1();
            },

            onRead1: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View1").attachPatternMatched(this.onObjectMatch, this);

            },

            onObjectMatch: function () {
                debugger;
                var tab1 = "userSet";
                this.onReadAll(tab1);
            },

            rightarrow: function () {

                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");

            }
        });
    });
