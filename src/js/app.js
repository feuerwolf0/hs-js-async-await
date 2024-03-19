import GameSavingLoader from "./GameSavingLoader";

(async function () {
    try {
        const data = await GameSavingLoader.load();
        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
    
})();