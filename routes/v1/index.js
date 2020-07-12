const v1 = require('express').Router();

v1.get('/wrapper/api/:identifier/:refNum/folder', (req, res) => {
    res.status(200).json({ message: 'V1 Folder!' + req.params.refNum });
});
v1.get('/wrapper/api/:identifier/:refNum/folder', (req, res) => {
    res.status(200).json({ message: 'V1 Folder!' + req.params.refNum });
});

module.exports = v1;