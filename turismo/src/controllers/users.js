const USERS = {
    servicios: function(req,res){
        res.render('servicios')
    },

    nosotros: function(req,res){
        res.render('nosotros')
    }
}

module.exports = USERS;