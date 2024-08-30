import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice"

const GamePlay = () => {
  return (
    
    <Maincontainer>
     <div className="topsection">
     <TotalScore/>
     <NumberSelector/>
     </div>
     <RoleDice/>
    </Maincontainer>  
   
  );
};

export default GamePlay

const Maincontainer = styled.main`
      padding-top:70px;
   .topsection{
   display: flex;
   justify-content: space-around;
   align-items: end;
   }


`


