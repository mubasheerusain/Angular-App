myFirstApp.directive('productForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/productForm.html',
        replace: true,
        scope: {
            productId: "=",
            productTitle: "=",
            productImage: "=",
            productPrice: "=",
            productDescription: "=",
            productSubmit: "&",
            buttonName: "@",
            selectImage: "&"
        }
    }
})

myFirstApp.directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/navbar.html',
        replace: true,
        scope: {
            isAuthenticated: "=",
            logout: "&"
        }
    }
})

myFirstApp.directive('demoFileModel', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.demoFileModel),
                modelSetter = model.assign;
            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
});

/**
 * weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
 */