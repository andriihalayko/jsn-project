const fs = require("fs");
const { dirname } = require("path");
const appDir = dirname(require.main.filename);

class DataBase {
    #data = {};

    #connect() {
        this.#data = JSON.parse(
            fs.readFileSync(appDir + "/data/data.json", "utf8")
        );
    }

    #disconnect() {
        fs.writeFileSync(
            appDir + "/data/data.json",
            JSON.stringify(this.#data, null, "\t")
        );
    }

    #isHeroExists(heroId) {
        for (let hero of this.#data.heros) if (hero.id === heroId) return true;
        return false;
    }

    #getHeroById(heroId) {
        return this.#data.heros.find((hero) => hero.id === heroId);
    }

    create(data) {
        this.#connect();
        data.id = data.name;
        if (this.#isHeroExists(data.id)) return 'error';
        this.#data.heros.push(data);
        this.#disconnect();
    }

    read(heroId) {
        this.#connect();
        if (!this.#isHeroExists(heroId)) return "error";
        const hero = this.#getHeroById(heroId);
        this.#disconnect();
        return hero;
    }

    update(heroId, data) {
        this.#connect();
        if (!this.#isHeroExists(heroId)) return "error";
        this.delete(heroId);
        this.create(data);
        this.#disconnect();
    }

    delete(heroId) {
        this.#connect();
        if (!this.#isHeroExists(heroId)) return "error";
        const hero = this.#getHeroById(heroId);
        this.#data.heros.splice(this.#data.heros.indexOf(hero), 1);
        this.#disconnect();
    }
}

module.exports = class IDataBase {
    #db = new DataBase();

    create(data) {
        this.#db.create(data);
    }
    read(heroId) {
        this.#db.read(heroId);
    }
    update(heroId, data) {
        this.#db.update(heroId, data);
    }
    delete(heroId) {
        this.#db.delete(heroId);
    }
};
