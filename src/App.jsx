
import './App.css'
import AirСonditionerDetails from './components/AirСonditionerDetails'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import RelatedProducts from './components/RelatedProducts'

function App() {

  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <AirСonditionerDetails />
      <Reviews />
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default App
