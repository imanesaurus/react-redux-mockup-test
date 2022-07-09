import { useState } from "react";
import Button from "../../components/button";
import Cards from "../../components/cards"
import MainContainer from "../../components/container/MainContainer"
import { TitleHeader } from "../../components/container/MainContainer.styles";
import TextInput from "../../components/textInput"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <MainContainer>
            <Cards>
                <TitleHeader>
                    Sign in
                </TitleHeader>
                <TextInput value={username} onChange={setUsername} placeholder="Username" />
                <TextInput value={password} onChange={setPassword} placeholder="Password" />
                <Button onClick={() => alert("oi")} title="Sign in" style={{ marginTop: '50px'}} />
            </Cards>
        </MainContainer>

    )
}

export default Login