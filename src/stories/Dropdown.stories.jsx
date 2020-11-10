// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Dropdown from '../modules/shared/Dropdown/Dropdown';

export default {
  title: 'Dropdown Story',
  component: Dropdown,
  decorators: [withKnobs],
};

export function DropdownStory() {
  const name = 'name';
  const items = ['Item1', 'Item2', 'Item3'];
  const selected = ['Item1', 'Item3'];
  const onChange = () => { };
  return (
    <Dropdown name={name} items={items} selected={selected} onChange={onChange} />
  );
}
