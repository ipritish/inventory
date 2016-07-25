# inventory
# instructions to build

# Prerequisite
    install nodeJs
    install mysql server 5.7 (keep a note of mysql root password) (make sure mysql is available via command line)
    after installing nodejs install bower by following file "npm install -g bower"
    
#run app
	Go to project root app
	
    create database with default entry using following command
    mysql -u root -p < dbinit.sql (will prompt for root password) (dbinit is present in project root folder)
   
    run following to create encrypted configuration file to connect with mysql database
    node encrypt.js localhost root <password> inventory (all entries are compulsary <password is db password>)
    (this command will prompt for another password remember that password lets call that "pass")
	
	run following commands
	npm install (let it download all the dependencies)
	bower install (let it download all the dependencies)
	
    //run project via folowing command 
    npm run gulp serve -- --pw=pass (here pass is same which is asked during encryption process)
