import {React, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password,
        }).then((response) => {
            if(response.data.message) {
                alert(response.data.message);
            } else {
                dispatch({type: 'LOGIN', payload: {email: email, password: password}});
                history.push('/');
            }
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
            <button onClick={login}>Login</button>
        </div>
    );
}