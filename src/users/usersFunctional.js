import { useState ,useEffect } from 'react'


export default function UsersFunctional() {

    const [users, setUsers] = useState([
        { name: "Hend", email: "hend@gmail.com", isAdmin: true },
        { name: "lara", email: "lara@gmail.com", isAdmin: true },
        { name: "Salma", email: "salma@gmail.com", isAdmin: false }
    ])

    const [isAuthenticated, setAuthentication] = useState(false)


    useEffect(()=>{//mounting

   console.log("Mounted");

   return ()=>{//unmounting

   console.log("Unmounted");

   }

    },[])


    useEffect(()=>{//updating

     console.log("auth changed");

    },[isAuthenticated,users])


    // useEffect(()=>{



    // },[users])

    const handleChange = () => {

        setAuthentication(!isAuthenticated)

        setUsers(users.map((user) => {
            if (user.name == "Salma") {
                // use.name="mohamed";
                // return user;
                return { ...user, name: "Mohamed" }
            } else {

                return user
            }

        }))


    }

    return (
        <>

            {isAuthenticated ? <ul>
                {users.map((user, index) => {

                    // if (user.isAdmin) {

                    return <li key={index}>{user.name}</li>
                    // }
                })}


            </ul> : <p>Please Login first</p>}


            <button onClick={() => handleChange()} className="btn btn-success">Change Auth</button>
        </>
    )
}