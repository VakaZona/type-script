// enum RequestType {
// 	GET = 'get',
// 	POST = 'post',
// }

// function fetchWithAuth(url: string, method: RequestType) {
	
// }

// type httpMethod = 'post' | 'get';
// type coolString = string;

// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
// 	return 1;
// }

// fetchWithAuth('url', 'post');

// let method = 'post';

// fetchWithAuth('url', method as 'post');

type User = {
	name: string;
	age: number;
	skills: string[];
}

let user: User = {
	name: 'asd',
	age: 33,
	skills: ['1', '2']
}

type Role = {
	id: number;
}

type UserWithRole = User & Role;

let user2: UserWithRole= {
	name: 'asd',
	age: 33,
	skills: ['1', '2'],
	id: 1,
}