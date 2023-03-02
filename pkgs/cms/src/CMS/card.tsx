import React, { useState, useMemo } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { Image } from '@d2xyz/ui';
import type { CMSAuthor } from '../types';
import { CARD_IMAGE_HEIGHT, CARD_TEXT_HEIGHT, CARD_WIDTH } from '../../cfg';

export interface CMSContentCardProps {
  title: string;
  img: string;
  date: string;
  description?: string;
  author?: CMSAuthor;
}

export const CMSContentCard = ({
  title,
  img,
  date,
  description,
  author,
}: CMSContentCardProps) => {
  const [hover, hoverSet] = useState<boolean>(false);
  const scale = useMemo(() => {
    return hover ? 1.25 : 1;
  }, [hover]);

  return (
    <div
      onMouseEnter={() => hoverSet(true)}
      onMouseLeave={() => hoverSet(false)}
    >
      <Paper sx={{ maxWidth: CARD_WIDTH }}>
        <Box>
          <Box
            textAlign='center'
            sx={{
              height: CARD_IMAGE_HEIGHT,
              width: CARD_WIDTH,
              overflow: 'hidden',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
            }}
            mx='auto'
          >
            <Image
              src={img}
              alt={title}
              title={title}
              responsive
              sx={{
                objectFit: 'cover',
                transform: `scale(${scale})`,
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>
          <Box
            px={1}
            sx={{
              height: CARD_TEXT_HEIGHT,
              overflow: 'hidden',
            }}
          >
            <Typography variant='caption' color='textSecondary'>
              {dayjs(date).format(`DD MMM 'YY`)}
            </Typography>
            <Typography
              variant='subtitle2'
              component='h1'
              sx={{ fontWeight: 'bold' }}
            >
              {title}
            </Typography>
            {author && (
              <Box pt={0.5}>
                <Grid container spacing={0.5} alignItems='center'>
                  <Grid item>
                    <Image
                      responsive
                      src={author.image?.asset?.url || ''}
                      sx={{ height: '30px', borderRadius: '100%' }}
                      title={author.name}
                      alt={author.name}
                    />
                  </Grid>
                  <Grid item>
                    <Box pb={0.8}>
                      <Typography
                        variant='body2'
                        sx={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {author.name}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
            <Typography
              variant='body2'
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};
