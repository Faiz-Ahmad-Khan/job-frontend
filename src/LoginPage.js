import { useState } from 'react'
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {                                                                                                                                                                                                             
    e.preventDefault()                                                                                                                                                                                                                          
    try {                                                                                                                                                                                                                                       
      const response = await axios.post('https://job-backend-8rmo.onrender.com/users/login', { email, password })                                                                                                                                               
      console.log(response.data)                                                                                                                                                                                                                
    } catch (error) {                                                                                                                                                                                                                           
      console.error(error)                                                                                                                                                                                                                      
    }                                                                                                                                                                                                                                           
  }
                                                                                                                                                                                                                                                
  return (                                                                                                                                                                                                                                      
    <div>                                                                                                                                                                                                                                       
      <h1>Login</h1>                                                                                                                                                                                                                            
      <form onSubmit={handleSubmit}>                                                                                                                                                                                                            
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />                                                                                                                            
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />                                                                                                                
        <button type="submit">Login</button>                                                                                                                                                                                                    
      </form>                                                                                                                                                                                                                                   
    </div>                                                                                                                                                                                                                                      
  )                                                                                                                                                                                                                                             
}                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                
export default LoginPage;