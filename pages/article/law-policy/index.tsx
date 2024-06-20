import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Details from '@src/contexts/Article/Details'
import Footer from '@src/components/Navigation/Footer'

import LawPolicy from '@src/assets/Images/Article/Booklet/LawPolicy.jpg'
import RobiGinting from '@src/assets/Images/Article/Profiles/LawPolicy/RobiGinting.jpg'

const LawPolicyPage = (): JSX.Element => {
  const contents = [
    {
      image: RobiGinting,
      source: 'Robi Ginting',
      position: 'Energy Policy Analyst at USAID SINAR',
      paragraph: 'Robi Ginting graduated from the Law Program at Universitas Gadjah Mada in 2018, where he took courses relevant to environmental law and business. He began his career as a research assistant at Pusat Studi Energi UGM, where he contributed to strategic energy projects such as gas network and distribution policy, oil and gas legislation, and renewable governance policy. Additionally, he co-authored a book titled "Pengantar Hukum Energi," providing fundamental descriptions of energy law and governance in Indonesia. \n\nAfter spending nearly two years as a legal officer at an oil, gas, and coal company, Robi recognized a lack of support for his career development in the environmental sector. Consequently, he transitioned to a non-profit organization focused on renewable energy and sustainability. Since June 2020, he has been volunteering at CarbonEthics to deepen his understanding of climate change and carbon projects. Additionally, he serves as an Energy Policy Analyst at USAID Sinar, a US-based nonprofit that assists companies in developing countries with renewable energy implementation. He is also a legal and carbon policy specialist in WRI Indonesia’s Energy and Sustainable Business team. \n\nAccording to Robi, several strategies have helped him fine-tune his skill set to work in renewable and sustainable fields. First, understanding the type of work that suits him best. As he enjoys advising and policy analysis, he tends to avoid working in private companies. Thus, finding true passion becomes an underlying effort in the job transition process. Second, getting “FOMO” to renewable and climate issues. Even if someone has little experience in sustainability or has just graduated, Robi believes that such individuals can potentially excel in the recruitment process if they are accustomed to hearing colloquial terms in sustainability or are aware of ongoing issues. Joining climate or renewable communities, networking, and following sustainability leaders on LinkedIn will help to familiarize oneself with the renewable discourse. Third, build your selling point. If you come from a social and policy background, this is the perfect time to enhance your skills. Indonesia is transitioning to green energy and greening the financial and regulatory system are required to make it happen. In his case, Robi understands that a combination of legal expertise and knowledge of the renewable market is a valuable asset that put his on the spotlights of decarbonization errands. \n\nAs an Energy Policy Analyst, Robi primarily focuses on qualitative aspects due to his legal background. His responsibilities include managing policies related to renewable energy or energy transition, conducting policy analysis to ensure implementable policies, and policy modeling, such as designing policies for coal processing from grid to post-coal depletion. He emphasized that skill is more important than grade. While a high GPA may be beneficial, Robi believes that possessing a sufficient skill set to solve existing problems is more important than GPA alone. Companies and organizations tend to prioritize individuals with knowledge, experience, and interest in the required field. Interest is crucial as it drives individuals to explore further in their area of expertise. Additionally, English proficiency is a requirement, and the recruitment process at USAID Sinar involves CV screening, interviews, and tests assessing case and modeling abilities. Critical thinking and knowledge of the field play significant roles in determining one\'s success in the recruitment process. \n\nRobi Ginting advocates for working in alignment with one\'s passion as it fosters personal growth, with financial rewards following suit. He encourages individuals not to hesitate to switch paths as long as they possess soft skills, hard skills, and a good reputation, as professionalism underpins success in the working world regardless of academic background.'
    }
  ]

  const section = {
    header: LawPolicy,
    title: 'Law & Policy'
  }

  return (
    <SEO title="SRE ITB | Law & Policy">
      <Navbar />
      <Details section={section} contents={contents} />
      <Footer />
    </SEO>
  )
}

export default LawPolicyPage
