const { User } = require('../models');

const userData = [{
        username: 'Steven',
        password: 'password1'

    },
    {
        username: 'Kennedy',
        password: 'password2'
    },
    {
        username: 'Alexus',
        password: 'password3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;