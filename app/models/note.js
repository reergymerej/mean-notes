'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var NoteSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
NoteSchema.path('name').validate(function (name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
NoteSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Note', NoteSchema);
