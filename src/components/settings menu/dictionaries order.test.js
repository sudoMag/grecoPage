import { fireEvent, render, screen } from '@testing-library/react';
import { DictionariesOrder } from './dictionaries order';

beforeEach(() => {
    const dictionaryNames = [
        'glosario de narnia',
        'dictionary for use word',
        'pepegrillo'
    ]

    render(
        <DictionariesOrder
            dictionaryNames={dictionaryNames}
            visible={true}
        />
    )
})

test('check names', () => {
    const dictionary1 = screen.getByText('glosario de narnia');
    const dictionary2 = screen.getByText('pepegrillo');
    expect(dictionary1).toBeInTheDocument();
    expect(dictionary2).toBeInTheDocument();
});