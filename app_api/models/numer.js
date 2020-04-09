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

// дата заселения: 12.03.2020
// дата выселения: 12.03.2020
// тип номера: ВИП
// услуги: завтрак, обед, ужин