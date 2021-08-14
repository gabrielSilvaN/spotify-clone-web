import styles from "./styles.module.scss";
import { FaSpotify } from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import { VscLibrary, VscCloudDownload } from "react-icons/vsc";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export default function Sidebar() {
  const playlists = [
    { title: "Brabas" },
    { title: "Músicas para estudar" },
    { title: "Músicas para relaxar" },
    { title: "Churrasco" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>
        <a href="#">
          <FaSpotify size={38} />
          <span>Spotify</span>
        </a>
      </div>

      <nav>
        <a href="#">
          <CgHome size={24} />
          <span>Início</span>
        </a>
        <a href="#">
          <RiSearchLine size={24} />
          <span>Buscar</span>
        </a>
        <a href="#">
          <VscLibrary size={24} />
          <span>Sua Biblioteca</span>
        </a>
      </nav>

      <div className={styles.options}>
        <a href="#">
          <BsFillPlusSquareFill size={24} />
          <span>Criar playlist</span>
        </a>

        <a href="#">
          <AiOutlineHeart size={24} />
          <span>Músicas curtidas</span>
        </a>
      </div>

      <div className={styles.playlists}>
        {playlists.map((playlist) => (
          <a key={playlist.title} href="#">
            {playlist.title}
          </a>
        ))}
      </div>

      <div className={styles.download}>
        <a href="#">
          <VscCloudDownload size={24} />
          <span>Instalar aplicativo</span>
        </a>
      </div>
    </aside>
  );
}
