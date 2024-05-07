const jwt =  require("jsonwebtoken");

//Almacenamos nuestra clave secreta

const JWT_SECRET = 
"3de58257b5b25e05e06624e2fad7bae71fdc2fa78aefe5d359f0f79b70398327";
//Creamos una funcion para generar un token JWT

function generateToken(user){
    const payload= {
        userId: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "1h"});
    return token
}

module.exports={
    generateToken
}