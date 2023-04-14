enum StatusCode {
	SUCCESS = 1,
	IN_PROGRESS = 2,
	FAILED = 3,
}

const res = {
	message: 'Success',
	statusCode: StatusCode.SUCCESS,
};

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {
	 
}
 
action(StatusCode.SUCCESS);
action(1);

function compute() {
	return 3;
}

enum Roles {
	ADMIN = 1,
	USER = compute(),
}



