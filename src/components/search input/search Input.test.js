import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './input';

beforeEach(() => {
  const fakeFuntion = (text) => { 
    expect(text).toBe('pa');
    return ['pa', 'ta', 'pitas'];
  }

  const fakeSearch = (text) => {
    expect(text).toBe('papa');
  }

  render(
    <SearchInput
        searchMach={fakeFuntion}
        search={fakeSearch}
    />);
});

test('focus input events', () => {
    const Input = screen.getByPlaceholderText("Buscar");
    const searchList = screen.getByTestId('search-list');

    expect(Input).toBeInTheDocument();
    expect(searchList).toHaveStyle('opacity: 0');
    expect(searchList).toHaveStyle('transform: translate(0,-100%)');
    fireEvent.focusIn(Input);
    expect(searchList).toHaveStyle('opacity: 1');
    expect(searchList).toHaveStyle('transform: translate(0)');
    fireEvent.focusOut(Input);
    expect(searchList).toHaveStyle('opacity: 0');
    expect(searchList).toHaveStyle('transform: translate(0,-100%)');
});

test('view sugerencies', async () => {
  const Input = screen.getByPlaceholderText("Buscar");
  fireEvent.focusIn(Input);
  fireEvent.change(Input, {target: {value:'pa'}});
  const sugerencyToText = await screen.findByText('pitas');
  expect(sugerencyToText).toBeInTheDocument();
});

test('sugerencies autocomplete', () => {
  const Input = screen.getByPlaceholderText("Buscar");
  fireEvent.keyDown(Input, {key: 'ArrowRight'});
});

test('search', () => {
  const Input = screen.getByPlaceholderText("Buscar");
  fireEvent.keyDown(Input, {key: 'Enter'});
  expect(Input.value).toBe('');
});

test('check arrowsKey events', async () => {
  const Input = screen.getByPlaceholderText("Buscar");
  fireEvent.focusIn(Input);
  fireEvent.change(Input, {target: {value:'pa'}});
  fireEvent.keyDown(Input, {key: 'ArrowDown'});
  fireEvent.keyDown(Input, {key: 'ArrowDown'});
  const sugerencyTextParent = (await screen.findByText('ta'));
  expect(sugerencyTextParent).toHaveStyle('background-color: var(--bg-color-4)');
});

