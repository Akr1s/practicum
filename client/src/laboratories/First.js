import React, { useEffect, useState } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import Editor from '../components/Editor';
import Calculator from '../views/ViewLaboratory/Calculator';
import Loader from '../components/Loader';
import { LabsService } from '../services/labsService';

const id = '1';

const classes = {
    form: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
    },
    input: {
        padding: '5px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '20px',
    },
};

export default function First() {
    const [laboratory, setLaboratory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        LabsService.updateLaboratory(
            { name: laboratory.name, data: laboratory.data, lessonId: laboratory.lesson_id },
            laboratory.id,
        )
            .then(([laboratory]) => {
                setLaboratory(laboratory);
                setIsEditing(false);
            })
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        LabsService.getLaboratory(id)
            .then((data) => setLaboratory(data))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <Box
            component="section"
            sx={{ flexGrow: 1, padding: '20px' }}
            className={!isEditing ? 'view-laboratory' : ''}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Button
                        onClick={() => setIsEditing((prev) => !prev)}
                        variant="contained"
                        sx={{ marginBottom: '20px' }}
                    >
                        {isEditing ? 'Disable' : 'Enable'} editing
                    </Button>

                    {isEditing && (
                        <form style={classes.form}>
                            <TextField
                                id="laboratory-name"
                                label="Laboratory name"
                                variant="filled"
                                value={laboratory?.name}
                                required
                                onChange={(e) =>
                                    setLaboratory((data) => ({ ...data, name: e.target.value }))
                                }
                                error={!laboratory?.name}
                                helperText={!laboratory?.name ? 'Field is required' : ''}
                                sx={classes.input}
                            />

                            <Button
                                variant="contained"
                                disabled={!laboratory?.name}
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Update laboratory
                            </Button>
                        </form>
                    )}

                    <Editor
                        data={laboratory?.data}
                        handleDataChange={(data) => setLaboratory((item) => ({ ...item, data }))}
                        readOnly={!isEditing}
                    />
                    <Calculator />
                </>
            )}
        </Box>
    );
}
