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
import AddClassroomModal from '../AddClassroomModal'

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
                    <AddClassroomModal addClassOpen={addClassOpen} handleAddClassClose={handleAddClassClose}></AddClassroomModal>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default PageHeader;