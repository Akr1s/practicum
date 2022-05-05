import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const classes = {
    text: { margin: '10px 0' },
    input: { minWidth: '400px', padding: '5px' },
    select: { minWidth: '400px' },
};

export default function InputRes({ data, setData }) {
    return (
        <Box>
            <form>
                <Typography sx={classes.text}>
                    Введіть результати вимірювань, розділені комою:
                </Typography>
                <TextField
                    sx={classes.input}
                    variant="outlined"
                    required
                    data={data}
                    onChange={(e) => setData(e.target.value.split(',').map(Number))}
                />

                <Typography sx={classes.text}>Виберіть критерій для виявлення промахів:</Typography>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Method"
                    sx={classes.select}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>критерій Ірвіна</MenuItem>
                    <MenuItem value={20}>критерій трьох сигм</MenuItem>
                    <MenuItem value={30}>критерій Романовського</MenuItem>
                </Select>
                <Accordion sx={{ width: '500px', marginTop: '20px', backgroundColor: '#adf' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Інофрмація про критерій</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Визначається формулою <TeX math="\mid \bar x - x_i \mid > 3\sigma" />
                        </Typography>
                        <Typography>
                            Використовується для результатів вимірювання, що розподілені по
                            нормальному закону
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </form>
        </Box>
    );
}
