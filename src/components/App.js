import  Router  from './Router';
import '../App.css';
import Footer from '../Footer/footer';

function App() {
  return (
    <div className='wrapper'>
      <div className='contentWrapper'>
        <Router />
      </div>
        <Footer />
    </div>
  );
}

export default App;
