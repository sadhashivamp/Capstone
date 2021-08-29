import React from 'react'

export const SignUp = () => {
    return (
        <div>
            <section className="showcase login">
            <div className="overlay">
                <form className="form">
                    
                    <input type="text" name="firstName" id="firstName" placeholder="FirstName" required /> 
                    <input type="text" name="lastName" id="lastName" placeholder="LastName" required />   
                    <input type="email" name="email" id="email" placeholder="Your email address" required />
                    <input type="password" name="password" id="password" placeholder="Enter your password" required />
                    <input type="password" name="confirm password" id="confirm password" placeholder="Confirm your password" required />
                    <input type="date" id="birthday" name="birthday"></input>
                    <button type="submit">Create your account</button>
                </form>
            </div>
        </section>
        </div>
    )
}

