import { MdLockOutline } from 'react-icons/md';
import { HiOutlineUser } from 'react-icons/hi';
import '../css/TextInput.css';

const TextInput = ({ value, setValue, placeholder, icon, type }) => {
    return (
        <div className="text_input__container">
            <div className="text_input__field">
                <div className="text_input__icon">
                    {icon === "user" && <HiOutlineUser size={26} color="#58c59a" />}
                    {icon === "password" && <MdLockOutline size={26} color="#58c59a" />}
                </div>
                <input type={type} placeholder={placeholder} className="text_input__input" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
    )
}

export default TextInput;