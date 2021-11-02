import React, { useState } from 'react';
import PageHeader from '../PageHeader'
import Classroom from '../Classroom'
import classroom from '../mock'

const ClassroomPage = () => {
    const [addClassOpen, setAddClassOpen] = useState(false);

    const handleAddClassOpen= () => {
        setAddClassOpen(true);
    }

    const handleAddClassClose = () => {
        setAddClassOpen(false);
    }

    let myClassroom = classroom;
    console.log(myClassroom);
    let pageContent = [];
    for (let i = 0; i < myClassroom.length; i++) {
        //console.log(myClassroom[i].name);
        pageContent.push(<Classroom key={i} classroomName={myClassroom[i].name}></Classroom>)    
    }

    return (
        <div>
            <PageHeader addClassOpen={addClassOpen} handleAddClassOpen={handleAddClassOpen} 
                handleAddClassClose={handleAddClassClose}></PageHeader>
            <div >{pageContent}</div>
        </div>
    );
}

export default ClassroomPage;