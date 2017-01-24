var uglify = require('uglify-js');
var reSourceMapComment = /\n\/\/# sourceMappingURL=.+?$/;

module.exports = function (content) {

    var m = uglify.minify(String(content), {fromString: true});
    var result = JSON.stringify(m.code);
    result = result.replace(reSourceMapComment, "");
    return "module.exports = " + result;
};
module.exports.seperable = true;