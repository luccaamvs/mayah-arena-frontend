import { ButtonMain } from "../../components/buttons/ButtonMain"
import { Input } from "../../components/inputs/Input"

export const Login = () => {
return (
    <>
        <form>
            <Input name="email" type="text" placeholder="teste@gmail.com" labelText="Email:" id="email" />
            <Input name="password" type="password" placeholder="*******" labelText="Senha:" id="password" />
            <ButtonMain type="submit" text="Registrar" id="signup-button" />
            <ButtonMain type="submit" text="Login" id="password" />      
        </form>
    </>
)}