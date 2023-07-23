import Navbar from '@src/components/Navbar/Navbar';
import Jumbroton from '@src/contexts/Home/Jumbroton/Jumbroton';
import Description from '@src/contexts/Home/Description/Description';
import Carousel from '@src/contexts/Home/Activity/Activity';
import Youtube from '@src/contexts/Home/Youtube/Youtube';
import Footer from '@src/components/Footer/Footer';

const Landing: React.FC = () => {
  return (
    <div className="h-auto relative">
      <Navbar />
      <Jumbroton />
      <Description />
      <Carousel />
      <Youtube />
      <Footer />
    </div>
  );
};

export default Landing;
