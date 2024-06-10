import React from 'react';
import AvatarImage from './AvatarImage';
import styles from './Avatar.module.css';

const Avatar = ({ name, src, ...props }) => {
  return (
    <div className={styles.avatar}>
      <AvatarImage src={src} alt={name} />
      {/* Additional content for the avatar, if needed */}
    </div>
  );
};

export default Avatar;
