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
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
