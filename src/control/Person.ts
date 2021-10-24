import Name from './Name'

class Person {
	authorizedName: Name;
	
	constructor(familyName: string, givenName: string){
		this.authorizedName = new Name(familyName, givenName);
	}
}

export default Person;