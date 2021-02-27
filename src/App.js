import './App.css';
import { useState } from 'react'
function App() {
  const [expectedArrival, setExpectedArrival] = useState("");
  const [calculated, setCalculated] = useState(false);
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  const handleClick = () => {
    setExpectedArrival(randomDate(new Date(2021, 0, 1), new Date(2024, 0, 1)).toLocaleString())
    setCalculated(true);
  }



  return (
    <div className="App">
      <div className="logo">
        <h3 style={{ marginBottom: 15 }} >SAM CONVERTOR</h3>
        <img height="200" width="400" src="https://i.pinimg.com/originals/97/e9/79/97e979731beadb50be38e6e273ebfeef.gif" alt="" />
      </div>

      <div className="centered">
        <div className="center">


          <div className="champ">
            <p>Heure d'arrivée prévu</p>
            <input type="text" />
          </div>
          <div className="champ">
            <p>Pars chez son frère ?</p>
            <input type="checkbox" />
          </div>
          <div className="champ">
            <p>Va faire la prière ?</p>
            <input type="checkbox" />
          </div>
          <div className="champ">
            <p>Rah yseye9 ?</p>
            <input type="checkbox" />
          </div>
          <div className="champ">
            <p>Rah ydekhel les 207 ?</p>
            <input type="checkbox" />
          </div>
          <button onClick={handleClick} className="calculer">CALCULER !</button>
          {
            calculated ? <div className="champ">
              <p>Heure d'arrivée réel</p>
              <h3>{expectedArrival}</h3>
            </div> : <div></div>
          }
        </div>
      </div>
      <div className="peugeot">
        <img height="200" width="400" src="https://thumbs.gfycat.com/BruisedRecentChinchilla-size_restricted.gif" alt="" />
      </div>
    </div>
  );
}

export default App;
