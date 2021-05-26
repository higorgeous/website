import React from 'react';

import { Video } from './styles';

const BackgroundVideo: React.FC<any> = ({ images }) => {
  const poster = images[0].file.url;
  const videoTypes = [`video/mp4`, `video/webm`];
  const videos = images.filter((video: any) =>
    videoTypes.includes(video.file.contentType),
  );
  return (
    <Video autoPlay playsInline loop muted poster={poster}>
      {videos.map((video: any) => (
        <source key={video.id} src={video.file.url} />
      ))}
    </Video>
  );
};

export default BackgroundVideo;
