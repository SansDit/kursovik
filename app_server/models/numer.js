let mongoose = require( 'mongoose' );

let numerSchema = new mongoose.Schema({
    dateCheck: {type: Date, required: true, default: Date.now},
    dateEviction: {type: Date, required: true, default: Date.now},
    typeRoom: {type: String, required: true},
    services: {type: String, required: true, default: null},
    userId: {type: Number, required: false}
});

// компиляция модели
mongoose.model('numer', numerSchema );

// наименование: "по ПМ.02 Осуществление интеграции программных модулей"
// обучающийся: "Фамилия Имя Отчество"
// группа: "3ИСиП-17-1"
// специальность: "09.02.07 Информационные системы и программирование"
// дата начала: "«23» сентября 2019 г."
// дата окончания: "«12»  октября 2019 г."
// общая оценка: "4"
// руководитель: "ФИО"