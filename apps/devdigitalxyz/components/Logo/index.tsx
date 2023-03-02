import { Image, LinkButton } from '@d2xyz/ui';

export const Logo = () => (
  <LinkButton href='/' title='D2XYZ'>
    <Image
      title='D2XYZ'
      alt='D2XYZ'
      src='/static/img/devdigitalxyz-logo-alpha.png'
      sx={{ height: '39px' }}
    />
  </LinkButton>
);
