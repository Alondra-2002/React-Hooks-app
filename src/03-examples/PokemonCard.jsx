// Define el componente PokemonCard.
export const PokemonCard = ({ id, name, sprites = []}) => {
  
  // Retorna la estructura del componente.
  return (
      <section style={{ height: 200 }}> {/* Establece la altura del componente */}
          {/* Título del Pokemon con su número de identificación y nombre */}
          <h2 className='text-capitalize'>#{id} - { name } </h2>

          {/* Muestra las imágenes de los sprites del Pokemon */}
          <div>
              {
                  // Mapea cada sprite y renderiza una imagen para cada uno
                  sprites.map(sprite => (
                      <img key={ sprite } src={ sprite } alt={ name } />
                  ))
              }
          </div>
      </section>
  )
}
