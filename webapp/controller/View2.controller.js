sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("idemploye.readtwoentitys.controller.View2", {
            onInit: function () {
              this.onRead();
            } ,

           onRead: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);
           
           },
            
              onRouteMatch: function () {
                debugger;
                var tab1="MaraSet";
                this.onReadAll(tab1);
              },
               onNavBack: function () {
                history.go(-1);
        
              }
        });
    });
