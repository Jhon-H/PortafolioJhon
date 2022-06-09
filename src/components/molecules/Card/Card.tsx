import { useState } from 'react'
import { IProyect } from 'utils/interfaces/proyects.interface'
import './Card.scss'
import Link from 'components/atoms/Link/Link'

interface Props extends IProyect { }

const Card = ({ description, img, name, url } : Props) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <button
      className={`Card ${isClicked && 'clicked'}`}
      onClick={() => setIsClicked(state => !state)}
    >
      {/* Front */}
      <div className='Card__front'>
        <img
          src={img}
          alt={name}
          className='Card__front__img'
          loading='lazy'
        />
      </div>

      {/* Back */}
      <div className='Card__back'>
        <p className='Card__back__description'>{description}</p>
        <Link
          href={url}
          className='Card__back__link'
          onClick={() => setIsClicked(state => false)}
        > Ver {name} </Link>
      </div>
    </button>
  )
}

export default Card
