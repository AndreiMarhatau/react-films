// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import FooterContainer from '../modules/footer/FooterContainer/FooterContainer';

export default {
  title: 'Footer Story',
  component: FooterContainer,
  decorators: [withKnobs],
};

export function FooterStory() {
  return (
    <FooterContainer/>
  );
}
