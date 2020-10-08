import React, {useState} from 'react'
import './Login.css'

const Login = ({handleName}) => {

    const [input, setInput] = useState('')
   

    const handleSubmit = e => {
        e.preventDefault()
        handleName(input)
        setInput('')
    }


    return (
        <div className="login">
            
               <form className="login__form"
             onSubmit={handleSubmit}
               >

               <label>Hello friend tell me your name...</label>

                <input
                onChange={e => setInput(e.target.value)}
                type="text"
                value={input}
                placeholder="Your name here"/>

                <button
                type="submit"
                className="login__button">
                    Let's go 
                
                </button>
               </form>
            
        </div>
    )
}

export default Login
