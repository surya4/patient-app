var config = {
    db: {
        host: '127.0.0.1',
        user: 'root',
        password: 'computer'
    },
    //server details
    default: {
        host: '127.0.0.1',
        port: '3000'
    },
    production: {
        host: 'https://hidden-wildwood-85722.herokuapp.com/'
    }

}

module.exports = config;