function Validation(values){
    alert("")
    let error = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === ""){
        error.username = "Username should not be empty"
    } else {
        error.username = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password doesn't match"
    } else {
        error.password = ""
    }
}

export default Validation;