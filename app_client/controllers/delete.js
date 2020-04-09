function deleteCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Удаление бронированного номера";
    const id = $routeParams.id;
    vm.formModel = {
        dateCheck: {},
        dateEviction: {},
        typeRoom: {},
        services: {}
    };
    vm.sendForm = function () {
        vm.error = '';
        console.log('waiting...');
        let p1 = $http.delete('/api/numbers/' + id, {
            headers : {
                token: localStorage.getItem('token')
            }
        });
        p1.then(res=>{
            console.log('success!');
            $location.path('/');
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    };
    function init() {
        vm.error = '';
        console.log('waiting...');

        let p1 = $http.get('/api/numbers/' + id, {
            headers : {
                token: localStorage.getItem('token')
            }
        });
        p1.then(res=>{
            const oneRow = res.data;
            vm.formModel.dateCheck.value = new Date(oneRow.dateCheck);
            vm.formModel.dateEviction.value = new Date(oneRow.dateEviction);
            vm.formModel.typeRoom.value = oneRow.typeRoom;
            vm.formModel.services.value = oneRow.services;
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    }
    init();
}