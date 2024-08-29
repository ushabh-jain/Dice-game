import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";

const GamePlay = () => {
  return (
    
    <Maincontainer>
     <div className="topsection">
     <TotalScore/>
     <NumberSelector/>
     </div>
    </Maincontainer>  
   
  );
};

export default GamePlay

const Maincontainer = styled.div`

   .topsection{
   display: flex;
   }


`


