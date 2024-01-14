import axios from 'axios'

class Connection{
   
    request(url,jsonObject,requestType){
        var data = JSON.stringify(jsonObject,requestType);
        var token = localStorage.getItem("token");

        var config = {
            method: requestType,
            url: url,
            headers: { 
                'Authorization': 'Bearer '+ token, 
                'Content-Type': 'application/json'
            },
            data : data
        };

        return axios(config)
    }

    requestSymple(url,requestType){
        var config = {
            method: requestType,
            url: url,
            headers: { }
          };

        return axios(config)
    }

    requestImage(url,jsonObject,requestType){
        var data = JSON.stringify(jsonObject,requestType);
        var token = localStorage.getItem("token");

        var config = {
            method: requestType,
            url: url,
            headers: { 
                'Authorization': 'Bearer '+ token, 
                'content-type': 'multipart/form-data'
            },
            data : data
        };

        return axios(config)
    }

}

export default new Connection();