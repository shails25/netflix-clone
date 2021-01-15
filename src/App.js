import './App.css';
import Row from './Row';
import request from './request';
import Banner from './banner';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {
        request.map((movie, i)=>{
          return <Row key={i} title={movie.title} fetchUrl={movie.url} isLarge={i === 0}/>
        })
      }
    </div>
  );
}

export default App;
