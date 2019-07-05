const path = require('path');

module.exports = {
    'name': 'javi.negre.co/des',
    'short_name': 'negre.co',
    'description': 'Add description',
    'start_url': '.',
    'theme_color': '#333333',
    'background_color': '#000000',
    'icons': [
        {
            'src': path.resolve('src/assets/img/favicon-color-144.png'),
            'type': 'image/png',
            'sizes': '144x144'
        },
        {
            'src': path.resolve('src/assets/img/favicon-color-192.png'),
            'type': 'image/png',
            'sizes': '192x192'
        },
        {
            'src': path.resolve('src/assets/img/favicon-color-512.png'),
            'type': 'image/png',
            'sizes': '512x512'
        }
    ]
};
