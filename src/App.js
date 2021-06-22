import Banner2 from './components/Banner/Banner2';
import Banner1 from './components/Banner/Banner1';
import Banner3 from './components/Banner/Banner3';
import Header from './components/Header/Header';
import Home from './components/Home/HomeComp';
import Title from './components/Title';
import OurStory from './components/Our Story section/OurStory';
import DanceClasses from './components/Classes /Classes';
import PackageOffers from './components/Packages /PackageOffers';
import Teachers from './components/Teachers/Teachers';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import Classes from './components/Classes /Classes';

import PhotoWithShadow from './components/PhotoWithShadow';

function App() {
  return (
    <div className='container'>
      <Header />
      <Home />
      <Banner1 />
      <OurStory />
      <Title title='dance classes' />
      <DanceClasses />
      <Banner2 />
      <Title title='our prices' />
      <PackageOffers />
      <Title title='meet our teacher' />
      <Teachers />
      <Banner3 />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
