import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div><button id="copy" class="buttons">Copy</button><button id="toggleBackGroundColor" class="buttons">Change Background Color</button><button id="changeTitle" class="buttons">Change Title</button><button id="deleteButton" class="buttons">Delete Last Instance</button><section class="all">
        <header class="name">
          <h1 id="mainTitle" class="title">Ethan Chen</h1>
        </header>
        <section class="content">
          <img src="https://media.ed.edmunds-media.com/toyota/tacoma/2020/oem/2020_toyota_tacoma_crew-cab-pickup_trd-off-road_fq_oem_1_1600.jpg" width />200px>

          <p>
            The image above is a Tacoma pickup truck made by the Japanese automaker Toyota. Toyota has been making the Tacoma pickup truck since 1995. The Tacoma has two engines options: 2.7-liter 4-Cylinder and the 3.5-liter V6. It has a miles per gallon of 20 in the city and 23 on the highway.
          </p>
          < />!--<a href="https://hax.psu.edu/"> -->
            <button id="detailBtn" class="detailButton">Detail</button>
          </a>
        </section>

      </section></>



  );
}

export default App;
