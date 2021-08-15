import styles from "./styles.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { CgInpicture } from "react-icons/cg";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { MdQueueMusic, MdDevicesOther } from "react-icons/md";
import { RiVolumeUpLine } from "react-icons/ri";

export default function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.left}>
        <img
          src="https://i.scdn.co/image/51d62ddf26c8e15ce7e8789419da664dd89f21a4"
          alt="Podcast cover"
        />

        <div className={styles.description}>
          <a href="#">
            Fala Dev #21 - Estratégias de autenticação, JWT, OAuth, qual usar?
          </a>
          <a href="#">Podcast FalaDev</a>
        </div>

        <AiOutlinePlusCircle size={16} />

        <CgInpicture size={16} />
      </div>

      <div className={styles.center}>
        <div className={styles.controls}>
          <BiSkipPrevious size={16} />
          <FaPlayCircle size={20} className={styles.playButton} />
          <BiSkipNext size={16} />
        </div>

        <div className={styles.sliderContainer}>
          <span>0:00</span>
          <input type="range" name="" id="" />
          <span>24:23</span>
        </div>
      </div>

      <div className={styles.right}>
        <MdQueueMusic size={16} />

        <MdDevicesOther size={16} />

        <div className={styles.containerVolume}>
          <RiVolumeUpLine size={16} />
          <input
            type="range"
            min="0"
            step="0.05"
            defaultValue="100"
            max="100"
          />
        </div>
      </div>
    </div>
  );
}
