'use strict';

angular.module('assetsApp')
  .directive('localCss', function () {
    return {
      template: '',
      restrict: 'E',
      link: function (scope, element, attrs) {
        var style = document.createElement('link');
        style.type = 'text/css';
        style.href = attrs.localCssHref;
        style.rel = 'stylesheet';
        scope.$on('$viewContentLoaded', function() {
          document.head.appendChild(style);
        });
     
        scope.$on('$destroy', function() {
          style.parentNode.removeChild(style);
        });
      }
    };
  });
