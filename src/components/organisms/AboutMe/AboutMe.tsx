import Title from 'components/atoms/Title/Title'
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <section className='AboutMe' id="aboutme">
      <Title title="Hola, soy Jhon" color='#fff' bold/>

      <p className='AboutMe__text'>
        Desarrollador front-end con conocimientos de React y Typescript, apasionado por
        aprender nuevas tecnologías y curioso por entender cómo trabajan las cosas y porqué
        funcionan. Me encantan los retos algorítmicos y los problemas que involucren lógica.
      </p>
    </section>
  )
}

export default AboutMe
