import HistoryBackground from '@src/assets/Images/History/HistoryBackground.png'

const History: React.FC = () => {
  const divStyle = {
    backgroundImage: `url(${HistoryBackground.src})`,
    backgroundSize: '1550px 100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-auto min-h-screen font-[Montserrat-Medium]"
      style={divStyle}>
      <div className="flex flex-row text-center sm:text-[40px] text-[30px] font-[Montserrat-Bold] lg:mt-2 mt-[80px]">
        <div className="text-black">Our</div>
        <div className="" style={{ marginLeft: '10px', color: '#169470' }}>
          History
        </div>
      </div>
      <div
        style={{
          marginTop: '10px',
          width: '100px',
          height: '15px',
          background: '#169470',
          borderRadius: '13px'
        }}></div>
      <div className="sm:mx-[22vw] mx-[15vw] mt-[30px] mb-[50px] text-center sm:text-[20px] text-[16px]">
        <div className="" style={{ display: 'inline', color: '#169470' }}>
          SRE ITB
        </div>
        <div
          className=""
          style={{ display: 'inline', color: '#000000', fontWeight: 'normal' }}>
          , established in 2019,&nbsp;
        </div>
        <div className="" style={{ display: 'inline', color: '#169470' }}>
          pioneers the exploration and discussion of renewable energy among
          other SRE student chapter across Indonesia
        </div>
        <div
          className=""
          style={{ display: 'inline', color: '#000000', fontWeight: 'normal' }}>
          . As the first student chapter dedicated to this field, SRE ITB raises
          awareness, promotes research, and fosters innovation. Through
          seminars, workshops, research projects, and collaborations, SRE ITB
          inspires the next generation of engineers and researchers to shape a
          greener future for Indonesia and beyond.
        </div>
        <br />
        <br />
        <div
          className="sm:text-[32px] text-[25px]"
          style={{ display: 'inline', color: '#169470', fontWeight: 'bold' }}>
          #RElevatingSREITB
        </div>
      </div>
    </div>
  )
}

export default History
