function AppViewModel() {
    this.totalArray = ko.observableArray();
    this.numberArray1 = ko.observableArray();
    this.numberArray2 = ko.observableArray();
    this.number1 = ko.observable(3);
    this.number2 = ko.observable(9);
    this.number3 = ko.computed(
        function() {
            return Number(number1()) + Number(number2());
        }
    );
    this.computeBalls = function () {

    };
};

ko.applyBindings(AppViewModel());