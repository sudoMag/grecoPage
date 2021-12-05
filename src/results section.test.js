import { fireEvent, render, screen } from '@testing-library/react';
import ResultsSection from './results section';

beforeEach(() => {
    const fakeTitle = 'pared'
    const fakeResults = {
        'dictionary1': 'es dura y duele cuando chocas con ella',
        'dictionary2': 'es lo que saltan los ladrones',
        'dictionary3': 'hace que el perro del vecino no te muerda'
    };
    const fakeWorsToMark = [
        'ladrones', 'saltan'
    ]

    const fakeDefinition = {
        'ladrones': 'personas que roban patos',
        'saltan': 'accion de salto'
    }
    
    const fakeSearch = (text) => {
        expect(text).toBe('ladrones');
    }

    render(
        <ResultsSection
              searching={false}
              resultsList={fakeResults} 
              showResults={true}
              searchText={fakeTitle}
              blur={false}
              showErrorLogo={false}
              wordsMarking={'true'}
              toMarkList={fakeWorsToMark}
              reSearch={fakeSearch}
              referencesDefinition={fakeDefinition}
        />);
});

test('check results', () => {
    const titleText = screen.getByText('pared');
    const result1Text = screen.getByText('es dura y duele cuando chocas con ella');
    const result2Text = screen.getByText('hace que el perro del vecino no te muerda');
    expect(result1Text).toBeInTheDocument();
    expect(result2Text).toBeInTheDocument();
});

test('word marking', () => {
    const [
        wordMarked, 
        viewMoreButton
    ] = screen.getAllByText('ladrones');
    const descriptionContent = screen.getByText('personas que roban patos');
    expect(descriptionContent.parentNode).toHaveStyle('display:none');
    fireEvent.click(wordMarked);
    expect(descriptionContent.parentNode).toHaveStyle('display:flex');
    expect(descriptionContent).toBeInTheDocument;
    fireEvent.doubleClick(wordMarked);

});