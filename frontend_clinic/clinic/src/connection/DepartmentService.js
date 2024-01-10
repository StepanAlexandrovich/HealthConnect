import axios from "axios";

const URL_GET_ALL_DEPARTMENTS = "http://localhost:8082/api/v1/admin/departments"

class DepartmentService {

    getDepartments(){
        const data = '';
        const token = localStorage.getItem("token")
        
        let config = {
            method: 'get',
            url: URL_GET_ALL_DEPARTMENTS,
            headers: { 
                'Authorization': 'Bearer '+ token
            },
            data : data
        };

        return axios(config);
    }
}

export default new DepartmentService();