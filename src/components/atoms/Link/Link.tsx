/* global JSX */

interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  href: string;
  className?: string;
  onClick?: () => void;
}

const Link = ({ children, className = '', onClick = () => {}, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`Link ${className}`}
      onClick={onClick}
    > {children} </a>
  )
}

export default Link
