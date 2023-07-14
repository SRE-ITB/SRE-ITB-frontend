import Image from 'next/image';

const Description = (): JSX.Element => {
    return (
    <div className='h-auto flex flex-col justify-center items-center font-[Montserrat] '>
        <div className='flex flex-row text-center text-[40px] font-bold'>
            <div className='text-black'>
                About
            </div>
            <div className='' style= {{marginLeft: '10px', color: '#169470'}}>
                SRE
            </div>
        </div>
        <div style={{
            marginTop: '10px',
            width: '100px',
            height: '15px',
            background: '#169470',
            borderRadius: '13px',
            }}
        ></div>
        <div className='mr-[55px] ml-[55px] mt-[30px] mb-[50px] text-center text-[24px]'>
            <div className='' style={{display: 'inline', color: '#169470', fontWeight:'bold'}}>
                Society of Renewable Energy (SRE) &nbsp;
            </div>
            <div className='' style={{display: 'inline', color:'#000000', fontWeight:'normal'}}>
                is a student-led organization that aims to spark student’s role in the field of new and renewable energy. SRE Institut Teknologi Bandung, the first SRE student chapter, was born in 2019 to accelerate Indonesia’s energy transition by providing some learning programs and project implementation for the members
            </div>
        </div>
    </div>
    )
}

export default Description