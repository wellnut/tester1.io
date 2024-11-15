app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all domains (use specific domain in production)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});