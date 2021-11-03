import React, { useEffect, useState } from 'react';
import PageHeader from '../PageHeader'
import Classroom from '../Classroom'
import { useFormik } from 'formik';

const ClassroomPage = () => {
    
    const localClassroomsURL = 'http://localhost:9000/classrooms';
    const herokuClassroomsURL = 'https://classroom-rest-api.herokuapp.com/classrooms';
    const developmentClassroomURL = herokuClassroomsURL; //change this to change the url

    const [addClassOpen, setAddClassOpen] = useState(false);
    const [classroomList, setClassroomList] = useState([]);

    const handleAddClassOpen = () => {
        setAddClassOpen(true);
    }

    const handleAddClassClose = () => {
        setAddClassOpen(false);
    }
    
    const listAllClassroomAPI = () => {
        fetch(developmentClassroomURL)
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

    // A custom validation function. This must return an object
    // which keys are symmetrical to our values/initialValues
    const validate = values => {
        const errors = {};
        if (!values.classroomName) {
          errors.classroomName = 'Required';
        }

        return errors;
    };

      
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            classroomName: '',
        },
        validate,
        onSubmit: (values, action) => {
            //alert(JSON.stringify(values, null, 2));

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            };
            
            fetch(developmentClassroomURL, requestOptions)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    alert(`Classroom created, id: ${res.id}`);
                    action.resetForm();
                })
                .catch(err=> console.log(err));
        },
    });
    

    let pageContent = [];
    for (let i = 0; i < classroomList.length; i++) {
        pageContent.push(<Classroom key={i} classroomName={classroomList[i].name}></Classroom>) 
        //console.log(classroomList[i].name);
    }

    return (
        <div>
            <PageHeader addClassOpen={addClassOpen} handleAddClassOpen={handleAddClassOpen} 
                handleAddClassClose={handleAddClassClose} formik={formik}></PageHeader>
            <div >{pageContent}</div>
        </div>
    );
}

export default ClassroomPage;