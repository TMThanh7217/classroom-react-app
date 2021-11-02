import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddClassroomModal = ({addClassOpen, handleAddClassClose}) => {
    return (
            <Modal
                open={addClassOpen}
                onClose={handleAddClassClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a classroom
                    </Typography>
                    <TextField fullWidth id="standard-basic" label="Classroom's name" variant="standard" />
                    <Stack sx={{ mt: 2 }} direction="row" spacing={2}>
                        <Button color="primary" variant="contained">Create</Button>
                        <Button onClick={handleAddClassClose}>Cancel</Button>
                    </Stack>
                </Box>
            </Modal>
    );
}

export default AddClassroomModal;