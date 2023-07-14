import Link from 'next/link'

const Youtube: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-4/5 bg-green">
      <iframe
        className="aspect-video w-[60%]"
        src="https://www.youtube.com/embed/H2t9jZBPlpA"
        title="SRE ITB Teaser"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          filter: 'drop-shadow(3px 5px 1px rgba(0, 0, 0, 0.25))',
          boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)'
        }}>
      </iframe>
      <br />
      <Link href="https://www.youtube.com/embed/H2t9jZBPlpA">
        <a className="text-white text-base underline">SRE ITB TEASER</a>
      </Link>
      <div className='h-[15vw]'></div>
    </div>
  )
}

export default Youtube
