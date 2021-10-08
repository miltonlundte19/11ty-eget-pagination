// const { AssetCache } = require("@11ty/eleventy-cache-assets");
// const axios = require("axios");

// module.exports = async function() {

//     let baseUrl = `https://www.freetogame.com/api/game?id=`;

//     let asset = new AssetCache("frtoplcach");

//     if(asset.isCacheValid("1w")) {
//         return asset.getCachedValue();
//     }

//     const getFreetoplatinfo = async () => {
//         const nextIDvalu = 1;
//         const url = baseUrl + nextIDvalu;
//         const response = await axios({
//             "method": "GET",
//             "url": url
//         });
//         const data = response.data;
//         if(nextIDvalu <= 4) {
//             for (let i = 0; i <= nextIDvalu; i++)
//         }

//     };

//     const getgames = await getFreetoplatinfo();

//     await asset.save(getgames, "json");

//     return getgames;
// };