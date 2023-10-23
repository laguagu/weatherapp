const jwt = require('jsonwebtoken');


function tokenAuthenticate(req,res,next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send("Token needed");
    }

    const token = authHeader.split(" ")[1] // Token lähetetään frontilta muodossa "Bearer <token>"

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next();
    } catch (error) {
        res.status(401).send("Invalid token");
    }
}

export default tokenAuthenticate