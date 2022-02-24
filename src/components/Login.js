import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { useWindowWidth } from '@react-hook/window-size/throttled';
import Button from './Button';
import Title from './Title';
import Logo from './Logo';
import TextInput from './TextInput';
import '../css/Login.css';

const Login = ({ onSubmitForm }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const onlyWidth = useWindowWidth()

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className="login__container">
            <div className="login__card">
                <Logo />

                {onlyWidth < 640 && <Title title={"Zaloguj się"} />}
                {onlyWidth >= 640 && <Title title={"Zaloguj się do aplikacji"} />}

                <form onSubmit={(e) => onSubmitForm(e, login, password)}>
                    <TextInput value={login} setValue={setLogin} placeholder="login" icon="user" type="text" />
                    <TextInput value={password} setValue={setPassword} placeholder="password" icon="password" type="password" />

                    <div className="login__options">
                        <div className="login__options_remember">
                            <Checkbox
                                icon={<FiCheck color="#a4acb4" size={10} />}
                                name="login__checkbox"
                                checked={isChecked}
                                size={14}
                                onChange={toggleCheck}
                                borderColor="#a4acb4"
                                borderWidth={1}
                                borderRadius={5}
                                style={{ cursor: "pointer" }}
                                labelStyle={{ marginLeft: 5, marginTop: 1, userSelect: "none" }}
                                label="Zapamiętaj mnie"
                            />
                        </div>
                        <div className="login__options_forget">Zapomniałaś hasła?</div>
                    </div>

                    <Button caption={"ZALOGUJ SIĘ"} />
                </form>

                <div className="login__other_methods">
                    <div className="method method_text">Lub zaloguj się przez</div>

                    <div className="method method_icon">
                        <FaFacebook size={38} color="#58c59a" />
                    </div>

                    <div className="method method_icon">
                        <FaGoogle size={38} color="#58c59a" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
