import React, { ReactNode } from "react";
import styles from "./Avatar.module.scss";

interface IAvatar {
    children?: ReactNode;
  }

const Avatar = ({ children }: IAvatar) => {
  return <div className={styles.avatar}>{children}</div>;
};

export default Avatar;