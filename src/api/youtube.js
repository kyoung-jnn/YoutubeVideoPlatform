import React from "react";

var search = require("youtube-search");

export default (searchKeyword) => {
  var opts = {
    maxResults: 10,
    key: "AIzaSyBXLiAmMASCU1-BdRNgYVnQ7SgLf5qL684",
  };

  search(searchKeyword, opts, function (err, results) {
    if (err) return console.log(err);
    console.log(results);
    return results;
  });
};
