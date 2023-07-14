import Link from 'next/link';

const Youtube: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-4/5 bg-green">
      <iframe
        className="aspect-video w-1/2 lg:w-2/5 md:w-3/5"
        src="https://www.youtube.com/embed/H2t9jZBPlpA"
        title="SRE ITB Teaser"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <br />
      <Link href="https://www.youtube.com/embed/H2t9jZBPlpA">
        <a className="text-white text-base underline">SRE ITB TEASER</a>
      </Link>
    </div>
  );
};

export default Youtube;
