var EncyptionServices = require('./services/encryption/Encryption.js');
var econfs      = new EncyptionServices();
var ef         = "./services/persistence/enc_conf.json";

 
econfs.decryptFile(ef, function(err, file, content) {
    if (err) {
        console.log('Unable to retrieve the configuration contents.');
    } else {
        var config = JSON.parse(content);
        console.log(config);
    }
});