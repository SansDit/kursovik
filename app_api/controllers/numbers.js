let mongoose = require('mongoose');
let numer = mongoose.model('numer');
let token = mongoose.model('token');
const h = require('../helpers/common');
module.exports.getAll = async (req, res, next) =>
{
    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }
    numer.find({}, (err, numbers) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, numbers);
    });
};
module.exports.getOne = async (req, res, next) => {
    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }
    numer.findById(req.params.id, (err, numbers) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, numbers);
    });
};
module.exports.create = async (req, res, next) => {
    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    numer.create(req.body, (err, numer) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,201, numer);
    });
};
module.exports.update = async (req, res, next) => {
    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }
    numer.findById(req.params.id, (err, numer) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        if(req.body.dateCheck){
            numer.dateCheck = req.body.dateCheck;
        }
        if(req.body.dateEviction){
            numer.dateEviction = req.body.dateEviction;
        }
        if(req.body.typeRoom){
            numer.typeRoom = req.body.typeRoom;
        }
        if (req.body.services){
            numer.services = req.body.services;
        }
        numer.save((err, numer) => {
            if(err){
                h.sendJsonResponse(res,400, err);
            }
            h.sendJsonResponse(res,200, numer);
        });
    });
};
module.exports.delete = async (req, res, next) => {
    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }
    numer.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,204, null);
    });
};