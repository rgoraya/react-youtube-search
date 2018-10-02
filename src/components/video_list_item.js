import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    return (
      <li className="list-group-item border-0 p-0 mb-2 list-group-item-action" onClick={ () => onVideoSelect(video) }>
        <div className="video-list row">
          <div className="col-5 pr-2">
            <img className="mw-100" src={video.snippet.thumbnails.medium.url} />
          </div>
          <div className="col-7 pl-2">
            <h6 className="video-title font-weight-light">{video.snippet.title}</h6>
          </div>
        </div>
      </li>
    )
}

export default VideoListItem;