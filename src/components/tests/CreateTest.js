import React, { Fragment, useState, useEffect } from 'react';
import TestCRUD from '../services/test-service';
import QuestionCRUD from '../services/question-service';

const CreateTest = props => {

    const [ formState, updateFormState ] = useState({
        title: '',
        description: ''
    })

    const [ questionList, updateQuestionList ] = useState([]);

    const testService = new TestCRUD();

    const questionService = new QuestionCRUD();

    const handleFormSubmit = e => {
        e.preventDefault();
        testService.createTest(formState)
        updateFormState({
            title: '',
            description: ''
        })
    }

    const handleChange = (event) => {  
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
    }

    useEffect(() => {
        questionService.getAll().then(questions=>updateQuestionList(questions))
    }, [])

    return (
        <div>
        <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={formState.title} onChange={ e => handleChange(e)}/>
                <label>Description:</label>
                <textarea name="description" value={formState.description} onChange={ e => handleChange(e)} />
                <label>Preguntas:</label>
                {
                    questionList.map(question=><Fragment>
                        <input type="checkbox" name={question._id}/>
                        <label>{question.title}</label>
                        </Fragment>) 
                }
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateTest