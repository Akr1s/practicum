import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import InputRes from './steps/InputRes';
import Misses from './steps/Misses';
import Average from './steps/Average';
import ResMiss from './steps/ResMiss';
import Results from './steps/Results';

const steps = [
    'Результати вимірювання',
    'Виявлення промахів',
    'Розрахунок середнього значення та СКВ',
    'Загальна похибка',
    'Результати',
];

export default function StepperWrapper() {
    const [activeStep, setActiveStep] = useState(0);
    const [data, setData] = useState([]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Box sx={{ margin: '20px 0' }}>
                {activeStep === 0 && <InputRes data={data} setData={setData} />}
                {activeStep === 1 && <Misses data={data} setData={setData} />}
                {activeStep === 2 && <Average data={data} setData={setData} />}
                {activeStep === 3 && <ResMiss data={data} setData={setData} />}
                {activeStep === 4 && <Results data={data} setData={setData} />}
            </Box>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
