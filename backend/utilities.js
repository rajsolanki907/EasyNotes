const jwt = require('jsonwebtoken');
const { model } = require('mongoose');

function authenticateToken(req, ress, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && autherHeader.split(" ")[1];

    if(!token) return ress.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return ress.sendStatud(41);
        req.user = user;
        next();
    });
}

model.export = {
    authenticateToken,
};