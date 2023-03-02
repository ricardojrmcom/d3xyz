import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { Body2, H1, Caption, Subtitle2, Link, Image } from '@d2xyz/ui';
import { type CMSCollection } from '../types';
import { CMSContentCard } from './card';
import { CMSContentBody } from './body';

export interface CMSContentOverviewProps {
  item: CMSCollection;
  collection?: CMSCollection | null;
}

export const CMSContentOverview = ({
  item,
  collection,
}: CMSContentOverviewProps) => {
  const { pathname } = useRouter();
  const backLinkOpts = useMemo(() => {
    if (pathname.includes('/gallery')) {
      return {
        label: 'Gallery',
        link: '/gallery',
      };
    } else if (pathname.includes('/blog')) {
      return {
        label: 'Blog',
        link: '/blog',
      };
    }
    return {
      label: 'Content',
      link: '/content',
    };
  }, [pathname]);
  return (
    <Box p={1}>
      <Box>
        <Box pb={1}>
          {collection ? (
            <Subtitle2 sx={{ fontWeight: 'bold' }}>
              <Link href={backLinkOpts.link} decoration>
                {backLinkOpts.label}
              </Link>
              {' > '}
              <Link href={collection.link} decoration>
                {collection.title}
              </Link>
            </Subtitle2>
          ) : (
            <Subtitle2 sx={{ fontWeight: 'bold' }}>
              <Link href={backLinkOpts.link} decoration>
                {backLinkOpts.label}
              </Link>
            </Subtitle2>
          )}
        </Box>
        <H1>{item.title}</H1>
        <Caption color='textSecondary' gutterBottom>
          {dayjs(item.publishedAt).format(`DD MMM 'YY`)}
        </Caption>
        {item.author && (
          <Box pt={0.5}>
            <Grid container spacing={0.5} alignItems='center'>
              <Grid item>
                <Image
                  responsive
                  src={item.author.image?.asset?.url || ''}
                  sx={{ maxHeight: '30px', borderRadius: '100%' }}
                  title={item.author.name}
                  alt={item.author.name}
                />
              </Grid>
              <Grid item>
                <Box pb={0.8}>
                  <Body2
                    sx={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.author.name}
                  </Body2>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        {item.description && <Body2 paragraph>{item.description}</Body2>}
        <Box pt={2.1}>
          {item.body && <CMSContentBody item={item} />}
          {item.items && (
            <Grid
              container
              alignItems='center'
              justifyContent='center'
              spacing={2}
              py={2}
            >
              {item.items.map((i) => (
                <Grid item key={i._id}>
                  {i.link || i.external ? (
                    <Link
                      href={(i.link || i.external) as string}
                      external={!!i.external}
                      title={i.title}
                    >
                      <CMSContentCard
                        title={i.title}
                        description={i.description}
                        img={i.image?.asset.url}
                        date={i.publishedAt}
                      />
                    </Link>
                  ) : (
                    <CMSContentCard
                      title={i.title}
                      description={i.description}
                      img={i.image.asset.url}
                      date={i.publishedAt}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};
