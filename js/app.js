var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
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
            path: "/fisica/",
            url: "fisica.html"
    },
        {
            path: "/psicologica/",
            url: "psicologica.html"
    },
        {
            path: "/sexual/",
            url: "sexual.html"
    },
        {
            path: "/patrimonial/",
            url: "patrimonial.html"
    },
    {
            path: "/genero/",
            url: "genero.html"
    },
    {
            path: "/senales/",
            url: "senales.html"
    },
    {
            path: "/amigo/",
            url: "amigo.html"
    },
        {
            path: "/pareja/",
            url: "pareja.html"
    },
    {
            path: "/lugares/",
            url: "lugares.html"
    },
        {
            path: "/estadisticas/",
            url: "estadisticas.html"
    },
    {
            path: "/equipo/",
            url: "equipo.html"
    },
  ]
    // ... other parameters
});

var mainView = app.views.create('.view-main');
