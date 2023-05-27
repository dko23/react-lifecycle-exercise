import React, { Component } from 'react'

export class UserClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()).
            then(data => {
                console.log(data)
                this.setState({ users: data })
            });
    }
    render() {
        return (
            <div>
                <>

                    {this.state.users.map(user =>
                        <div key={user.id} className="user-container">
                            <p className="user-name" >Name:{user.name}</p>
                            <p className="user-details">UserName:{user.username}</p>
                            <p className="user-details">Email:{user.email}</p>
                        </div>
                    )}

                </>
            </div>
        )
    }
}


















export default UserClass