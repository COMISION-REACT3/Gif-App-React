import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';
import './OneGif.css'

const variants = {
  //variante inicial: el gif comienza con opacidad de 0 y un tamaño reducido
  inicial:{
    opacity:0,
    scale:0.7,
  },
  
   // Variante animada: el GIF aparece con opacidad 1 y tamaño normal, 
  // con una transición que incluye un pequeño retraso basado en su índice.
  animate: ({index}) => ({
      opacity:1,
      scale:1,
      transition:{
        delay: index * 0.1 // Incrementa el retraso progresivamente según el índice.
      }
  })
}

function OneGif({gif, index}) {

  //crear una referencia para monitorear este elemento en tiempo real
  const ref = useRef(null);

   // Determina si el elemento ha sido visto en la pantalla. 
  // La animación se ejecutará solo una vez (`once: true`).
  const estaVisto = useInView(ref, {once:true});

  return (
      <motion.img
      drag
      ref={ref}
      initial="inicial"
      animate={estaVisto ? 'animate' : ''}
      variants={variants}
      custom={index}
      style={{
        filter:"grayscale(0) drop-shadow(0px 0px 0px rgba(0,0,0,0))"
      }}
      whileHover={
        {
          filter:"grayscale(1) drop-shadow(4px 4px 10px rgba(255,255,255,0.5))",
        }
      }   
      className="gif"
      src={gif.images.original.url}
      alt={gif.title}
      />
  )
}

export default OneGif