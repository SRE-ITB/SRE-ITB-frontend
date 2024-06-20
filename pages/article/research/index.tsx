import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Details from '@src/contexts/Article/Details'
import Footer from '@src/components/Navigation/Footer'

import Research from '@src/assets/Images/Article/Booklet/Research.jpg'
import IndiraPradnyaswari from '@src/assets/Images/Article/Profiles/Research/IndiraPradnyaswari.jpeg'

const ResearchPage = (): JSX.Element => {
  const contents = [
    {
      image: IndiraPradnyaswari,
      source: 'Indira Pradnyaswari',
      position: 'Associate Research Analyst at ASEAN Centre for Energy',
      paragraph: 'Indira Pradnyaswari is a graduate of Environmental Engineering from ITS. Currently, she is working as an Associate Research Analyst at the ASEAN Climate Change and Energy Project (ACCEPT) Phase II, focusing on developing and advancing climate and renewable energy projects in the ASEAN sector. In this article, we will explore what research analysts at the ASEAN Centre for Energy do and what are the tips and tricks to be able to work in that position. \n\nDuring her studies in Environmental Engineering, Indira became exposed to issues ranging from waste management to climate change and its global impacts. She was also part of the SRE ITS, which further exposed her to renewable energy-related issues, sparking her interest in climate change and energy issues. After completing her bachelor\'s degree, Indira began working in the field of climate change and eventually became a Research Analyst at the ASEAN Centre for Energy. Typically, research analysts in this field conduct research on energy and climate change-related projects and then they will disseminate the research findings to stakeholders from ASEAN Member States, aiming to align and provide input for the ASEAN Plan of Action for Energy Cooperation (APAEC), a series of policy documents aimed at promoting multilateral energy cooperation and integration to achieve the goals and accelerate ASEAN energy transition \n\nIn her daily work, besides conducting research and disseminating it, research analysts also need to ensure that the communication results are used as input in the policy planning process. Communication is generally done through direct discussion forums in the respective countries. Furthermore, the ASEAN Centre for Energy also collaborates with universities in ASEAN to produce papers related to climate and net-zero emissions through the establishment of ASEAN Researchers Network on Energy Climate Change. According to Indira, challenges in this job include the demand to handle multiple tasks simultaneously and the need for adaptive skills due to the fast-paced nature of work and dynamic work environment. Moreover, as the activities involve consulting with stakeholders and governments in ASEAN, being prepared for the current energy situation and policies is essential. \n\nThe recruitment process to become a Research Analyst at the ASEAN Centre for Energy starts from administrative selection (CV, IELTS, personal statement, etc.), written test to interview stages. Some tips provided from Indira include engaging in activities related to our interests or focus areas and participating in projects led by professors, especially in relevant fields. A proactive action is needed to participate in the research projects in order to improve our credibility as a student. Additionally, since research analysts write extensively, creating a portfolio of various written works since university is advisable. One feasible work for students to publish is writing opinion editorial blogs containing their opinions on certain issues. Regarding the activities that have been done but are not relevant, they can be used in the personal statement to show our willingness to learn new things. Proficiency in English is also required as communication with the stakeholder is generally conducted in English. \n\nIn conclusion, Research Analysts at the ASEAN Centre for Energy focus on accelerating the development of climate change and energy issues in the ASEAN sector through research activities and disseminating it to the stakeholders. Experience in writing, communicating and disseminating something related to the field of energy and climate change during college is highly recommended to be able to work in that position. Therefore, SRE ITB provides various relevant programs to prepare students for their careers, ranging from REview, a basic learning program to introduce renewable energy and its developments, to a career booklet that provides insights from various professionals.'
    }
  ]

  const section = {
    header: Research,
    title: 'Research'
  }

  return (
    <SEO title="SRE ITB | Research">
      <Navbar />
      <Details section={section} contents={contents} />
      <Footer />
    </SEO>
  )
}

export default ResearchPage
