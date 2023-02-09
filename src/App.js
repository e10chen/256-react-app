import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <><div class="buttons">
  <button class="copy" >Copy</button>

  <button class="toggleBackGroundColor" >Change Background Color</button>

  <button class="changeTitle">Change Title</button>

  <button class="deleteButton">Delete Last Instance</button>

</div>

<div class="all">
  <h1 class="title">
    Ethan Chen
  </h1>
  
  <img class ="picture" src = "https://media.ed.edmunds-media.com/toyota/tacoma/2020/oem/2020_toyota_tacoma_crew-cab-pickup_trd-off-road_fq_oem_1_1600.jpg"/>
    
  <p class ="text">
The image above is a Tacoma pickup truck made by the Japanese automaker Toyota. Toyota has been making the Tacoma pickup truck since 1995. The Tacoma has two engines options: 2.7-liter 4-Cylinder and the 3.5-liter V6. It has a miles per gallon of 20 in the city and 23 on the highway.
  </p>
    <button class="detailButton">      
      Detail
  </button>

</div>
  </>
  );
}

export default App;
