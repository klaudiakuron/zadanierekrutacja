import LogoImg from '../img/logo.jpg';
import '../css/Logo.css';

const Logo = () => {
    return (
        <div className="logo__container">
            <img className="logo__img" src={LogoImg} alt="Łappka logo" />
        </div>
    )
}

export default Logo;