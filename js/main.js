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
        path: '/info_purpura/',
        url: 'linea-purpura-info',
    },
    ],
    // ... other parameters
});
  
var mainView = app.views.create('.view-main');