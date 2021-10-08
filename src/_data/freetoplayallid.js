const { AssetCache } = require("@11ty/eleventy-cache-assets");
const axios = require("axios");

module.exports = async function() {

    let baseUrl = `https://www.freetogame.com/api/games`;

    let asset = new AssetCache("freetoplayid");

    if(asset.isCacheValid("2d")) {
        return asset.getCachedValue();
    }

    const getFreetoplayid = async () => {
        const url = baseUrl;
        const response = await axios({
            "method": "GET",
            "url": url
        });
        const data = response.data;
        let cleanData = data.map(item => {
             return {
                     "id": item.id
                 }
            });
        return cleanData;
    };

    const getid = await getFreetoplayid();

    await asset.save(getid, "json");

    return getid;
};