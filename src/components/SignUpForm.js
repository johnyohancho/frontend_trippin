import React from 'react';

class SignUpForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            username: '',
            name: '',
            email: '',
            password_digest: '',
            errors: []
        }
    }

    displayErrors = () => {
        if (this.state.errors.length > 0) {
            return (
                <div className="signup-form-errors">
                    <p>Invalid!</p>
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

        const reqObj = {
            username:this.state.username, 
            name:this.state.name,
            password_digest:this.state.password_digest,
            email:this.state.email
        }
        console.log('req object:',reqObj)
        e.preventDefault()
        fetch('https://backend-trippin.herokuapp.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqObj)
        }).then(res => res.json())
        .then(data => {
            if (data.errors) {
                this.setState({ errors: data.errors })
            } else {
                this.props.history.push("/")
            }
        })
    }
    
    render() {
        return (
            <div className="ui container">
                <div className="ui relaxed centered grid">
                    <div className="six wide column">
                        <div className="ui raised segment">
                            <form id="signup-form" className="ui form" onSubmit={this.handleSubmit}>
                                <h2 className="ui center aligned header">Sign Up</h2>
                                {this.displayErrors()}
                                <div className='field'>
                                    <label>Username</label>
                                    <input type="text" name="username" placeholder="username"
                                        onChange={(e) => this.setState({ username: e.target.value })}></input>
                                </div>
                                <div className='field'>
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="name"
                                        onChange={(e) => this.setState({ name: e.target.value })}></input>
                                </div>
                                <div className='field'>
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="email"
                                        onChange={(e) => this.setState({ email: e.target.value })}></input>
                                </div>
                                <div className='field'>
                                    <label>Password</label>
                                    <input type="password" name="password_digest" placeholder="password"
                                        onChange={(e) => this.setState({ password_digest: e.target.value })}></input>
                                </div>
                                <button className="ui button" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpForm;