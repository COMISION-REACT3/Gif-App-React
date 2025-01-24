import './Buscador.css'

function Buscador({valorInput,onChangeInput,handleOnSubmit}) {
  return (
   <form className='form-buscador' onSubmit={handleOnSubmit}>
      <label>Busca tu Gif 🚀</label>
      <div className='input-container'>
          <input className='buscador' value={valorInput} onChange={onChangeInput}/>
          <button type='submit'>🔎</button>
      </div>
   </form>
  )
}

export default Buscador