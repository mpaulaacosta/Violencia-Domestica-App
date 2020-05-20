var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Púrpura',
    // App id
    id: 'com.púrpura.test',
    // Enable swipe panel
    panel: {
    swipe: 'left',
    },
    // Add default routes
    routes: [
    {
        path: '/home/',
        url: 'index.html',
    },
    {
        path: '/que-es/',
        url: 'que-es.html',
    },
    {
        path: '/info-purpura/',
        url: 'linea-purpura-info.html',
    },
    {
        path: '/que-es-purpura/',
        url: 'que-es-linea-purpura.html',
    },
    ],
    // ... other parameters
});
var mainView = app.views.create('.view-main');

var $$ = Dom7;
$$(document).on('page:init', '.page[data-name="info-purpura"]', function(e) {
    $$('.open-confirm').on('click', function () {
    app.dialog.confirm('Comúnicate con la Línea Púrpura para recibir orientación y apoyo' + '\n', 'Si por el aislamiento por COVID-19 eres víctima de violencias o estas en riesgo:', function () {
    });
});
})
