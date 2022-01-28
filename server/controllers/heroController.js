const DataBase = require("../models/dbConnection.js");
const { dirname } = require("path");
const appDir = dirname(require.main.filename);

const db = new DataBase();

class HeroController {
    getHeros(req, res) {
        res.sendFile(appDir + "/data/data.json");
    }

    postHero(req, res) {
        db.create(req.body);
        res.end();        
    }

    updateHero(req, res) {
        db.update(req.params.heroId, req.body);
        res.end();        
    }

    deleteHero(req, res){
        db.delete(req.params.heroId)
        res.end();        
    }
}

module.exports = new HeroController();
