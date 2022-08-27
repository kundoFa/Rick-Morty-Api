import React from 'react';

function LiIten({pName,srcImg,pOrigen,pStatus}) {
	return (  
		<div className='LiIten'>
			<div className='box_liIten'>
				<img src={srcImg} />
				<div className='LiIten_box_info'>
					<p>{pName}</p>
					<p>
						Origen: {pOrigen}
					</p>
					<p>

						Estado: {pStatus}
					</p>
				</div>

			</div>
			


		</div>
	);
}

export default LiIten;