import React, { useState } from 'react';
import QuestionCRUD from '../services/question-service';

const CreateQuestion = props => {

    const [ formState, updateFormState ] = useState({
        title: '',
        description: '',
        correctAnswer: ''
    })

    const [ options, updateOptions ] = useState([]);

    const [ optionValue, updateOptionValue ] = useState("");

    const questionService = new QuestionCRUD();

    const handleFormSubmit = e => {
        e.preventDefault();
        questionService.createQuestion(Object.assign({}, formState, {options}))
        updateFormState({
            title: '',
            description: '',
            correctAnswer: ''
        })
    }

    const handleChange = (event) => {  
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
    }

    const handleOptionChange = (event) => {  
        const { value } = event.target;
        updateOptionValue(value)
    }

    const addOption = () => {
        updateOptions([...options, optionValue])
        updateOptionValue("")
    }

    return (
        <div>
        <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={formState.title} onChange={ e => handleChange(e)}/>
                <label>Description:</label>
                <textarea name="description" value={formState.description} onChange={ e => handleChange(e)} />
                <label>New Option:</label>
                <input type="text" name="option" value={optionValue} onChange={ e => handleOptionChange(e)}/>
                <div onClick={addOption}>Add option</div>
                <select onChange={ e => handleChange(e)} name="correctAnswer">
                    {
                       options.map(option=><option value={option}>{option}</option>) 
                    }
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateQuestion