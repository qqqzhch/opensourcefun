// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import HeroHome from '../partials/HeroHome';
import Newsletter from '../partials/Newsletter';
import Testimonials from '../partials/Testimonials';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Making it easier to recruit and find work for open source projects"
          description="Making it easier to recruit and find jobs for open source projects, most blockchain projects and web3 projects are open source, catering to the recruitment and job application needs of open source workers"
        />
      }
    >
      <section className="relative">
        <HeroHome></HeroHome>
        <FeaturesHome></FeaturesHome>
        <FeaturesBlocks></FeaturesBlocks>
        <Testimonials />
        <Newsletter></Newsletter>
      </section>
    </Main>
  );
};

export default Index;
