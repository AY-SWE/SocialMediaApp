const jwt = require("jsonwebtoken")

function authManager() {
    verify = (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            console.log("auth verify function token._id BELOW: ");
            console.log(token);
            if (!token) {
                return res.status(401).json({
                    errorMessage: "Unauthorized, token not valid"
                })
            }
            const verified = jwt.verify(token, process.env.JWT_SECRET)
            console.log("verified user:::  " + verified);
            req.body._id = verified?.id;
            next();

        } catch (err) {
            console.error(err);
            return res.status(401).json({
                errorMessage: "Unauthorized, index.js verify function error caught"
            });
        }
    }

    signToken = (username, userId) => {
        return jwt.sign({
            username: username,
            userId: userId
        }, process.env.JWT_SECRET);
    }

    return this;
}

const auth = authManager();
module.exports = auth;