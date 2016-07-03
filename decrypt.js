var SecureConf = require('secure-conf');
var sconf      = new SecureConf();
var ef         = "./services/persistence/enc_conf.json";

 
sconf.decryptFile(ef, function(err, file, content) {
    if (err) {
        console.log('Unable to retrieve the configuration contents.');
    } else {
        var config = JSON.parse(content);
        console.log(config.host);
    }
});