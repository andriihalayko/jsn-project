const express = require("express");
const heroController = require("./controllers/heroController.js");
const cors = require("cors");

const app = express();

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(express.json());
app.use(cors(corsOptions));


app.get("/heros", heroController.getHeros)
app.post("/heros/postHero", heroController.postHero);
app.put("/heros/updateHero/:heroId", heroController.updateHero);
app.delete("/heros/deleteHero/:heroId", heroController.deleteHero);

app.listen(3001, () => {
    console.log("server has been started");
});
