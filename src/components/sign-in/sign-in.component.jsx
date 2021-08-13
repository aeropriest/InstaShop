import { render } from '@testing-library/react';
import { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'

class SignIn extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = event => {
        event.preventDefault()
        this.setState({email:'', password:''})
    }
    
    handleOnChange = event => {
        const { value, name } = event.target
        this.setState({ [name] : value})
    }
    
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type='email' 
                        value={this.state.email} rquired 
                        onChange={this.handleOnChange}
                        />
                    <FormInput 
                        name="password" 
                        type = 'password' 
                        value={this.state.password} rquired 
                        onChange={this.handleOnChange}
                        />
                    <input type="submit" value = "Submit From"/>
                </form>
            </div>
        )
    }    
}
    



export default SignIn