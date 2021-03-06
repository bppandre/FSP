import React, { Component } from 'react'

import {login} from '../../actions/session_actions'

import {loggedInUi} from '../../util/ui_util'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '' 
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    
    componentDidMount(){
        document.body.classList.add('special-body-blue');

    }
    componentWillUnmount(){
        document.body.classList.remove('special-body-blue');

    }

    handleSubmit(event) {
        event.preventDefault();
        const user = this.state;
        store.dispatch(login(user))
        .then(()=> {
            loggedInUi();
            this.props.history.push('/dashboard');
        });
    }
    
    handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleDemo() {


            const emailField = document.getElementById('email').value = 'a@a.a';
            const password = document.getElementById('password').value = 'aaaaaa';
            this.setState({
                email:emailField,
                password:password
            });

           const sub = document.getElementById('sub');

        setTimeout(() => {
            console.log(sub);
            
            sub.click();

        }
            , 2000);        

    }

    render() {
        return (
            <>
            <div className="login-container">

                <h2 className="login-title">
                    Sign in to Kroinbase
                </h2>

                <form onSubmit={this.handleSubmit}>
                    
                    <input type="email"
                            id='email'
                            name="email"
                            placeholder="Email"
                            defaultValue={this.state.email} 
                            onChange={this.handleChange} required />
            
                    <input type="password"
                            id='password'
                            name="password"
                            placeholder="Password"
                            defaultValue={this.state.passowrd} 
                            onChange={this.handleChange} required />
           
                    <div>
                        <button className='btn btn-flat' onClick={this.handleDemo}>
                            Demo
                        </button>   

                        <button type='submit' id='sub' className='btn btn-flat'>
                            SIGN IN
                        </button>
                    </div>
                </form>
                {/* <div> */}
                    {/* <span> */}
                    {/* <a href="/404.html">Forgot password?</a> · */}
                    {/* <a href="/404.html">Don't have an account?</a> · */}
                    {/* <a href="/500.html">Privacy Policy</a> */}
                    {/* </span>     */}
                        {/* <a href="/500.html">Have an issue with 2-factor authentication?</a> */}
                {/* </div>  */}
            </div>
            </>

            )
        }
    }
    