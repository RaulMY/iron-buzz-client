import React, { useState, useEffect } from 'react';
import TestCRUD from '../services/test-service';
import { Link } from 'react-router-dom'

const TestList = props => {

    const [ tests, updateTests ] = useState([])

    const testService = new TestCRUD();

    const getAllTests = () => {
        testService.getAll().then(res=>updateTests(res));
    }


    useEffect(() => {
        getAllTests()
    }, [])

    return (
        <div>
            {
                tests.map(test=>{
                    return <Link to={`/test/${test._id}`}>
                        <h4>{test.title}</h4>
                    </Link>
                })
            }
        </div>
    )
}

export default TestList