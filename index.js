var uglify = require('uglify-js');
var reSourceMapComment = /\n\/\/# sourceMappingURL=.+?$/;

module.exports = function (content) {

    var result = uglify.minify(String(content));
    result = JSON.stringify(result.code);
    result = result.replace(reSourceMapComment, "");
    return "module.exports = " + result;
};
module.exports.seperable = true;
