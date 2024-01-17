// Write your code here.
const ThumbnailItem = props => {
  const {thumbNailDetails, updateActiveImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbNailDetails

  const onClickImage = () => {
    updateActiveImage(id)
  }

  return (
    <li className="list-container">
      <button className="btn" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
