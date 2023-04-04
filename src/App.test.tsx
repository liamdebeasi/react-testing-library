import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Home from './pages/Home';
import { IonApp } from '@ionic/react';

beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
});

afterEach(() => {
  window.requestAnimationFrame.mockRestore();
});

test('renders without crashing', async () => {
  const { baseElement } = render(<IonApp><Home /></IonApp>);
  expect(baseElement).toBeDefined();
  
  const button = screen.getByTestId('open-modal-button');
  
  await act(async () => {
    await button.click();
  });
  
  const modal = screen.getByTestId('modal-element');
  console.log(modal.innerHTML)
});
