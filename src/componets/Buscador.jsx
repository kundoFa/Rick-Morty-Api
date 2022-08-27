import React from 'react'
import "./css/buscador.css"
function Buscador({funBuscar}) {
  return ( 
		<div className='Buscador'>
			<form onSubmit={funBuscar}>
				<input type="seach" placeholder='Buscar'/>
			</form>
		</div>
	);
}

export default Buscador;
