/**
 * Created by JF05563 on 3/18/14.
 */
var Person = {
    attributes: {
        firstName: 'STRING',
        lastName: 'STRING',
        age: {
            type: 'INTEGER',
            max: 150,
            required: true
        },
        birthDate: 'DATE',
        phoneNumber: {type: 'STRING', defaultsTo: '555-555-5555'}
    }
};
module.exports = Person;
