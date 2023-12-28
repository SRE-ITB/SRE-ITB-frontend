const Youtube: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-4/5 bg-green0">
      <iframe
        className="aspect-video w-[65%] mt-[5vw]"
        src="https://www.youtube.com/embed/H2t9jZBPlpA"
        title="SRE ITB Teaser"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          filter: 'drop-shadow(3px 5px 1px rgba(0, 0, 0, 0.25))',
          boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)'
        }}>
      </iframe>
      <div className='h-[10vw]'></div>
    </div>
  )
}

export default Youtube
