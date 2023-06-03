import React from "react";
import styles from "./practice1.module.css";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaRegHeart,
  FaReply,
} from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
// import { RiReplyLine } from 'react-icons/Ri';
// import { FaTwitterSquare } from 'react-icons/AiFill';

function Practice1() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
          alt="Person Img"
          className={styles.img}
        />
        <h2 className={styles.txt1}>Coding Lab</h2>
        <h3 className={styles.txt2}>YouTuber & Blogger</h3>
        <div className={styles.icons}>
          <FaFacebook className={styles.fb} />
          <FaTwitterSquare className={styles.twitter} />
          <FaInstagramSquare className={styles.insta} />
          <FaYoutubeSquare className={styles.utube} />
        </div>
        <div className={styles.btns}>
          <button className={styles.btn}>Subscribe</button>
          <button className={styles.btn}>Message</button>
        </div>
        <div className={styles.like}>
          <FaRegHeart />
                <a className={styles.hrt}>60k</a>
          <FiMessageCircle />
          <a className={styles.msg}>20k</a>
          <FaReply className={styles.rply}/>
          12k
        </div>
      </div>
    </div>
  );
}

export default Practice1;
