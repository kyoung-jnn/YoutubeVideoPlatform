var search = require("youtube-search");

export default (searchKeyword) => {
  var opts = {
    maxResults: 10,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  };

  search(searchKeyword, opts, function (err, results) {
    if (err) return console.log(err);
    console.log(results);
    return results;
  });
};
