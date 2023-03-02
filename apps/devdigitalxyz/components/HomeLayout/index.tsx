import { Layout, Header, Footer } from '@d2xyz/ui';
import { Logo } from '../Logo';
import { APP } from '../../cfg/app';
import { Nav } from '../Nav';

export interface HomeLayoutProps {
  children?: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Layout
      bgVideo='static/vid/devdigitalxyz-bg.mp4'
      bgGradient={{
        from: '#000000ea',
        to: '#1d1c1fea',
      }}
      header={
        <Header transparent home={<Logo />}>
          <Nav />
        </Header>
      }
      footer={
        <Footer
          transparent
          copyrightMsg={APP.copyright}
          socials={{
            brandName: APP.brandName,
            github: true,
            twitter: true,
            instagram: true,
            facebook: true,
            linkedin: true,
            linkedinOverride: 'https://www.linkedin.com/company/devdigitalxyz',
          }}
        />
      }
    >
      {children}
    </Layout>
  );
};
