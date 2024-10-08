import styled from "styled-components";
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import {Button,OutlineButton} from "../styled/Button"
import Rules from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumber) {
      setError("you have not selected any number");
      return;
    }
  
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);


    if(selectedNumber == randomNumber){
      setScore((prev)=>prev + randomNumber);
    } else{
      setScore(prev=>prev-2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <Maincontainer>
      <div className="topsection">
        <TotalScore score = {score} />
        <NumberSelector
        error={error}
        setError={setError}

          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules/>}
    </Maincontainer>
  );
};

export default GamePlay;

const Maincontainer = styled.main`
  padding-top: 70px;
  .topsection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }


.btns {
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10;
}
`;
