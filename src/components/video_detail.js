import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return (
      <div className="video-detail col-sm-8 mt-4 text-center">
        Loading...
      </div>
    )
  }
  
  const url = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className="video-detail col-sm-8 mt-4">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="mt-3">
        <h4 className="mb-2">{video.snippet.title}</h4>
        <p className="mb-0">{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail