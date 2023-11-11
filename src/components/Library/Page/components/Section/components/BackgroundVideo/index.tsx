import React from 'react';

import { Video } from './styles';

const BackgroundVideo: React.FC<any> = ({ image, video }) => {
  const videoTypes = [`video/mp4`, `video/webm`];
  const videos = video.filter((source: any) =>
    videoTypes.includes(source.file.contentType),
  );
  return (
    <Video autoPlay playsInline loop muted poster={image.file.url}>
      {videos.map((source: any) => (
        <source key={source.id} src={source.file.url} />
      ))}
    </Video>
  );
};

export default BackgroundVideo;
