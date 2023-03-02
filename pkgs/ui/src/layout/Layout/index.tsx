import React, { type FC, type ReactNode } from 'react';
import { useTheme, Box, Container } from '@mui/material';
import { hexToRgb } from '@d2xyz/scripts';
import { Header } from '../Header';
import { Footer } from '../Footer';

export interface LayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  bgImage?: string;
  bgVideo?: string;
  bgAlpha?: string;
  bgGradient?: {
    from: string;
    to: string;
  };
  containerWidth?: 'lg' | 'xl' | 'md';
}

export const Layout: FC<LayoutProps> = ({
  header = <Header />,
  footer = <Footer />,
  children,
  bgImage,
  bgVideo,
  bgAlpha,
  bgGradient,
  containerWidth = 'lg',
}) => {
  const theme = useTheme();
  const { r, g, b } = hexToRgb(bgAlpha || theme.palette.primary.main);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {bgImage && (
        <>
          <Box
            sx={{
              minHeight: '100%',
              minWidth: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -50,
              backgroundImage: `url('${bgImage}')`,
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundPositionX: 'center',
              backgroundPositionY: 'top',
              backgroundSize: 'cover',
            }}
            display={{ xs: 'none', sm: 'block' }}
          />
          <Box
            sx={{
              minHeight: '100%',
              minWidth: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -50,
              backgroundImage: `url('${bgImage}')`,
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundPositionX: 'left',
              backgroundPositionY: 'top',
              backgroundSize: 'cover',
            }}
            display={{ xs: 'block', sm: 'none' }}
          />
        </>
      )}

      {bgVideo && (
        <Box
          sx={{
            minHeight: '100%',
            minWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -50,
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              objectFit: 'cover',
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: -0,
              left: 0,
            }}
          >
            <source src={bgVideo} />
          </video>
        </Box>
      )}

      {bgAlpha && (
        <Box
          sx={{
            minHeight: '100%',
            minWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -25,
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.81)`,
          }}
        ></Box>
      )}

      {bgGradient && (
        <Box
          sx={{
            minHeight: '100%',
            minWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -25,
            backgroundImage: `linear-gradient(to bottom right, ${bgGradient.from}, ${bgGradient.from}, ${bgGradient.to})`,
          }}
        ></Box>
      )}

      {header && (
        <Box sx={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
          {header || <Header />}
        </Box>
      )}

      {children && <Container maxWidth={containerWidth}>{children}</Container>}

      {footer && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
          }}
        >
          {footer || <Footer />}
        </Box>
      )}
    </Box>
  );
};
