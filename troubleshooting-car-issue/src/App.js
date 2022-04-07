import "./App.css";
import { useState } from "react";
import tree from "./data";

function App() {
  const [currentQuestion, setCurrentquestion] = useState(tree[0]);
  const [disabled, setDisabled] = useState(false);

  function handleClick(booleanValue) {
    if (booleanValue === true) {
      //find the current question with the value of properties "id" & "yes"
      const hasYes = tree.find(
        (question) => question.id === currentQuestion.yes
      );
      //set and display the current question
      setCurrentquestion(hasYes);

      //check if current question has the value "yes" and if it has (and there are no more questions) => disable buttons
      const hasAnotherQuestion = !hasYes.hasOwnProperty("yes");
      if (hasAnotherQuestion) {
        setDisabled(true);
      }
    }

    if (booleanValue === false) {
      //find the question with the same value of properties "id" & "no"
      const hasNo = tree.find((question) => question.id === currentQuestion.no);
      setCurrentquestion(hasNo);

      //check if current question has the value of "no", and if it has (and there are no more questions) => disable buttons
      const hasAnotherQuestion = hasNo.hasOwnProperty("no");
      if (!hasAnotherQuestion) {
        setDisabled(true);
      }
    }
  }

  return (
    <div className="App">
      <p>{currentQuestion.text}</p>
      <div className="btns">
        <button onClick={() => handleClick(true)} disabled={disabled}>
          Yes
        </button>
        <button onClick={() => handleClick(false)} disabled={disabled}>
          No
        </button>
      </div>
    </div>
  );
}

export default App;
