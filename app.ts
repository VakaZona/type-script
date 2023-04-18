// enum RequestType {
// 	GET = 'get',
// 	POST = 'post',
// }

// function fetchWithAuth(url: string, method: RequestType) {
	
// }

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
	return 1;
}

fetchWithAuth('url', 'post');

let method = 'post';

fetchWithAuth('url', method as 'post');