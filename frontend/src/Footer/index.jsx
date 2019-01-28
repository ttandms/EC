import React from "react";
import style from "./style.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <a href="test" className={style.link}>
        利用規約
      </a>
      <a href="test" className={style.link}>
        プライバシーポリシー
      </a>
      <a href="test" className={style.link}>
        へルプ
      </a>
    </div>
  );
};

export default Footer;
