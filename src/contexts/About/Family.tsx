import Organogram from '@src/components/Card/Organogram'

import empty from '@src/assets/Images/About/Family/empty.png'

// Executives
import President from '@src/assets/Images/About/Family/Executives/President.webp'
import VicePresident from '@src/assets/Images/About/Family/Executives/VicePresident.webp'
import IYREFDirector from '@src/assets/Images/About/Family/Executives/IYREFDirector.webp'
import GeneralSecretary1 from '@src/assets/Images/About/Family/Executives/GeneralSecretary1.webp'
import GeneralSecretary2 from '@src/assets/Images/About/Family/Executives/GeneralSecretary2.webp'

// Finance
import DeputyFinance from '@src/assets/Images/About/Family/Finance/DeputyFinance.webp'
import Treasurer1 from '@src/assets/Images/About/Family/Finance/Treasurer1.webp'
import Treasurer2 from '@src/assets/Images/About/Family/Finance/Treasurer2.webp'
import DirectorSponsor from '@src/assets/Images/About/Family/Finance/DirectorSponsor.webp'
import ViceDirectorSponsor from '@src/assets/Images/About/Family/Finance/ViceDirectorSponsor.webp'
import DirectorEntre from '@src/assets/Images/About/Family/Finance/DirectorEntre.webp'
import ViceDirectorEntre from '@src/assets/Images/About/Family/Finance/ViceDirectorEntre.webp'

// Internal
import DeputyInternal from '@src/assets/Images/About/Family/Internal/DeputyInternal.webp'
import DirectorMembers from '@src/assets/Images/About/Family/Internal/DirectorMembers.webp'
import DirectorOrganization from '@src/assets/Images/About/Family/Internal/DirectorOrganization.webp'
import ViceDirectorOrganization from '@src/assets/Images/About/Family/Internal/ViceDirectorOrganization.webp'
import DirectorEvents from '@src/assets/Images/About/Family/Internal/DirectorEvents.webp'
import ViceDirectorEvents from '@src/assets/Images/About/Family/Internal/ViceDirectorEvents.webp'

// External
import DeputyExternal from '@src/assets/Images/About/Family/External/DeputyExternal.webp'
import DirectorPR from '@src/assets/Images/About/Family/External/DirectorPR.webp'
import DirectorMedmar from '@src/assets/Images/About/Family/External/DirectorMedmar.webp'
import OrangGanteng from '@src/assets/Images/About/Family/External/OrangGanteng.webp'

// Academics
import DeputyAcademics from '@src/assets/Images/About/Family/Academics/DeputyAcademics.webp'
import DirectorEducations from '@src/assets/Images/About/Family/Academics/DirectorEducations.webp'
import ViceDirectorEducations from '@src/assets/Images/About/Family/Academics/ViceDirectorEducations.webp'
import DirectorCommunity from '@src/assets/Images/About/Family/Academics/DirectorCommunity.webp'
import ViceDirectorCommunity from '@src/assets/Images/About/Family/Academics/ViceDirectorCommunity.webp'
import DirectorAcademics from '@src/assets/Images/About/Family/Academics/DirectorAcademics.webp'
import ManagerProduct from '@src/assets/Images/About/Family/Academics/ManagerProduct.webp'
import ManagerCampaign from '@src/assets/Images/About/Family/Academics/ManagerCampaign.webp'
import MentorResearch from '@src/assets/Images/About/Family/Academics/MentorResearch.webp'

