function ResumeController($scope) {
    $scope.items = [
        {title: "World of Discovery", position: "Teacher", times: "2013 to present", details: [
            {something: "Created a site with daily new content and solid, foundational financial knowledge written by students, for students."},
            {something: "Implemented monetization strategies (Adsense, PayPerPost, fundraising, and donations)."},
            {something: "Created social media ad campaigns with Facebook, Twitter, and Google ads."},
            {something: "Managed team of 7 content contributors and interns."}
        ]},
        {title: "UClass.org", position: "Software Engineering Intern", times: "2011 to 2013", details: [
            {something: "Designed assignment creation and lesson plan interface."},
            {something: "Created payments and transaction system frontend and backend."},
            {something: "Worked with Django, MVC architecture, Python, and SQL databases."}]}
    ];

    $scope.shownInputs = 2;
    $scope.values = {};

    $scope.inputs = [
        {placeholder:'Title'},
        {placeholder:'Position'},
        {placeholder:'Date'},
        {placeholder:'Some'},
        {placeholder:'Other'},
        {placeholder:'Information'}
    ];

    $scope.addInputs = function() {
        $scope.shownInputs+= 3;
    };

    $scope.submit = function() {
        console.log($scope.values);
    };
}