app.controller('InfoController', 
               ['$scope', 'ImgService', 'TxtService', function($scope, ImgService, TxtService) {
    $scope.sections = 
        [   
            {
                name:'quienes',
                rightimg:1,
                imcaption: 'fine.'
            },
            {
                name: 'que',
                rightimg:20,
                imcaption: 'changing'
            },
            {
                name:'como',
                rightimg:24,
                imcaption:'awesome'
            }
        ]
    
    $scope.thisSection = 
                    {
                        name:'como',
                        rightimg:'',
                        imcaption:''
                    }   
    
    var getData = function(section){
        var sectionData = $scope.sections.filter(function(item) { 
            return (item.name === section);})[0];
        $scope.thisSection.imcaption = sectionData.imcaption;
        $scope.thisSection.rightimg = ImgService.getImage(sectionData.rightimg);
        TxtService.getTxt(sectionData.name)
            .success(function(data) { 
            $scope.thisSection.content = data; 
        });
    }
    
    var getMap = function () {
        $scope.thisSection.imcaption = 'here';
        var canvas = document.getElementById("map-canvas");
        canvas.display = "block";        
    }
    
    $scope.goToSection = function(section){
        $("#section, #caption").fadeOut(0);
        if(section === 'contacto')
            getMap();
        else
            getData(section);
        $("#section, #caption").fadeIn()
    }
}]);