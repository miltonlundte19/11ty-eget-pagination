const { AssetCache } = require("@11ty/eleventy-cache-assets");
const axios = require("axios");

module.exports = async function() {

    let baseUrl = `https://www.freetogame.com/api/games`;

    let asset = new AssetCache("freetoplayall");

    if(asset.isCacheValid("2d")) {
        return asset.getCachedValue();
    }

    const getfreetoplayall = async () => {
        const url = baseUrl;
        const response = await axios({
            "method": "GET",
            "url": url
        });
        const data = response.data;
        return data;
    }

    const getall = await getfreetoplayall();

    await asset.save(getall, "json");

    return getall;
};


