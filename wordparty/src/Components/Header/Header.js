/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom";
import HomeImage from './../../assets/home.svg'
import RulesImage from './../../assets/rules.svg'
import AccountImage from './../../assets/profile.png'
import ContactsImage from './../../assets/contacts.svg'
import './Header.sass';

export default function Header() {
    return (
        <header className='header'>
            <ul className='header__menu'>
                <li className='header__item'>
                    <Link to="/" className='header__link'>
                        <img src={HomeImage} alt='Home'/>
                    </Link>
                </li>
                <li className='header__item'>
                    <a className='header__link' href='#'>
                        <img src={RulesImage} alt='Rules'/>
                    </a>
                </li>
                <li className='header__item'>
                    <a className='header__link' href='#'>
                        <img src={AccountImage} alt='Account'/>
                    </a>
                </li>
                <li className='header__item'>
                    <a className='header__link' href='#'>
                        <img src={ContactsImage} alt='Contacts'/>
                    </a>
                </li>
            </ul>
        </header>
    )
}
