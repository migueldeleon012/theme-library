import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@mui/material';
import LuxThemeProvider from '../components/ThemeProvider/ThemeProvider';

const stories = storiesOf('App Test', module);

stories.add('Button', () => {
  return (
    <Button variant="contained" color="primary">
      asdf
    </Button>
  );
});
