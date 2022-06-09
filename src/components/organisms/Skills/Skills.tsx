import { ISkill } from 'utils/interfaces/skills.interface'
import Title from 'components/atoms/Title/Title'
import SkillBar from 'components/atoms/SkillBar/SkillBar'
import './Skills.scss'

const skillsList: ISkill[] = [
  { name: 'React', level: 90 },
  { name: 'Typescript', level: 82 },
  { name: 'React Native', level: 42 },
  { name: 'Python', level: 40 },
  { name: 'C++', level: 35 }
]

const Skills = () => {
  return (
    <section className='Skills' id="skills">
      <Title title="Skills" bold />

      <div className='Skills__list'>
        {skillsList.map(({ name, level }) => (
          <SkillBar
            key={`${name}${level}`}
            name={name}
            level={level}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
