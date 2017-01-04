app.controller("NewPostController",function($scope,myFactory){
  $scope.myFactory=myFactory;
  $scope.addTopic = function(title,abstract,url){
    $scope.myFactory.topstories.push(
      {
        byline: "by User",
        abstract: abstract,
        title: title,
        url: url,
        multimedia: "styles/image.jpg",
        published_date:new Date().toDateString()
      }
    )
  }
})
