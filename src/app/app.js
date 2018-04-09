(function () {

    "use strict";

    //angular.module('myApp', []);

    var app = angular.module('myApp', []);
    //app.factory('DocumentsService', downgradeInjectable(DocumentsService) as any);

    app.service('ng1Service1', ng1Service1);
    //app.service('DocumentsService', ng.upgrade.static.downgradeComponent({component:DocumentsService}));

    ng1Service1.$inject = ['$rootScope'];

    function ng1Service1($rootScope) {

        var testNG1ServiceRootScope = function () {
           //$rootScope.$broadcast('NG1Broadcast', { 'message': 'this is from NG1 Service 1' });
        }

        var testNG1Service1Function = function () {
            return 'this is from NG1 Service 1';
        }

        return {
            testNG1ServiceRootScope: testNG1ServiceRootScope,
            testNG1Service1Function: testNG1Service1Function
        }

    }

    app.service('ng1Service2', ng1Service2);

    ng1Service2.$inject = ['ng1Service1', 'DocumentsService'];
    //ng1Service2.$inject = ['ng1Service1'];

    function ng1Service2(ng1Service1, DocumentsService) {
    //function ng1Service2(ng1Service1) {

        var testNG1Service2Function = function () {
            console.log('THIS IS SERVICE 2');
            console.log('THIS IS A RESULT OF CALLING SERVICE 1' + ng1Service1.testNG1Service1Function());
            console.log('result from v1 service calling v4 DocumentsService',DocumentsService.v4Name);
            return "upgrade from Angular 1 - 5";
        }

        return {
            testNG1Service2Function: testNG1Service2Function
        }

    }

    //app.directive("documentStars", documentStars);

    function documentStars() {
        console.log("this call is for angular 1 directive");
    }
    app.directive("documentStars",['$compile', function($compile) {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            scope: {
                model: "="
            },
            link: function(scope, element, attrs) {
                var x = "<p> this is angular 1 directive called on angular 5<p>";
                x = angular.element(x);
                element.append(x);
                $compile(x)(scope);
            }
        };
    }]);


})();