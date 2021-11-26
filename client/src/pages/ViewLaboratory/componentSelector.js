import Typography from '@mui/material/Typography';

export const componentSelector = ({ type, data }) => {
    switch (type) {
        case 'header': {
            return <Typography variant={`h${data.level}`}>{data.text}</Typography>;
        }
        case 'code': {
            return <code>{data.code}</code>;
        }
        case 'paragraph': {
            return <Typography paragraph={true}>{data.text}</Typography>;
        }
        default:
            return <p>Error getting element</p>;
    }
};
