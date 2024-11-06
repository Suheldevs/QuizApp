import './App.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import questions from './Components/Questions';
import { useState } from 'react';
import { Navbar} from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
function App() {
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const [yourAnswers, setYourAnswers] = useState([]);


  const nextQuestion = (ans) => {
    // console.log(ans);
    setYourAnswers(yourAnswers => ([...yourAnswers, { question: questions[currentQuestion].question, ans, correctAnswer: questions[currentQuestion].answer }]));
    console.log(yourAnswers);
    if (currentQuestion < questions.length - 1) {
      SetCurrentQuestion(currentQuestion + 1);
      if (ans == questions[currentQuestion].answer) {
        setScore(score + 1);
      }



    }
    else {
      setShowScore(true)
    }


  }

  const answerShow = () => {
    setShowAnswer(showAnswer ? false : true);
  }
  return (
    <>
    <div className="d-flex justify-content-around bg-dark text-light fs-3">
        {/* First column: App name */}
        <Navbar.Brand className=''>suhel.dev</Navbar.Brand>

        {/* Second column: GitHub link with icon */}
        <a href="https://github.com/Suheldevs/QuizApp" target="_blank" className="text-white">
          <FaGithub size={24} />
        </a>
      </div>
      <Container className="d-flex justify-content-center align-items-center mt-4" style={{minHeight: '80vh' }}>
        <Row>
          <Col>
            <Card className="text-center" style={{ width: '100%' }}>
              {showScore ? (<Card.Title className='p-2 mt-3'>Your score is  <span className='fs-3 text-danger'>{score}</span> / {questions.length}
                <button className='btn bg-info mt-4 d-block text-center ms-4' onClick={answerShow}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
                {showAnswer ? (yourAnswers.map((data,index) => (
                  <Card className="text-center mt-2 mx-0 p-0">
                    <Card.Body>
                      <Card.Title>
                       Question {index+1} - {data.question}
                      </Card.Title>
                      <hr/>
                      <div className='d-flex justify-content-between mt-1'>
                      <div> <span>Currect Answer </span><button className='btn bg-success'>  {data.correctAnswer}</button></div>
                      <div>
                        <span>Your Answer </span>
                        <button className={`btn ${data.correctAnswer === data.ans ? "bg-success" : "bg-danger"}`}>
                          {data.ans}
                        </button>
                      </div>
                      </div>
                    </Card.Body>
                  </Card>))) : ""}




              </Card.Title>

              )
                :
                <Card.Body>
                  <Card.Title>Quiz Question <span className='fs-3'>{currentQuestion + 1}</span> / {questions.length}</Card.Title>
                  <Card.Text>{questions[currentQuestion].question}</Card.Text>
                  <div className='d-flex gap-2 justify-content-around'>
                    {questions[currentQuestion].options.map((ans, index) => (
                      <button className='btn bg-info' key={index} onClick={() => nextQuestion(ans)}>{ans}</button>
                    ))}
                  </div>
                </Card.Body>
              }
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
