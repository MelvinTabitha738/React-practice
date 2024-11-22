import Header from './Header.jsx'
import Footer from './Footer.jsx'

import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Language from './Language.jsx'
import Hobbies from './assets/Hobbies/Hobbies.jsx'
function App() {
  return(
    //  we only have the capability of returning a single enclossing tag
    <>
   
    <Header/>
    <Card/>
    <Language/>
    {/* App is our parent component while Hobies is our child component */}
    <Hobbies name="webdevelopment" age={19} isProductive={true} />
    {/* if the value we are passing is not a string we enclose it in curleybraces
    
    */}
    <Button/>
    <Footer/>
    
    </>
  );
  
}

export default App
