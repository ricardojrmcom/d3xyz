import type { FC } from 'react';
import { useTheme, Box, Grid } from '@mui/material';
import { Body2, Link, Caption } from '@d2xyz/ui';
import { Socials, type SocialsProps } from '../Socials';

export interface FooterProps {
  transparent?: boolean;
  copyrightMsg?: string;
  socials?: SocialsProps;
  justify?: 'center' | 'start' | 'end';
  webmaster?: string;
}

export const Footer: FC<FooterProps> = ({
  transparent,
  copyrightMsg,
  socials,
  justify = 'center',
  webmaster,
}) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: transparent
          ? 'transparent'
          : theme.palette.primary.main,
      }}
      className='text-white'
      pt={2}
      pb={3}
    >
      <Grid
        container
        alignItems='center'
        justifyContent={justify}
        style={{
          minHeight: '69px',
        }}
      >
        <Grid item xs={12}>
          <Box mb={1}>
            <Socials {...socials} />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Body2 sx={{ color: 'white' }}>{copyrightMsg}</Body2>
          </Box>
          {webmaster && (
            <Box textAlign='center'>
              <Link external href={webmaster}>
                <Caption sx={{ color: 'white' }}>Webmaster</Caption>
              </Link>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
