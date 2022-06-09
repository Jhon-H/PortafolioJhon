import AboutMe from 'components/organisms/AboutMe/AboutMe'
import Navbar from 'components/organisms/Navbar/Navbar'
import Presentation from 'components/organisms/Presentation/Presentation'
import Proyects from 'components/organisms/Proyects/Proyects'
import Skills from 'components/organisms/Skills/Skills'
import wave from 'utils/assets/images/wave2.svg'
import './Home.scss'

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Presentation />
        <AboutMe />
        <Skills />
        <Proyects />
      </main>

      <footer>
        <figure>
          <img
            src={wave}
            alt=""
            role="presentation"
            className="wave"
          />
        </figure>
      </footer>
    </>
  )
}

export default Home
