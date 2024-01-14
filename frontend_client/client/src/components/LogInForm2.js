import React, { useState } from 'react';
import Axios from 'axios'

function PostForm() {
    let token = ""
    const url = 'http://localhost:8082/auth'
    const urlGetUsers = 'http://localhost:8082/users'
    const [data, setData] = useState({
        login:'',
        password:''
    })
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function signIn(e){
        e.preventDefault()
        Axios.post(url,{
            username: data.login,
            password: data.password
        })
        .then(res=>{
            token = res.data
            console.log(token.token)
        })
    }
    function getUsers(e){
        // e.preventDefault()
        //console.log(token.token)
        
        var data = '';

        var config = {
            method: 'get',
            // url: 'http://localhost:8082/users',
            url: urlGetUsers,
            headers: { 
                // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJleHAiOjE3MDMxNzQ5MzgsImlhdCI6MTcwMzE3MzEzOH0.Ivtj_VgUb9_Z5dy45zmej4ryw3Qo5On0KFkfba8P6hE'
                'Authorization': 'Bearer '+ token.token
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

    return (
        <div>
            <form onSubmit={(e)=> signIn(e)}>
                <input onChange={(e)=>handle(e)} id = "login" value = {data.login} placeholder='login' type='text'></input>
                <input onChange={(e)=>handle(e)} id = "password" value = {data.password} placeholder='password' type='password'></input>
                <button>Generate Token</button>
            </form>
            <button onClick={(e)=> getUsers(e)}>Get Users</button>
        </div>
    );
}

export default PostForm;