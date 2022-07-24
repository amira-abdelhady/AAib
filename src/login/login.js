import { useState ,useEffect} from 'react'

const Login = () => {

    const [user, setUser] = useState({
        userName: "",
        email: ""
    })

    const [student, setStudent] = useState({
        studentName: "",
        email: ""
    })

    const [errors, setErrors] = useState({
        userError: null,
        emailErrors: null
    })

    const handleInputChange = (evt) => {

        if (evt.target.name == "userName") {
            setUser({
                ...user,
                userName: evt.target.value
            })

            setErrors({
                ...errors,
                userError: (evt.target.value.length == 0) ? "this field is required" :
                    (evt.target.value.length > 10) ?
                        "you should enter less than 10 characters" : null
            })

        } else if (evt.target.name == "email") {


            setUser({
                ...user,
                email: evt.target.value
            })
        }


        //2
        // setUser({
        //     ...user,
        //     [evt.target.name]:evt.target.value
        // })


    }

    const handleSubmit = (e) => {
        e.preventDefault()


    }

    useEffect(()=>{
        
console.log("change errors");

    },[errors])
    return (
        <>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                        Name
                    </label>
                    <input type="text" className={`form-control shadow-none ${(errors.userError ? 'border-danger' : '')}`}
                        value={user.userName} name="userName"
                        onChange={(e) => handleInputChange(e)}
                    />

                    <small className="text-danger">{errors.userError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Email
                    </label>
                    <input type="text" className="form-control"
                        value={user.email} name="email"
                        onChange={(e) => handleInputChange(e)}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Password
                    </label>
                    <input type="text" className="form-control"
                        value={user.password} name="password"
                        onChange={(e) => handleInputChange(e)}
                    />

                </div>

                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </>
    );
};

export default Login;
