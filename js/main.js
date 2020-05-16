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
        path: '/about/',
        url: 'about.html',
    },
    {
        path: '/que-es/',
        url: 'que-es.html',
    },
    ],
    // ... other parameters
});
  
var mainView = app.views.create('.view-main');