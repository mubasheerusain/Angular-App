myFirstApp.service('addProductService', function ($http, $window) {
    this.addProduct = function (title, image, price, description) {
        var fd = new FormData();
        fd.append('title', title);
        fd.append('image', image);
        fd.append('price', price);
        fd.append('description', description);
        $http.post('/admin/addProduct', fd, {
            headers: { 'Content-Type': undefined },
            withCredentials: true,
            transformRequest: angular.identity
        }).then(function (response) {
            if (response.data) {
                $window.location.href = "/";
                return response.data;
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('getProductDetailService', function ($http) {
    this.getProductDetail = function (productId) {
        return $http.get(`/shop/products/${productId}`, { withCredentials: true })
    }
});

myFirstApp.service('getProductsService', function ($http) {
    this.getProducts = function (pageNo) {
        return $http.get(`/shop/get-products?page=${pageNo}`, { withCredentials: true })
    }
});

myFirstApp.service('getCartService', function ($http) {
    this.getCart = function () {
        return $http.get('/shop/get-cart', { withCredentials: true })
    }
});

myFirstApp.service('downloadInvoiceService', function ($http) {
    this.getInvoice = function (id) {
        window.open(`/shop/order/${id}`);
    }
});

myFirstApp.service('getCookieService', function ($http) {
    this.getCookie = function () {
        return $http.get('/auth/get-cookie', { withCredentials: true })
    }
});

myFirstApp.service('deleteCartService', function ($http, $window) {
    this.deleteCart = function (id) {
        $http.post('/shop/delete-cart', JSON.stringify({ 'productId': id }), { withCredentials: true }).then(function (response) {
            if (response.data) {
                $window.location.href = "#!cart";
                return response.data;
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('postCartService', function ($http, $window) {
    this.postCart = function (id) {
        $http.post('/shop/cart', JSON.stringify({ 'productId': id }), { withCredentials: true }).then(function (response) {
            if (response.data) {
                $window.location.href = "#!cart";
                return response.data;
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('editProductService', function ($http, $window) {
    this.editProduct = function (id, title, image, price, description) {
        var fd = new FormData();
        fd.append('id', id);
        fd.append('title', title);
        fd.append('image', image);
        fd.append('price', price);
        fd.append('description', description);
        $http.post('/admin/editProduct', fd, {
            headers: { 'Content-Type': undefined },
            withCredentials: true,
            transformRequest: angular.identity
        }).then(function (response) {
            if (response.data) {
                $window.location.href = "#!admin/products";
                return response.data;
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('deleteProductService', function ($http, $window) {
    this.deleteProduct = function (id) {
        $http.post('/admin/deleteProduct', JSON.stringify({ 'productId': id })).then(function (response) {
            if (response.data) {
                $window.location.href = "#!admin/products";
                return response.data;
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('placeOrderService', function ($http, $window) {
    this.placeOrder = function () {
        $http.post('/shop/create-order', {}, { withCredentials: true }).then(function (response) {
            if (response.data) {
                $window.location.href = "#!orders";
                return response.data;
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('loginService', function ($http, $window) {
    this.login = function (email, password) {
        $http.post('/auth/login', JSON.stringify({ 'email': email, 'password': password })).then(function (response) {
            if (response.data === 'success') {
                $http.post('/auth/setCookie', JSON.stringify({ 'email': email }), { withCredentials: true }).then(function (response) {
                    if (response.data) {
                        $window.location.href = "/";
                        return response.data;
                    }
                }, function (err) {
                    console.log(err)
                });
                return response.data;
            }
            else {
                $window.location.href = "#!login";
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('signupService', function ($http, $window) {
    this.signup = function (email, password, confirmPassword) {
        $http.post('/auth/signup', JSON.stringify({ 'email': email, 'password': password, 'confirmPassword': confirmPassword })).then(function (response) {
            if (response.data) {
                $window.location.href = "#!login";
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('logoutService', function ($http) {
    this.logout = function () {
        return $http.get('/auth/logout', { withCredentials: true })
    }
});

myFirstApp.service('AuthService', function ($http, $window) {
    this.authenticate = function () {
        return $http.get('/auth/get-cookie', { withCredentials: true }).then(function (response) {
            if (!response.data) {
                $window.location.href = "#!login";
            }
        }, function (err) {
            console.log(err)
        });
    }
});

myFirstApp.service('getOrderService', function ($http) {
    this.getOrders = function () {
        return $http.get('/shop/get-order', { withCredentials: true })
    }
});