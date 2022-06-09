import './Title.scss'

interface Props {
  title: string;
  className?: string;
  color?: string;
  bold?: boolean;
}

const Title = ({ title, color, className = '', bold = false, ...rest }: Props) => {
  return (
    <h2
    className={`Title ${className}`}
    style={{
      color,
      fontWeight: bold ? 'bold' : 'normal'
    }}
    {...rest}
    >
      {title}
    </h2>
  )
}

export default Title
