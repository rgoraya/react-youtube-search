import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videos.map(function(video){ 
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video}/>
    ); })

  return (
    <div className="col-sm-4 mt-4">
      <ul className="list-group">
        {videoItems}  
      </ul>
    </div>
  )
}

export default VideoList;