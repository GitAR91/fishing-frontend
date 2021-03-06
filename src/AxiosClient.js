import axios from 'axios';
// const environ = process.env.PROFILE;
let API_URL = 'http://localhost:8080';
const API_URL_CLUSTER = '/api';

// if(environ === "cluster"){
// 	API_URL = API_URL_CLUSTER;
// }

export default class AxiosClient{

	constructor(){}


	getPoints() {
		const url = `/map/point/all`;
		return axios.get(url).then(response => response.data);
	}
	createPoint(body){
		const url = `/map/create`;
		return axios.post(url, body).then(response => response.data);
	}
}