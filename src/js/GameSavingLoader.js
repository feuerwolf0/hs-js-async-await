import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
        return (async () => {
            const data = await read();
            const stringData = await json(data);
            return JSON.parse(stringData);
        })();
    }
}