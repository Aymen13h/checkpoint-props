

import './App.css';
import FullName from './Profile/Component/FullName';
import Profession from './Profile/Component/Profession';
import Bio from './Profile/Component/Bio';
import Image from './Profile/Component/Image';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
function App() {
  const [show] = useState(true);
  const Cristiano = {
    FullName: "Erling Braut Haaland",
    Bio: "Erling Braut Haaland (né Håland; born 21 July 2000) is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team. Considered one of the best players in the world, he is known for his speed, strength, and finishing.Coming through the youth system, Haaland played at senior level for Bryne's reserve and senior teams. He moved to Molde in 2017 (also playing for their reserve team), with whom he spent two seasons. Haaland signed with Austrian Bundesliga side Red Bull Salzburg in January 2019, winning two league titles and one Austrian Cup. In December 2019, he moved to German Bundesliga club Borussia Dortmund, where he won the DFB-Pokal in 2020–21. In 2022, he transferred to Manchester City for a fee of €60 million (£51.2 million).Haaland has won several individual awards and broken various records during his career. During the 2019–20 season with Salzburg, he became the first teenager to score in five consecutive UEFA Champions League matches. He was top scorer of the Champions League for the 2020–21 season. In 2020, Haaland won the Golden Boy award, while in 2021 he was named Bundesliga Player of the Season and was included in the FIFA FIFPro World11 in 2021. In the Premier League playing for Manchester City, he has also broken records, including becoming the quickest individual to score two and three hat-tricks, and becoming the first player in the league's history to score three successive hat-tricks in home games.Haaland has represented Norway at various youth levels. In the 2019 FIFA U-20 World Cup, he won the tournament's Golden Boot, after scoring a record nine goals in a single match. He made his senior international debut in September 2019.",
    Profession: "Footballer",
  };
  if (show) {
    return (
      <div className="App">
        <br />
        <FullName name={Cristiano} />
        <br />
        <Profession profession={Cristiano} />
        <br />
        <Bio Bio={Cristiano} />
        <br />
        <button style={{
          backgroundColor: "brown"
        }}
          onClick={() => alert(Cristiano.FullName)}>
          {"Profile"}
        </button>
        <br />
        <br />
        <Image>
          <img 
            src="https://www.mancity.com/meta/media/233jlh2j/microsoftteams-image-127.png?width=600"
            alt="haaland"/>
        </Image>
        <br />
      </div>
    );
  }
}
export default App;