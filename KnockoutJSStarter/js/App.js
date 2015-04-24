function AppViewModel() {
    this.numberArray = ko.observable([]);
    this.number1 = ko.observable(3);
    this.number2 = ko.observable(9);
    this.number3 = ko.computed(
        function() {
            return Number(number1()) + Number(number2());
        }
    );

};

ko.applyBindings(AppViewModel());