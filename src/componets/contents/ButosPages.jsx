import React from 'react';
//! importacion del useApi() contexto de la peticion de "info"
import useApi from '../../hooks/useApi';

function ButosPages() {
	
	if(useApi()[1].prev !==null){
		return(
			<div className='ButosPages'>
				<button className='prev_page' onClick={ useApi()[2] }>
					Prev
				</button>
				<button className='next_page' onClick={ useApi()[2] } >
					Next
				</button>
				
			</div>
			
		)
	}else{
		return(
			<div className='ButosPages'>
				<button className='next_page' onClick={ useApi()[2] } >
					Next
				</button>
			</div>
		)
	}
	
}

export default ButosPages;