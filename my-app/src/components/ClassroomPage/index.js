import React, { useEffect, useState } from 'react';
import PageHeader from '../PageHeader'
import Classroom from '../Classroom'

const ClassroomPage = () => {
    const [addClassOpen, setAddClassOpen] = useState(false);
    const [classroomList, setClassroomList] = useState([]);

    const handleAddClassOpen = () => {
        setAddClassOpen(true);
    }

    const handleAddClassClose = () => {
        setAddClassOpen(false);
    }

    const listAllClassroomAPI = () => {
        fetch('http://localhost:9000/classrooms')
            .then(res => res.json())
            .then(res => {
                setClassroomList(res)
            })
            .catch(err=>{console.log(err);});
    }

    useEffect(() => {
        listAllClassroomAPI();
    });

    //console.log(classroomList);

    let pageContent = [];
    for (let i = 0; i < classroomList.length; i++) {
        pageContent.push(<Classroom key={i} classroomName={classroomList[i].name}></Classroom>) 
        //console.log(classroomList[i].name);
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