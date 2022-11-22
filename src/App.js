import {useState, useEffect, useRef} from 'react'
import './App.css';
import {motion} from 'framer-motion'

import imagem1 from '../src/img/1.jpg'
import imagem2 from '../src/img/2.jpg'
import imagem3 from '../src/img/3.jpg'
import imagem4 from '../src/img/4.jpg'

const imagens = [imagem1, imagem2, imagem3, imagem4]

function App(){
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  
  
    return(
      <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div className='inner' drag="x" dragConstraints={{ right: 0, left: -width}}
        initial={{x: 100}}
        animate={{X: 0}}
        transition={{duration: 0.8}}
     >
          {imagens.map(imagem => (
            <motion.div className="item" key={imagem}>
              <img src={imagem} alt="Texto alt"/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>
      
    );
  }
  
  export default App;