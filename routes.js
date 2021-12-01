myFirstApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/shop/productList.html',
            controller: 'shopController'
        })
        .when('/login', {
            templateUrl: 'pages/auth/login.html',
            controller: 'loginController'
        })
        .when('/sign-up', {
            templateUrl: 'pages/auth/signup.html',
            controller: 'signupController'
        })
        .when('/reset-password', {
            templateUrl: 'pages/auth/resetPassword.html',
            controller: 'resetPasswordController'
        })
        .when('/products', {
            templateUrl: 'pages/shop/productList.html',
            controller: 'shopController'
        })
        .when('/cart', {
            templateUrl: 'pages/shop/cart.html',
            controller: 'cartController',
            resolve: {
                'auth': function (AuthService) {
                    return AuthService.authenticate();
                }
            }
        })
        .when('/orders', {
            templateUrl: 'pages/shop/orders.html',
            controller: 'orderController',
            resolve: {
                'auth': function (AuthService) {
                    return AuthService.authenticate();
                }
            }
        })
        .when('/checkout', {
            templateUrl: 'pages/shop/checkout.html',
            controller: 'shopController'
        })
        .when('/admin/add-product', {
            templateUrl: 'pages/admin/addProduct.html',
            controller: 'addProductController',
            resolve: {
                'auth': function (AuthService) {
                    return AuthService.authenticate();
                }
            }
        })
        .when('/admin/products', {
            templateUrl: 'pages/admin/products.html',
            controller: 'adminProductController',
            resolve: {
                'auth': function (AuthService) {
                    return AuthService.authenticate();
                }
            }
        })
        .when('/admin/edit-product/:id', {
            templateUrl: 'pages/admin/editProduct.html',
            controller: 'editProductController',
            resolve: {
                'auth': function (AuthService) {
                    return AuthService.authenticate();
                }
            }
        })
        .when('/product-details/:id', {
            templateUrl: 'pages/shop/productDetail.html',
            controller: 'productDetailController'
        })
        .when('/error', {
            templateUrl: 'pages/404.html',
            controller: 'errorController'
        })
        .otherwise({ redirectTo: '/error' })
})