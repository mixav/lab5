var app = angular.module('app',[]);

app.controller('MainController',function($http,$scope,myFactory){
  $scope.myFactory = myFactory;
  $scope.filter;
  $scope.sortparam='published_date';
  $scope.sortReverse  = true;

  $http.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=53da892f117f478ca7ffc8aefda6d77e')
        .then(function successCallback(response){
          response.data.results.forEach(function(story,index){
              $scope.myFactory.topstories.push({
              byline: story.byline,
              abstract: story.abstract,
              title: story.title,
              url: story.url,
              multimedia: (!story.multimedia.length) ?"styles/image.jpg":story.multimedia[3].url,
              published_date: story.published_date
            });
          });
        }
        , function errorCallback(response) {
            console.log(response.status,response.statusText);
  });
});
