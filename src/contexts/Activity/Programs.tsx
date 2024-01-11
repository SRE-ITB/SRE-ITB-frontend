import Program from '@src/components/Card/Program'

import InternalProgram1 from '@src/assets/Images/Activity/InternalProgram/coverInternal.jpg'
import ExternalProgram1 from '@src/assets/Images/Activity/ExternalProgram/coverExternal.png'
import LearningProgram1 from '@src/assets/Images/Activity/Learning/coverLearning.png'
import Project1 from '@src/assets/Images/Activity/Project/coverProject.png'

const Programs = ({ dummyArticles }: any): JSX.Element => {
  return (
    <>
      <Program
        dummyArticles={dummyArticles}
        title="Internal Program"
        caption="The journey of developing strong teamwork"
        desc="Internal programs within the Society of Renewable Energy at ITB (Institut Teknologi Bandung) refer to initiatives or activities that are conducted within the organization for its members or stakeholders. These could include workshops, training sessions, or events aimed at enhancing the skills and knowledge of the society&apos;s members in renewable energy-related fields. Internal programs contribute to the professional and personal development of members, fostering a collaborative and learning-oriented environment within the organization."
        image={InternalProgram1}
        type="internal"
      />
      <Program
        dummyArticles={dummyArticles}
        title="External Program"
        caption="The journey of developing strong teamwork"
        desc="External programs organized by the Society of Renewable Energy at ITB involve activities or events that extend beyond the boundaries of the organization and engage external stakeholders. These may include outreach programs, partnerships with other institutions, or community-based initiatives focused on promoting awareness and understanding of renewable energy. External programs contribute to the society&apos;s mission by creating a broader impact and building connections with the wider community."
        image={ExternalProgram1}
        type="external"
      />
      <Program
        dummyArticles={dummyArticles}
        title="Learning Program"
        caption="The journey of producing renewable energy accelerator"
        desc="Learning programs within the context of the Society of Renewable Energy at ITB are designed to provide educational opportunities and resources for members to deepen their understanding of renewable energy technologies, policies, and practices. These programs may include lectures, seminars, or online courses that cover various aspects of renewable energy, fostering continuous learning and knowledge exchange within the society."
        image={LearningProgram1}
        type="learning"
      />
      <Program
        dummyArticles={dummyArticles}
        title="Project"
        caption="The journey of giving back to nature"
        desc="Projects within the Society of Renewable Energy at ITB are specific undertakings that align with the organization&apos;s goals and contribute to its mission. These projects could range from research initiatives and prototype development to community-based projects that promote the practical application of renewable energy solutions. Projects play a crucial role in translating theoretical knowledge into real-world impact, allowing society members to apply their skills and contribute to the advancement of renewable energy in both academic and practical settings."
        image={Project1}
        type="project"
      />
      <div className='h-[10vw] bg-[#F0F1F4]'></div>
    </>
  )
}

export default Programs
