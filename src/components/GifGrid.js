import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ category }) => {

	const { data: images, loading } = useFetchGifs(category); // Desestructuracion con renombrado

	return (
		<>
			<h3>{category}</h3>

			{(loading && ': Cargando...')}
			<div className="card-grid">
				{
					images.map(img => {
						return <GifGridItem key={img.id} {...img} /> // Spread de objeto
					})
				}
			</div>
		</>
	)
}
