import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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

const PageHeader = ({addClassOpen, handleAddClassOpen, handleAddClassClose}) => {
    return (
        <Box sx={{ flexGrow: 1 }} mb={2}>
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Classroom - 18127217
                    </Typography>
                    <Button variant="outlined" color="primary" onClick={handleAddClassOpen}>Add a class</Button>
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
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default PageHeader;