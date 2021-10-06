const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
    try {
        let json = await Cache('https://www.freetogame.com/api/games', {
            duration: '2d', // 1 day
            type: 'json' // also supports "text" or "buffer"
        });
        return json;
    } catch (e) {
        console.log(e);
        return {};
    }
};