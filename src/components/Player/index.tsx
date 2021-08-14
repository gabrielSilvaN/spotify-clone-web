import styles from "./styles.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgInpicture } from "react-icons/cg";
export default function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.left}>
        <img
          src="https://i.scdn.co/image/51d62ddf26c8e15ce7e8789419da664dd89f21a4"
          alt="Podcast cover"
        />

        <div className={styles.description}>
          <p>
            Fala Dev #21 - Estratégias de autenticação, JWT, OAuth, qual usar?
            aksdjfkasjdfk
          </p>
          <span>Podcast FalaDev</span>
        </div>

        <AiOutlinePlusCircle size={16} />

        <CgInpicture size={16} />
      </div>

      <div className={styles.center}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          praesentium tempore architecto doloremque blanditiis provident tempora
          eius sed magni voluptate, asperiores hic modi et, impedit, velit
          corporis maiores autem in.
        </p>
      </div>

      <div className={styles.right}>
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          praesentium tempore architecto doloremque blanditiis provident tempora
          eius sed magni voluptate, asperiores hic modi et, impedit, velit
          corporis maiores autem in.
        </p>
      </div>
    </div>
  );
}
