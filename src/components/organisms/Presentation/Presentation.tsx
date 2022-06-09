import Photo from 'utils/assets/images/photo.png'
import './Presentation.scss'

const Presentation = () => {
  return (
    <section className='presentation'>
      <h1 className='presentation__title'>FrontEnd Developer</h1>
      <h2 className='presentation__description'>Desarrollador frontEnd React</h2>

      <img
       src={Photo}
       alt="profile photo"
       width={400}
       height={400}
       className='presentation__photo'
      />
    </section>
  )
}

export default Presentation
