var fs = require('graceful-fs');

module.exports = function(writePath, file, cb) {
  var outStream = fs.createWriteStream(writePath);
  file.contents.once('error', cb);
  outStream.once('close', function(){
    cb();
  });
  file.contents.pipe(outStream);
};