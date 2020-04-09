function createCtrl($http, $location) {
    let vm = this;
    vm.error = '';
    vm.title = "Добавление бронирования номера";
    vm.formWasValidated = false;
    vm.formModel = {
        dateCheck: {
        valid: true,
            infoText: '',
            value: new Date()
    },
        dateEviction: {
        valid: true,
            infoText: '',
            value: new Date()
    },
        typeRoom: {
            valid: true,
            infoText: '',
            value: ''
        },
        services: {
            valid: true,
            infoText: '',
            value: ''
        }
    };
    vm.validate = function () {
        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;
        for (let field in vm.formModel){
            if(field!=='dateCheck' && field!=='dateEviction'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
            }
        }
    };
    vm.sendForm = function () {
        vm.error = '';
        console.log('waiting...');
        let p1 = $http.post('/api/numbers', {
            dateCheck: vm.formModel.dateCheck.value,
            dateEviction: vm.formModel.dateEviction.value,
            typeRoom: vm.formModel.typeRoom.value,
            services: vm.formModel.services.value
        }, {
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
    }
}