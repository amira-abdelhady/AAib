import React from 'react'


export default class Users extends React.Component {

    constructor() {

        super();

        this.state = {
            isAuthenticated: false,
            users: [
                { name: "Hend", email: "hend@gmail.com", isAdmin: true },
                { name: "lara", email: "lara@gmail.com", isAdmin: true },
                { name: "Salma", email: "salma@gmail.com", isAdmin: false }
            ]
        }
    }


    render() {

        return (
            <>

                {(this.state.isAuthenticated )? <ul>

                    {this.state.users.map((user, index) => {
                        if (user.isAdmin ) {
                            return <li key={index}>{user.name}</li>
                        }
                    })}
                </ul>:<p>Please Login first</p>}

            </>
        )

    }


}