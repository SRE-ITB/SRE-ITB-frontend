

export default function OurTeam() {
  return (
    <div className='w-screen flex flex-col items-center p-5 overflow-x-hidden'>
      <p className='font-semibold text-4xl '>Our <span className='text-greenSRE100'>Team</span></p>
      <div className='h-3 w-[100px] bg-greenSRE100 rounded-full mt-2'></div>
      <p className='text-center mt-8 w-[90vw] lg:w-[75vw] font-semibold'>
        Welcome to SRE ITB, <span className='text-greenSRE100'>a dynamic community dedicated to renewable energy. </span>
        As a vibrant hub, we provide a platform for young individuals to pursue 
        their interests and <span className='text-greenSRE100'>unleash their full potential to create tangible real-world impact. </span> 
        By nurturing a passion for renewable energy, <span className='text-greenSRE100'>SRE ITB empowers the youth to be catalysts of change </span>, 
        harnessing the transformative power of sustainable practices.
      </p>
      {/* CARD */}
      <div className='mt-8 flex flex-col md:flex-row md:gap-x-4 text-center justify-center items-center gap-y-4'>
        <div className='bg-green rounded-[10px] text-white flex items-center justify-center w-[75vw] md:w-[45vw] lg:max-w-[400px]'>
          <div className='rounded-[10px] p-4 bg-greenSRE100 flex flex-col items-center justify-center m-2 md:h-[250px]'>
            <p className='font-semibold text-2xl lg:text-3xl'>MANAGEMENT TEAM</p>
            <div className='my-4 w-[150px] h-[3px] bg-white'></div>
            <p className='font-semibold text-[14px]'>
              The management team of SRE ITB is composed of dedicated individuals who oversee the organization's 
              operations and drive its mission forward. The team also includes various directors responsible for 
              specific areas of focus within SRE ITB.
            </p>
          </div>
        </div>
        <div className='bg-green rounded-[10px] text-white flex items-center justify-center w-[75vw] md:w-[45vw] lg:max-w-[400px]'>
          <div className='rounded-[10px] p-4 bg-greenSRE100 flex flex-col items-center justify-center m-2 md:h-[250px]'>
            <p className='font-semibold text-2xl lg:text-3xl'>SRE MEMBER</p>
            <div className='my-4 w-[150px] h-[3px] bg-white'></div>
            <p className='font-semibold text-[14px]'>
              SRE ITB members are individuals who have participated in the learning programs provided by the SRE ITB
              focused on renewable energy. As SRE ITB members, they will engaged in various learning activities, 
              such as training sessions, and research projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}