import Footer from './Footer';
import Header from './Header';
import ItemListContainer from './itemListContainer';
import Main from './Main';

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <ItemListContainer 
      greeting="Argentina Campeon del mundo! ***"
      />
      <Footer/>


    </>
  )
}

export default App;
