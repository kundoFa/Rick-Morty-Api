import React,{useState, useEffect} from 'react';
import useApi from '../../hooks/useApi';
import LiIten from './LiIten';


import "../css/Contents.css"
function ContentRes() {


	return (
		<div className='ContentRes'>
			{useApi().map(e=>(
				<LiIten key={e.id}
					pName={e.name}
					srcImg={e.image}
					pOrigen={e.origin.name}
					pStatus={e.status}
				/>
			))}
			


		</div>
	);
}

export default ContentRes;