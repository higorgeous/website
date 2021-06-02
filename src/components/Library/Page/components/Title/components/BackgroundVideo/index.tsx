import React from 'react';

import { Video } from './styles';

const BackgroundVideo: React.FC<any> = ({ images }) => {
  const posterTypes = [`image/jpeg`, `image/png`, `image/webp`];
  const poster = images.filter((image: any) =>
    posterTypes.includes(image.file.contentType),
  );

  const videoTypes = [`video/mp4`, `video/webm`];
  const videos = images.filter((video: any) =>
    videoTypes.includes(video.file.contentType),
  );
  return (
    <Video autoPlay playsInline loop muted poster={poster[0].file.url}>
      {videos.map((video: any) => (
        <source key={video.id} src={video.file.url} />
      ))}
    </Video>
  );
};

export default BackgroundVideo;
