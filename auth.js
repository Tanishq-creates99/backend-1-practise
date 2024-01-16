const jwt = require('jsonwebtoken')

const ensureAuthenticated = async(req,res,next)=>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        res.status(401).json({message:"Unauthorized"});
}
try{
 const decoded = jwt.verify(authHeader,process.env.JWT_SECRET);
 console.log(decoded);
 if(!decoded){
    res.status(401).json({message:"Token not correct"})
 }
 next()
}catch(err){
res.status(401).json({message:"Unauthorized"});
}


}

module.exports = ensureAuthenticated;