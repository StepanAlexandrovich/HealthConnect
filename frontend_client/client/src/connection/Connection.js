import React from "react";
import Axios from 'axios'

export class Connection{
    isConnection = function () {
        return "Stroka"
    }

    getUsers = function(token){
        const urlGetUsers = 'http://localhost:8082/users'
        
        var data = '';

        var config = {
            method: 'get',
            url: urlGetUsers,
            headers: { 
                'Authorization': 'Bearer '+ token
            },
            data : data
        };

        Axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    }
}
