function getFullName(userEntity: {firstName: string, surName: string}): string {
	return `${userEntity.firstName} ${userEntity.surName}`
}

const user = {
	firstName: 'Valery',
	surName: 'Zonov',
	city: 'Barnaul',
	age: 23,
	skills: {
		dev: true,
		devops: true,
	}
}

console.log(getFullName(user));