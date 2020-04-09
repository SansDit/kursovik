function listCtrl($http, $location, $rootScope) {
    let vm = this;
    vm.title = "Список бронированных номеров";
    let p1 = $http.get('/api/numbers', {
        headers : {
            token: localStorage.getItem('token')
        }
    });
    p1.then(res=>{
        vm.list = res.data;
    }, err=>{
        $location.path('/login');
    });
    vm.test = localStorage.getItem('test');
}