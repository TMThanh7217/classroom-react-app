import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import classroom from '../mock'

const classNameColor = grey[50];

const Classroom = ({classroomName}) => {
    return (
        <Box sx={{ display: 'inline-grid',
            width: 300,
            height: 200,
            margin: 2,
            backgroundColor: 'primary.main',
            }}>
            <Typography variant="h6" component="div" sx={{ color: classNameColor }} align={'center'}>
                {classroomName}
            </Typography>
        </Box>
    );
}

export default Classroom;