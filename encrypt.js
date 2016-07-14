var EncyptionServices = require('./services/encryption/Encryption.js');
var econfs      = new EncyptionServices();

var configuration = {};

console.log(process.argv.length);

if (process.argv.length === 6){
	configuration.host = process.argv[2];
	configuration.user = process.argv[3];
	configuration.password = process.argv[4];
	configuration.database = process.argv[5];
	var config = JSON.stringify(configuration);
	console.log(config);

	var enc_conf_file = "./services/persistence/enc_conf.json";
	//var test_enc_file = "test_enc_conf.json";
	
	econfs.encryptString(
    config, enc_conf_file,
		function(err, f, ef, ec) {
			if (err) {
				consoel.log("failed to encrypt %s, error is %s", f, err);
			} else {
				console.log("encrypt %s to %s complete.", f, ef);
				console.log("encrypted contents are %s", ec);
			}
		}
	);
}
else{
	console.log("Not enough data for database");
}

