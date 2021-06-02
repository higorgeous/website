import React from 'react';

const ItemGrid: React.FC<any> = (section) => {
  const { image, setActiveImage, colorDark } = section;
  const isDark = colorDark ? `dark` : ``;
  return (
    <h2
      key={image.id}
      data-fill={image.title}
      onFocus={() => setActiveImage(image.id)}
      onBlur={() => setActiveImage(image.id)}
      onMouseOver={() => setActiveImage(image.id)}
      onMouseOut={() => setActiveImage(null)}
      className={`outline hover ${isDark}`}
    >
      {image.title}
    </h2>
  );
};

export default ItemGrid;
