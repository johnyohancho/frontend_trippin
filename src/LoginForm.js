import React from 'react';

class LoginForm extends React.Component {
    
    constructor() {
        super()
        state = {
            username = '',
            email = '',
            password = '',
            errors: []
        }
    }

    displayErrors = () => {
        if (this.state.errors.length > 0) {
            return (
                <div className="login-form-errors">
                    <p>Form Errors</p>
                    <ul>
                        {this.state.errors.map(err => <li>{err}</li>)}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then(data => {
            if (data.errors) {
                this.setState({ errors: data.errors })
            } else {
                localStorage.setItem("token", data.token)
                this.props.history.push("/")
            }
        })
    }
    
    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                {this.displayErrors()}
                <div className='field'>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="email"
                        onChange={(e) => this.setState({ email: e.target.value })}></input>
                </div>
                <div className='field'>
                    <lavel>Password</lavel>
                    <input type="text" name="password" placeholder="password"
                        onChange={(e) => this.setState({ password: e.target.value })}></input>
                </div>
                <button className="submit-btn" type="submit"></button>
            </form>
        )
    }
}

export default LoginForm;