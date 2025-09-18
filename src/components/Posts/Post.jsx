import { useState } from "react";
import { Heart } from "lucide-react";
import styles from "./posts.module.css";
import Avatar from "../../assets/imagens/avatar.png"

export default function Post({ nome, imagem, humor, conteudo, curtidas }) {
  const [likes, setLikes] = useState(curtidas);
  const [hasLiked, setHasLiked] = useState(false);

  function handleLike() {
    if (hasLiked) {
      setLikes(likes - 1); // descurtir
      setHasLiked(false);
    } else {
      setLikes(likes + 1); // curtir
      setHasLiked(true);
    }
  }

  return (
    <div className={styles.postContainer}>
      {/* Coluna esquerda */}
      <div className={styles.colunaEsquerda}>
        <img src={Avatar} alt={nome} className={styles.profileImage} />
        <p className={styles.name}>{nome}</p>
        <button
          onClick={handleLike}
          className={`${styles.likeArea} ${hasLiked ? styles.liked : ""}`}
        >
          <Heart size={14} className={styles.likeIcon} />
          <span className={styles.likeCount}>{likes}</span>
        </button>
      </div>

      {/* Conteúdo */}
      <div className={styles.content}>
        <p className={styles.textBox}>{conteudo}</p>
        <p className={styles.humor}>Humor: {humor}</p>
      </div>

      {/* Coluna direita */}
      <div className={styles.colunaDireita}>
        <button>😊</button>
        <button>🔄</button>
        <button>💬</button>
        <button>↩️</button>
      </div>
    </div>
  );
}
