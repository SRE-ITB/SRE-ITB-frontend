const VisionMission: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-around items-center py-10">
      <div
        className="h-4/5 w-4/5 flex flex-col justify-around items-center px-[8vw] py-[4vw]"
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.25) -2px -2px 12px, rgba(0, 0, 0, 0.25) 12px 12px 16px', // Adding drop shadow
          borderRadius: '10%',
        }}>
        <div className="flex flex-col justify-around items-center">
          <h5 className="text-[40px] md:text-[48px] font-semibold">Vision</h5>
          <div
            style={{
              marginTop: '5px',
              marginBottom: '20px',
              width: '150px',
              height: '15px',
              background: '#169470',
              borderRadius: '13px',
            }}></div>
          <p className="text-[18px] md:text-[28px] font-semibold text-center">
            SRE ITB as a renewable-energy-based community that will accommodate{' '}
            <p style={{ display: 'inline', color: '#169470' }}>
              youth's interests{' '}
            </p>
            and{' '}
            <p style={{ display: 'inline', color: '#169470' }}>
              maximize potential{' '}
            </p>
            to generate{' '}
            <p style={{ display: 'inline', color: '#169470' }}>
              real-world impact
            </p>
          </p>
        </div>
        <br />
        <br />
        <div className="flex flex-col justify-around items-center">
          <h5 className="text-[40px] md:text-[48px] font-semibold">Mission</h5>
          <div
            style={{
              marginTop: '5px',
              marginBottom: '20px',
              width: '150px',
              height: '15px',
              background: '#169470',
              borderRadius: '13px',
            }}></div>
          <ol className="list-disc text-justify text-[18px] md:text-[28px] font-semibold">
            <li>
              Enhancing{' '}
              <p style={{ display: 'inline', color: '#169470' }}>
                renewable energy
              </p>{' '}
              knowledge through basic and advance learning program
            </li>
            <li>
              Providing exclusive portfolio through{' '}
              <p style={{ display: 'inline', color: '#169470' }}>
                hands-on project
              </p>{' '}
              based on each individuals interests
            </li>
            <li>
              <p style={{ display: 'inline', color: '#169470' }}>
                Maximizing individuals skills
              </p>{' '}
              through various projects and development programs
            </li>
            <li>
              Building and maintaining{' '}
              <p style={{ display: 'inline', color: '#169470' }}>
                supportive internal relationship
              </p>{' '}
              to generate significant output
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
