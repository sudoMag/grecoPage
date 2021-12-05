import { render, screen } from '@testing-library/react';
import App from './App';


test('render app content', () => {
  const dictionaryNames = [
    'glosario de narnia',
    'dictionary for use word',
    'pepegrillo'
  ]

  render(
  <App/>);
  const AppElement = document.querySelector('#App');
  expect(AppElement).toBeInTheDocument();
  expect(AppElement).toHaveStyle('background-color : var(--bg-color-1)');
});