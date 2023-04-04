import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import { IonApp } from '@ionic/react';

test('renders without crashing', async () => {
  const { baseElement } = render(<IonApp><Home /></IonApp>);
  expect(baseElement).toBeDefined();
  
  const button = screen.getByTestId('open-modal-button');
  await button.click();
  
  const modal = screen.getByTestId('modal-element');
  console.log(modal)
});
