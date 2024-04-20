import Program from '@src/components/Card/Program'

import Gathering from '@src/assets/Images/Activity/InternalProgram/Gathering.webp'
import CompanyVisit from '@src/assets/Images/Activity/ExternalProgram/CompanyVisit.webp'
import SkillTraining from '@src/assets/Images/Activity/LearningProgram/SkillTraining.webp'
import REProject from '@src/assets/Images/Activity/Project/REProject.webp'
import Leaf from '@src/assets/Images/Illustration/Leaf.png'

const Programs = ({ articles }: any): JSX.Element => {
  return (
    <>
      <Program
        articles={articles}
        title="Internal Program"
        caption="The journey of developing strong teamwork"
        desc="Internal programs within the Society of Renewable Energy at ITB (Institut Teknologi Bandung) refer to initiatives or activities that are conducted within the organization for its members or stakeholders. These could include workshops, training sessions, or events aimed at enhancing the skills and knowledge of the society&apos;s members in renewable energy-related fields. Internal programs contribute to the professional and personal development of members, fostering a collaborative and learning-oriented environment within the organization."
        thumbnail={Gathering}
        type="internal"
      />
      <Program
        articles={articles}
        title="External Program"
        caption="The journey of developing strong teamwork"
        desc="External programs organized by the Society of Renewable Energy at ITB involve activities or events that extend beyond the boundaries of the organization and engage external stakeholders. These may include outreach programs, partnerships with other institutions, or community-based initiatives focused on promoting awareness and understanding of renewable energy. External programs contribute to the society&apos;s mission by creating a broader impact and building connections with the wider community."
        thumbnail={CompanyVisit}
        type="external"
      />
      <Program
        articles={articles}
        title="Learning Program"
        caption="The journey of producing renewable energy accelerator"
        desc="Learning programs within the context of the Society of Renewable Energy at ITB are designed to provide educational opportunities and resources for members to deepen their understanding of renewable energy technologies, policies, and practices. These programs may include lectures, seminars, or online courses that cover various aspects of renewable energy, fostering continuous learning and knowledge exchange within the society."
        thumbnail={SkillTraining}
        type="learning"
      />
      <Program
        articles={articles}
        title="Project"
        caption="The journey of giving back to nature"
        desc="Projects within the Society of Renewable Energy at ITB are specific undertakings that align with the organization&apos;s goals and contribute to its mission. These projects could range from research initiatives and prototype development to community-based projects that promote the practical application of renewable energy solutions. Projects play a crucial role in translating theoretical knowledge into real-world impact, allowing society members to apply their skills and contribute to the advancement of renewable energy in both academic and practical settings."
        thumbnail={REProject}
        type="project"
      />
      <div className='h-[300px] bg-[#F0F1F4] flex justify-center'>
        <img src={Leaf.src} alt="leaf-icon" className="w-[100px] h-[100px] mt-[50px]" />
      </div>
    </>
  )
}

export default Programs