const Family = (): JSX.Element => {
  return (
    <div className='font-montserrat overflow-hidden flex flex-col items-center'>
      <h1 className='text-[38px] xl:text-[50px] font-gradient font-extrabold'>OUR</h1>
      <h1 className='text-[48px] xl:text-[60px] font-gradient font-extrabold -mt-5'>FAMILY</h1>

      {/* Executives */}
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <Organogram
          image={President}
          name='Dominica Wendy'
          major='(SI’21)'
          title='President of SRE ITB'
          color='#89C190'
        />
        <Organogram
          image={VicePresident}
          name='Nabila Puspita'
          major='(TI’21)'
          title='Vice President of SRE ITB'
          color='#89C190'
        />
      </div>
      <div className='mt-5'>
        <Organogram
          image={IYREFDirector}
          name='Zachrin Afian'
          major='(MR’22)'
          title='IYREF Executive Director'
          color='#89C190'
        />
      </div>
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <Organogram
          image={GeneralSecretary1}
          name='Bryan Franklyn'
          major='(TI’21)'
          title='General Secretary'
          color='#89C190'
        />
        <Organogram
          image={GeneralSecretary2}
          name='M. Wildan Akhyar'
          major='(TB’21)'
          title='General Secretary'
          color='#89C190'
        />
      </div>

      {/* Finance */}
      <div className='mt-20'>
        <Organogram
          image={DeputyFinance}
          name='Lucia Jovita'
          major='(SI’21)'
          title='Deputy Vice President of Finance'
          color='#F4C430'
        />
      </div>
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={Treasurer1}
            name='Alyssa Fathima'
            major='(MB’24)'
            title='Treasurer I'
            color='#F4C430'
          />
          <Organogram
          image={Treasurer2}
          name='Diandra Luvinta'
          major='(AK’22)'
          title='Treasurer II'
          color='#F4C430'
        />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorSponsor}
            name='Esther Pauline'
            major='(TB’22)'
            title='Director of Sponsorship'
            color='#F4C430'
          />
          <Organogram
          image={ViceDirectorSponsor}
          name='M. Dhiwa'
          major='(TB’22)'
          title='Vice Director of Sponsorship'
          color='#F4C430'
        />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorEntre}
            name='Marina Nugrahani'
            major='(TL’22)'
            title='Director of Entrepreneurship'
            color='#F4C430'
          />
          <Organogram
          image={ViceDirectorEntre}
          name='Hendri Saputra'
          major='(MA’22)'
          title='Vice Director of Entrepreneurship'
          color='#F4C430'
        />
        </div>
      </div>

      {/* Internal */}
      <div className='mt-20'>
        <Organogram
          image={DeputyInternal}
          name='Andreas Djohan'
          major='(AE’21)'
          title='Deputy Vice President of Internal'
          color='#EE4B2B'
        />
      </div>
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorMembers}
            name='Petra Hizkia'
            major='(SI’21)'
            title='Director of Members Management'
            color='#EE4B2B'
          />
          <Organogram
          image={empty}
          name='Faridza Hilmi'
          major='(TL’22)'
          title='Vice Director of Members Management'
          color='#EE4B2B'
        />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorOrganization}
            name='Achmad Farhan'
            major='(TK’22)'
            title='Director of Organizational Development'
            color='#EE4B2B'
          />
          <Organogram
          image={ViceDirectorOrganization}
          name='Fiona Tjandra'
          major='(TK’22)'
          title='Vice Director of Organizational Development'
          color='#EE4B2B'
        />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorEvents}
            name='Aliyah Revitaningrum'
            major='(BA’22)'
            title='Director of Events'
            color='#EE4B2B'
          />
          <Organogram
          image={ViceDirectorEvents}
          name='Kathlyn Lovina'
          major='(BA’22)'
          title='Vice Director of Events'
          color='#EE4B2B'
        />
        </div>
      </div>

      {/* External */}
      <div className='mt-20'>
        <Organogram
          image={DeputyExternal}
          name='Stefania Carla'
          major='(BA’21)'
          title='Deputy Vice President of External'
          color='#0096FF'
        />
      </div>
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorPR}
            name='Stevani'
            major='(AK’21)'
            title='Director of Public Relations'
            color='#0096FF'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorMedmar}
            name='Keyla Nadine'
            major='(SI’22)'
            title='Director of Media & Marketing'
            color='#0096FF'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={OrangGanteng}
            name='Bernardus Willson'
            major='(IF’21)'
            title='Director of IT Development'
            color='#0096FF'
          />
        </div>
      </div>
      <div className='mt-5 flex flex-wrap w-full justify-center gap-5'>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={empty}
            name='Kendra Yumna'
            major='(TK’22)'
            title='Manager of Design'
            color='#0096FF'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={empty}
            name='Kezia Aisyah'
            major='(TK’22)'
            title='Manager of Social Media'
            color='#0096FF'
          />
        </div>
      </div>

      {/* Academics */}
      <div className='mt-20'>
        <Organogram
          image={DeputyAcademics}
          name='Ignatius Bima'
          major='TME’21)'
          title='Deputy Vice President of Academics'
          color='#5D3FD3'
        />
      </div>
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorEducations}
            name='Inggar Pratiwi'
            major='(MS’22)'
            title='Director of Education & Curriculum'
            color='#5D3FD3'
          />
          <Organogram
          image={ViceDirectorEducations}
          name='Delon Davidson'
          major='(BM’22)'
          title='Vice Director of Education & Curriculum'
          color='#5D3FD3'
        />
        </div>
        <div className='gap-1 flex flex-col justify-center'>
          <Organogram
            image={DirectorAcademics}
            name='Roby Sitepu'
            major='(MS’21)'
            title='Director of Academics Unit'
            color='#5D3FD3'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={DirectorCommunity}
            name='Rafi Rabbani'
            major='(EP’21)'
            title='Director of Community Development'
            color='#5D3FD3'
          />
          <Organogram
          image={ViceDirectorCommunity}
          name='M. Fikra Emirul'
          major='(SI’22)'
          title='Vice Director of Community Development'
          color='#5D3FD3'
        />
        </div>
      </div>
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={ManagerProduct}
            name='Fariq Fauzi'
            major='(MS’21)'
            title='Manager of Product'
            color='#5D3FD3'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={empty}
            name='Zidan Fikri'
            major='(GL’21)'
            title='Manager of Research'
            color='#5D3FD3'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={ManagerCampaign}
            name='Richika Tiera'
            major='(PG’21)'
            title='Manager of Campaign'
            color='#5D3FD3'
          />
        </div>
      </div>
      <div className='mt-10 flex flex-wrap w-full justify-center gap-5'>
        <div className='gap-1 flex flex-col'>
          <Organogram
            image={MentorResearch}
            name='Annisa Amelia'
            major='(BA’22)'
            title='Mentor of Research'
            color='#5D3FD3'
          />
        </div>
      </div>
    </div>
  )
}

export default Family
