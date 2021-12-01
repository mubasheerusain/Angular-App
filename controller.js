myFirstApp.controller('loginController', function ($scope, $window, loginService, logoutService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    $scope.email = ""
    $scope.password = ""
    $scope.login = function () {
        loginService.login($scope.email, $scope.password);
        $scope.loggedIn = true;
    }
});

myFirstApp.controller('signupController', function ($scope, $window, logoutService, signupService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    $scope.email = ""
    $scope.password = ""
    $scope.confirmPassword = ""
    $scope.signup = function () {
        signupService.signup($scope.email, $scope.password, $scope.confirmPassword);
    }
});

myFirstApp.controller('resetPasswordController', function ($scope, $window, logoutService, signupService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    $scope.email = ""
    $scope.password = ""
    $scope.confirmPassword = ""
    $scope.signup = function () {
        signupService.signup($scope.email, $scope.password, $scope.confirmPassword);
    }
});

myFirstApp.controller('addProductController', function ($scope, $window, addProductService, getCookieService, logoutService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    getCookieService.getCookie().then(function (res) {
        if (res.data) {
            $scope.isAuthenticated = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    $scope.title = ""
    $scope.price = ""
    $scope.description = ""
    $scope.addProduct = function () {
        addProductService.addProduct($scope.title, $scope.image, $scope.price, $scope.description);
    }
});

myFirstApp.controller('adminProductController', function ($scope, $window, $routeParams, getProductsService, deleteProductService, getCookieService, logoutService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    getCookieService.getCookie().then(function (res) {
        if (res.data) {
            $scope.isAuthenticated = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    let pageNo = 1;
    if ($routeParams.page) {
        pageNo = $routeParams.page;
    }
    getProductsService.getProducts(pageNo).then(function (res) {
        if (res.data) {
            console.log(res.data)
            $scope.products = res.data.products;
            $scope.currentPage = res.data.currentPage;
            $scope.hasNextPage = res.data.hasNextPage;
            $scope.hasPreviousPage = res.data.hasPreviousPage;
            $scope.nextPage = res.data.nextPage;
            $scope.previousPage = res.data.previousPage;
            $scope.lastPage = res.data.lastPage;
        }
    }, function (err) {
        console.log(err);
    });

    $scope.deleteProduct = function (id) {
        deleteProductService.deleteProduct(id);
    }
});

myFirstApp.controller('productDetailController', function ($scope, $window, $routeParams, getProductDetailService, postCartService, getCookieService, logoutService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    getCookieService.getCookie().then(function (res) {
        if (res.data) {
            $scope.isAuthenticated = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    getProductDetailService.getProductDetail($routeParams.id).then(function (res) {
        if (res.data) {
            $scope.product = res.data;
        }
    }, function (err) {
        console.log(err)
    });
    $scope.submitCart = function (id) {
        postCartService.postCart(id);
    };
});

myFirstApp.controller('editProductController', function ($scope, $window, $routeParams, getProductDetailService, editProductService, getCookieService, logoutService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    getCookieService.getCookie().then(function (res) {
        if (res.data) {
            $scope.isAuthenticated = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    getProductDetailService.getProductDetail($routeParams.id).then(function (res) {
        if (res.data) {
            $scope.id = res.data._id;
            $scope.title = res.data.title;
            $scope.imageUrl = res.data.imageUrl;
            $scope.price = res.data.price;
            $scope.description = res.data.description;
        }
    }, function (err) {
        console.log(err);
    });
    $scope.editProduct = function () {
        editProductService.editProduct($scope.id, $scope.title, $scope.image, $scope.price, $scope.description);
    }
});

myFirstApp.controller('shopController', function ($scope, $routeParams, $window, getProductsService, postCartService, getCookieService, logoutService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    let pageNo = 1;
    if ($routeParams.page) {
        pageNo = $routeParams.page;
    }
    getCookieService.getCookie().then(function (res) {
        if (res.data) {
            $scope.isAuthenticated = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    getProductsService.getProducts(pageNo).then(function (res) {
        if (res.data) {
            $scope.products = res.data.products;
            $scope.currentPage = res.data.currentPage;
            $scope.hasNextPage = res.data.hasNextPage;
            $scope.hasPreviousPage = res.data.hasPreviousPage;
            $scope.nextPage = res.data.nextPage;
            $scope.previousPage = res.data.previousPage;
            $scope.lastPage = res.data.lastPage;
        }
    }, function (err) {
        console.log(err);
    });
    $scope.submitCart = function (id) {
        postCartService.postCart(id);
    };
});

myFirstApp.controller('cartController', function ($scope, $window, getCartService, deleteCartService, placeOrderService, getCookieService, logoutService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    getCookieService.getCookie().then(function (res) {
        if (res.data) {
            $scope.isAuthenticated = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    getCartService.getCart().then(function (res) {
        if (res.data) {
            $scope.products = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    $scope.placeOrder = function () {
        placeOrderService.placeOrder();
    }
    $scope.deleteProductCart = function (id) {
        deleteCartService.deleteCart(id);
    }
});

myFirstApp.controller('orderController', function ($scope, $window, getOrderService, getCookieService, logoutService, downloadInvoiceService) {
    $scope.logout = function () {
        logoutService.logout().then(function (res) {
            $window.location.href = "/";
        }, function (err) {
            console.log(err);
        });
    }
    getCookieService.getCookie().then(function (res) {
        if (res.data) {
            $scope.isAuthenticated = res.data;
        }
    }, function (err) {
        console.log(err);
    });
    $scope.downloadInvoice = function (id) {
        downloadInvoiceService.getInvoice(id).then(function (res) {
        }, function (err) {
            console.log(err);
        });
    }
    getOrderService.getOrders().then(function (res) {
        if (res.data) {
            $scope.orders = res.data;
        }
    }, function (err) {
        console.log(err);
    })
});

myFirstApp.controller('errorController', function () {

});