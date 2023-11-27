import React, {useState} from 'react'
import { ButtonMain } from "../../components/buttons/ButtonMain"
import { Input } from "../../components/inputs/Input"
import { Link, useNavigate } from "react-router-dom"
import { mayahApi } from '../../services/api/mayah-api'
import toastify from '../../utils/notifiers/toastify'
import './styles.css'

export const Login: React.FC = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (target: any) => {
        const {name, value} = target
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = async (event: any) => {
        try {
            event.preventDefault()
            const { data: response, status } = await mayahApi.post('/login',loginData)
            localStorage.setItem('accessToken', JSON.stringify(response))

            if(status === 200){
                toastify('Seja bem-vindo(a)', "success")
                navigate('/painel')
            }
        } catch (error: any) {
           
           if(error.response.status === 401){
            toastify('Falha no login', "error")
           }

        } 
    }

    return (
        <div >
            <h2>Login</h2>
            
            <form className='container-form'>
                <Input 
                    handle={(event: any)=>{
                        handleChange(event.target) 
                    }} 
                    name="email" 
                    type="text" 
                    placeholder="teste@gmail.com" 
                    labelText="Email: " 
                    id="email" 
                />

                <Input 
                    handle={(event: any)=>{
                        handleChange(event.target) 
                    }}  
                    name="password" 
                    type="password" 
                    placeholder="*******" 
                    labelText="Senha: " 
                    id="password" 
                />
                
                <div className='container-buttons'>
                <Link to="/registro">
                    <ButtonMain type="button" text="Registrar" id="signup-button" />
                </Link>

                <ButtonMain handle={handleLogin} type="submit" text="Login" id="login-button" /> 
                </div>     
            </form>
        </div>
    )
}