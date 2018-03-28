var app=angular.module("mainApp",[]);

app.controller("app",function($scope){

	$scope.maths=[];
 $scope.result=[];
	$scope.message="";




    	$scope.generateRandomNumber=function(){
		return Math.floor(Math.random()*11);
	}

    $scope.generateQuestion=function(){

    if ($scope.txtCreateMaths=="" || typeof $scope.txtCreateMaths==='undefined'){
    	$scope.message="Please enter question number";
    }else{
    	$scope.message="";
    var questionNum=$scope.txtCreateMaths;
    for (var i=0;i<questionNum;i++){

        var randnum1=$scope.generateRandomNumber();
        var randnum2=$scope.generateRandomNumber();
        var randnum={};
        randnum.id=i+1;
        randnum.num1=randnum1;
        randnum.symbol="+";
        randnum.num2=randnum2;
        randnum.result=randnum1 + randnum2;
   
        $scope.maths.push(randnum);

    }

    }	    

    }
    $scope.submitForm=function(){
    	var empty=false;
        for (var i=0;i<$scope.maths.length;i++){
        	if (typeof $scope.maths[i].answer==="undefined"){
              
                  empty=true;
                  break;
        	}
        }
        if (empty){
        	$scope.message="Please enter the answer";
        }else{
$scope.message="";
           $scope.result=[];
            for (var i=0;i<$scope.maths.length;i++){
            	        	var testResult={};
        	  if ($scope.maths[i].answer==$scope.maths[i].result){
        	  	console.log($scope.maths[i].answer + " " + $scope.maths[i].result);
        	  	testResult.results=$scope.maths[i].id + "." + "Correct";
        	  	testResult.answer="correct";
        	  }else{
        	  	testResult.results=$scope.maths[i].id + "." + "Incorrect" + " Answer is " + $scope.maths[i].result;
        	  	testResult.answer="incorrect";
        	  }
        	  $scope.result.push(testResult);

           }

        }
    }

   

})