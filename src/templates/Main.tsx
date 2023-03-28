import type { ReactNode } from 'react';

import Footer from '@/partials/Footer';
import Header from '@/partials/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex min-h-screen flex-col overflow-hidden">
    {props.meta}
    <Header></Header>

    <main className="grow">{props.children}</main>

    <Footer></Footer>
  </div>
);

export { Main };
