let loginCheck = (username, password) => {

	if(username !== 'admin' && password !== 'test') {
       console.log("Invalid login credenitals");
	}
};

loginCheck("admin123",'testing');