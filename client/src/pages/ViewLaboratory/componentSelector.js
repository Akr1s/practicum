import EditorCode from './components/EditorCode';
import EditorHeader from './components/EditorHeader';
import EditorList from './components/EditorList';
import EditorTable from './components/EditorTable';
import EditorParagraph from './components/EditorParagraph';
import EditorWarning from './components/EditorWarning';
import EditorQuote from './components/EditorQuote';
import EditorDelimiter from './components/EditorDelimiter';

export const componentSelector = ({ type, data }, key) => {
    switch (type) {
        case 'header': {
            return <EditorHeader key={key} data={data} />;
        }
        case 'code': {
            return <EditorCode data={data} />;
        }
        case 'paragraph': {
            return <EditorParagraph data={data} />;
        }
        case 'list': {
            return <EditorList key={key} data={data} />;
        }
        case 'table': {
            return <EditorTable key={key} data={data} />;
        }
        case 'warning': {
            return <EditorWarning key={key} data={data} />;
        }
        case 'quote': {
            return <EditorQuote key={key} data={data} />;
        }
        case 'delimiter': {
            return <EditorDelimiter key={key} />;
        }
        default:
            return <p key={key}>Error getting element</p>;
    }
};
