exports.isLoggedIn=(req,res,next)=>{
    if (req.isAuthenticated()){
        // console.log(req.user);
        return next()
    }
    else res.redirect("/login")
}