// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import PosterImg from '../modules/shared/PosterImg/PosterImg';

export default {
  title: 'PosterImg Story',
  component: PosterImg,
  decorators: [withKnobs],
};

export function PosterImgStory() {
  return (
    <PosterImg src='' alt='' />
  );
}
