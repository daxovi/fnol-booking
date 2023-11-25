import './App.css';
import Header from './Header';
import Booking from './Booking';

function App() {
  return (
    <div>
       <Header />
      <div className="title-bar">
        <div className="container">
        <h1><strong>23. reprezentační Ples Fakultní nemocnice Olomouc</strong>
        Rezervační systém
        </h1>


        </div>
      </div>
      <div class="container">
        <br />
        <Booking />
    </div>
      

    </div>
  );
}

export default App;
