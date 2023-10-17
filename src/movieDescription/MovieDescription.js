import './styles.css';

export const MovieDescription = ({ img, alt, description }) => {
  return (
    <div className='description-container'>
      <img src={img} alt={alt} />

      {description}
    </div>
  )
}