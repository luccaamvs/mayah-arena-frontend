import { useState } from "react"
import { ButtonMain } from "../../components/buttons/ButtonMain"
import { Input } from "../../components/inputs/Input"
import { Link, useNavigate } from "react-router-dom"
import { mayahApi } from "../../services/api/mayah-api"
import toastify from "../../utils/notifiers/toastify"
import './styles.css'

export const Signup: React.FC = () => {
    const [signupData, setSignupData] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirm: ''
    })

    const navigate = useNavigate()
    
    const handleChange = (target: any) => {
        const {name, value} = target
        setSignupData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSignup = async (event: any) => {
        try {
            event.preventDefault()
            const { data: response, status } = await mayahApi.post('/signup',signupData)
            if(status === 200){
                toastify('Seja bem-vindo(a)', "success")
                navigate('/painel')
            }

        } catch (error) {
            console.log(error)
        }
    }

return (
    <>
        <h2>Registrar</h2>
        
        <form className="container-form">
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
            name="username" 
            type="text" 
            placeholder="user" 
            labelText="Nickname: " 
            id="username" 
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

            <Input 
            handle={(event: any)=>{
                handleChange(event.target)
            }}
            name="passwordConfirm" 
            type="password" 
            placeholder="*******" 
            labelText="Confirmação: " 
            id="passwordConfirm" 
            />

            <div className="container-buttons">
                <Link to="/">
                    <ButtonMain type="button" text="Voltar" id="back-button" />
                </Link>
           
            <ButtonMain handle={handleSignup} type="submit" text="Registrar" id="signup-button" />      
            </div>
        </form>
    </>
)}