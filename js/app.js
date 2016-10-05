var app = angular.module('app', ['ui.bootstrap']);

app.controller('GeneralController', function(){
    this.fecha = new Date();

    this.abrirResume = function(){
        var pdf = '/resume/Resume.pdf';
         $window.open(pdf);
        alert('si');
    };
});