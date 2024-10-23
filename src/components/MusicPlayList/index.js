import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicPlayList = props => {
  const {eachSong, clickDelete} = props
  const {id, imageUrl, name, genre, duration} = eachSong

  const onClickDelete = () => {
    clickDelete(id)
  }

  return (
    <li className="list">
      <div className="left">
        <img className="img" src={imageUrl} alt="track" />
        <div className="name-genre-con">
          <p className="nam">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="right">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          onClick={onClickDelete}
          className="button"
          type="button"
        >
          <AiOutlineDelete className="delete" size={18} />
        </button>
      </div>
    </li>
  )
}
export default MusicPlayList
