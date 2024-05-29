angular.module("myApp",[]).controller("myCtr",function($scope){
    $scope.contacts = [{
        id:'1',
        name:'Jhon',
        email: 'jhon@gmail.com',
        number:1234
    },
    {
        id:'2',
        name:'Doe',
        email: 'doe@gmail.com',
        number:5678
    }
];

    $scope.add = function(){
      $scope.contacts.push({
        id:$scope.id,
        name:$scope.name,
        email:$scope.email,
        number:$scope.number
      });

      $scope.id ='';
      $scope.name='';
      $scope.email ='';
      $scope.number='';

    };

    $scope.del = function(x){
        $scope.contacts.splice(x, 1)
    };

    function select(id){
        for(let i=0; i<$scope.contacts.length; i++){
            if($scope.contacts[i].id==id){
                return i;
            }
        }
         return -1;
    };

    $scope.edit = function(id){
        let index=select(id);
        let x =$scope.contacts[index];
        $scope.id = x.id;
        $scope.name =x.name;
        $scope.email =x.email;
        $scope.number = x.number;
    };
    $scope.save= function(){
       let index = select($scope.id);
       $scope.contacts[index].name=$scope.name;
       $scope.contacts[index].email=$scope.email;
       $scope.contacts[index].number=$scope.number;
       $scope.id ='';
       $scope.name='';
       $scope.email ='';
       $scope.number='';
    }
});