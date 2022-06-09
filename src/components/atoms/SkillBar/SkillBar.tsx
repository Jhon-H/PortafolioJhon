import './SkillBar.scss'
import { ISkill } from 'utils/interfaces/skills.interface'

interface Props extends ISkill {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: Props) => {
  return (
    <div className="SkillBar">
      <div className="SkillBar__level" style={{ width: `${level}%` }} />
      <p className="SkillBar__text"> {name} </p>
    </div>
  )
}

export default SkillBar
