import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const classes = {
    text: { margin: '10px 0' },
    input: { minWidth: '400px', padding: '5px' },
};

export default function ResMiss() {
    return (
        <Box>
            <Typography sx={classes.text}>
                Для знаходження загальної похибки необхідні наступні величини:
            </Typography>
            <TextField sx={classes.input} variant="outlined" label="Довірча імовірність" required />
            <TextField
                sx={classes.input}
                variant="outlined"
                label="Ціна поділки приладу"
                required
            />
            <Box sx={{ margin: '10px 0' }}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Похибка приладу</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Відома" />
                        <FormControlLabel value="male" control={<Radio />} label="Розрахувати" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <TextField
                sx={classes.input}
                variant="outlined"
                label="Клас точності приладу"
                required
            />
            <TextField sx={classes.input} variant="outlined" label="Діапазон приладу" required />
            <Box>
                <Button sx={{ marginTop: '20px' }} variant="contained">
                    Розрахувати
                </Button>
            </Box>

            <Typography sx={classes.text}>
                Похибка визначається формулою:{' '}
                <TeX math="\Delta_{заг} = \sqrt{{\Delta_в}^2 + {\Delta_{пр}}^2 + {\Delta_{заок}}^2}" />
            </Typography>
            <Typography sx={classes.text}>
                Випадкова складова: <TeX math="\Delta_в = t_{pm} * \sigma = 2.4 * 0.167 = 0.4" />
            </Typography>
            <Typography sx={classes.text}>
                Похибка приладу:{' '}
                <TeX math="\Delta_{пр} = \frac {k * x_{гр}} 100 = \frac {1 * 30} {100} = 0.3" />
            </Typography>
            <Typography sx={classes.text}>
                Похибка заокруглення:{' '}
                <TeX math="\Delta_{заок} = \frac {P * h} 2 = \frac {0.95 * 0.1} 2 = 0.0475" />
            </Typography>
            <Typography sx={classes.text}>
                Загальна похибка:{' '}
                <TeX math="\Delta_{заг} = \sqrt{{0.4}^2 + {0.3}^2 + {0.0475}^2} = 0.252" />
            </Typography>
        </Box>
    );
}
