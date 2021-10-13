// const { AssetCache } = require("@11ty/eleventy-cache-assets");
// const axios = require("axios");

// module.exports = async function() {

//     let baseUrl = `https://www.freetogame.com/api/game?id=`;

//     let asset = new AssetCache("frtoplcach");

//     if(asset.isCacheValid("1w")) {
//         return asset.getCachedValue();
//     }

//     const getFreetoplatinfo = async (nextPageToken) => {
//         console.log(nextPageToken);
//         const url = baseUrl + nextPageToken;
//         console.log(url);
//         const response = await axios({
//             "method": "GET",
//             "url": url
//         });
//         const data = response.data;
//         console.log(data);
//         let cleanData = data.map(item => {
//             return {
//                 "id": item.id,
//                 "titel": item.titel,
//                 "thumbnail": item.thumbnail,
//                 "status": item.status,
//                 "description": item.description,
//                 "game_url": item.game_url,
//                 "genre": item.genre,
//                 "paltform": item.paltform,
//                 "publisher": item.publisher,
//                 "developer": item.developer,
//                 "release_date": item.release_date,
//                 "minimum_system_requirements": item.minimum_system_requirements,
//                 "screenshots": item.screenshots
//             }
//         });
//         if(nextPageToken != 3) {
//             return cleanData.concat(await getFreetoplatinfo(data.nextPageToken));
//         } else {
//             return cleanData;
//         }
//     }

//     const getgames = await getFreetoplatinfo(1);

//     await asset.save(getgames, "json");

//     return getgames;
// };