import React  from 'react'


export const Builder = () => {
    
    return (
        <section className="showcase login">
            <div className="overlay">
                <form className="form">
                    <h1>Please Login Builder</h1>
                    <input type="email" name="email" id="email" placeholder="Your email address" required />
                    <input type="password" name="password" id="password" placeholder="Enter your password" required />
                    <button type="submit">LogIn</button>
                    
                </form>
                   
                
            </div>
        </section>
    )
}
