import express from 'express';
import path from 'path';
import root from 'app-root-path';

const app = express();

app.use(express.static(path.join(root.path, '/public')));

app.get('/hello', function (req, res) {
    res.sendFile(path.join(root.path, 'public/index.html'));
});

app.listen(8080, function () {  
    console.log('Server started on port 8080');
});