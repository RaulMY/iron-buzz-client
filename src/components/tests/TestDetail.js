import React, {useState, useEffect} from 'react';
import TestCRUD from '../services/test-service';
import {useParams} from 'react-router-dom';


 const TestDetail = (props) => {
        const [score, updateScore] = useState(0);
        const [test, updateTest] = useState({});
        const {id} = useParams()
        const getTest = () => {
            const testService = new TestCRUD();
            testService.getById(id).then(res => updateTest(res))
        }

        useEffect(() => {
            getTest()
        }, [])
        
        return(
               <div>
                   <h3>{test.title}</h3>
                    <p>{test.description}</p>   
                </div>
        )
 }

 export default TestDetail;