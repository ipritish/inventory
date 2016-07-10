var EncyptionServices = require('./services/encryption/Encryption.js');
var econfs      = new EncyptionServices();

var configuration = {};

console.log(process.argv);
 
/*econfs.encryptFile(
    "./services/persistence/conf.json",
    "./services/persistence/enc_conf.json",
    function(err, f, ef, ec) {
        if (err) {
            consoel.log("failed to encrypt %s, error is %s", f, err);
        } else {
            console.log("encrypt %s to %s complete.", f, ef);
            console.log("encrypted contents are %s", ec);
        }
    }
);*/