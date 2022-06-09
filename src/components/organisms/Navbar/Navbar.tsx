import Link from 'components/atoms/Link/Link'
import linkedin from 'utils/assets/images/linkedin.png'
import github from 'utils/assets/images/github.png'
import menu from 'utils/assets/images/menu.png'
import { useMobileNavbar } from '../../../hooks/useMobileNavbar'
import 'animate.css'
import './Navbar.scss'

const Navbar = () => {
  const { isOpen, close, open } = useMobileNavbar()

  return (
    <nav className='Navigation'>
      <button
        onClick={open}
        className={`Navigation__button Navigation__button--${isOpen && 'close'} `}
      >
        <img src={menu} alt='menu' width={19} height={19} />
      </button>

      <div className={
        `Navbar
        Navbar--${!isOpen && 'close'}
        animate__animated 
        animate__${isOpen && 'fadeInLeft'}`
      }>
        <button onClick={close} className="Navbar__btn-close"> X </button>

        <p className='Navbar__top'>F</p>

        <ul className='Navbar__sections'>
          <li><a href="#aboutme">Sobre mi</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#proyects">Proyectos</a></li>
        </ul>

        <ul className='Navbar__social'>
          <li className='Navbar__social__item'>
            <Link href="https://www.linkedin.com/in/jhon-jairo-hernandez/">
              <img src={linkedin} alt="linkedin" width={30} height={30} />
            </Link>
          </li>

          <li className='Navbar__social__item'>
            <Link href="https://github.com/Jhon-H">
              <img src={github} alt="github" width={30} height={30} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
