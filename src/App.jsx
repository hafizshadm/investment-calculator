import { useState } from "react"
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifies, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifies]: +newValue
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid duration.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>

  )
}

export default App
