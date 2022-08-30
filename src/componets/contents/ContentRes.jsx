import React,{useState, useEffect} from 'react';
import useApi from '../../hooks/useApi';
import LiIten from './LiIten';
import ButosPages from './ButosPages';


import "../css/Contents.css"
function ContentRes({funBut}) {


	return (
		<div className='ContentRes'>
			{useApi()[0].map(e=>(
				<LiIten key={e.id}
					pName={e.name}
					srcImg={e.image}
					pOrigen={e.origin.name}
					pStatus={e.status}
				/>
			))}
			

			<div className='box_pages_butos'>
				<ButosPages 
					val={useApi()[1]}
					fun={funBut}
				/>
			</div>
		</div>
	);
}

export default ContentRes;