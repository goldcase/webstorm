(function() {
    var app = angular.module('store', []);          // (name, list of dependencies)

    app.controller('StoreController', function() {  // (controller name, anonnnymous function
        this.products = gems;

    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Something',
            canPurchase: true,
        },
        {
            name: 'Pentagon',
            price: 5.95,
            description: 'Something else fuck',
            canPurchase: true,
        }
    ];
})();