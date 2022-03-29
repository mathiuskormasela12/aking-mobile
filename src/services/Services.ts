// ========== Services
// import all modules
import http from './http';
import {ILoginBody, IRegisterBody} from '../config';

class Services {
	public static register(data: IRegisterBody) {
		return http().post('/auth/register', data);
	}

	public static login(data: ILoginBody) {
		return http().post('/auth/login', data);
	}
}

export default Services;
