import { proyects } from 'utils/assets/data/proyects'
import Title from 'components/atoms/Title/Title'
import Card from 'components/molecules/Card/Card'
import Link from 'components/atoms/Link/Link'
import './Proyects.scss'

const Proyects = () => {
  return (
    <section className='Proyects' id="proyects">
      <Title title='Proyectos' bold />

      <div className='Proyects__list'>
        {proyects.map(proyect => (
          <Card key={proyect.id} {...proyect} />
        ))}
      </div>

      <Link
        href='https://github.com/Jhon-H/MiPortafolio/blob/main/README.md#music-app'
        className='Proyects__link'
      > Ver otros proyectos </Link>
    </section>
  )
}

export default Proyects
