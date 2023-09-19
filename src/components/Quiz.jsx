import React, { useState } from 'react'
import questions from './QuizData'
import './Quiz.css'

const Quiz = () => {

    const [score, setScore] = useState(0)
    const [CorrectAns, setCorrectAns] = useState(0)
    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
            setCorrectAns(CorrectAns + 1)
        }
    }
    return (
        <>
            <div className="app">
                <h2>ReactJS Quiz</h2>
                Score={score}
                <div className="container-fluid w-100 d-flex justify-content-center text-start">
                    <form action="">
                        {questions.map((e, i) => {

                            return (
                                <div className='mt-5'>
                                    <div className="question-section">
                                        <div className="ques-text">
                                            Q{i + 1}. {questions[i].questionText}
                                        </div>
                                    </div>
                                    <div className="answer-section">
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-secondary dropdown-toggle w-100"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Choose Answers
                                            </button>
                                            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                                {questions[i].answereOption.map((ans,i) =>

                                                    <li>
                                                        {/* <input type="radio" name="radio" id="radio" value={ans.answerText} />
                                                        <label htmlFor="label">{ans.answerText}</label> */}
                                                        <a
                                                            key={i}
                                                            onClick={() => handleAnswer(ans.isCorrect)}
                                                            className="btn dropdown-item">
                                                            {ans.answerText}
                                                        </a>
                                                    </li>
                                                )}

                                            </ul>
                                        </div>
                                    </div>
                                </div>)
                        })}

                        {/* Button trigger modal */}
                        <button
                            type="button"
                            className="btn btn-info mt-5"
                            data-mdb-toggle="modal"
                            data-mdb-target="#exampleModal"
                        >
                            Submit
                        </button>
                        {/* Modal */}
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#78abd3' }}>
                                            Total Score
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-mdb-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">Score: {score}/5 </div>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Quiz