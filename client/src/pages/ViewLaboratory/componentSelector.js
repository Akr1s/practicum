export const componentSelector = ({ type, data }) => {
    switch (type) {
        case 'header': {
            return getHeader(data);
        }
        case 'code': {
            return <code>{data.code}</code>;
        }
        case 'paragraph': {
            return <p>{data.text}</p>;
        }
        default:
            return <p>Error getting element</p>;
    }
};

const getHeader = (data) => {
    switch (data.level) {
        case 1: {
            return <h1>{data.text}</h1>;
        }
        case 2: {
            return <h2>{data.text}</h2>;
        }
        case 3: {
            return <h3>{data.text}</h3>;
        }
        case 4: {
            return <h4>{data.text}</h4>;
        }
        case 5: {
            return <h5>{data.text}</h5>;
        }
        case 6: {
            return <h6>{data.text}</h6>;
        }
        default:
            return <p>Error getting heading</p>;
    }
};
