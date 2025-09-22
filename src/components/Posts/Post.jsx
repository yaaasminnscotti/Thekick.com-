import { useState, useRef, useEffect } from "react";
import styles from "./posts.module.css";
import { Plus, Heart } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

function Post() {
  const [showForm, setShowForm] = useState(false);
  const [post, setPost] = useState("");
  const [humor, setHumor] = useState("");
  const [nome, setNome] = useState("");
  const [posts, setPosts] = useState([]);
  const [showEmojiHumor, setShowEmojiHumor] = useState(false);

  const emojiHumorRef = useRef(null);

  // Fecha o emoji picker ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiHumorRef.current &&
        !emojiHumorRef.current.contains(event.target)
      ) {
        setShowEmojiHumor(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.trim() === "" || nome.trim() === "") return;

    const newPost = {
      id: Date.now(),
      text: post,
      humor,
      nome,
      likes: 0,
      liked: false,
    };

    setPosts([newPost, ...posts]);
    setPost("");
    setHumor("");
    setNome("");
    setShowForm(false);
  };

  const handleEmojiHumor = (emojiData) => {
    setHumor((prev) => prev + emojiData.emoji);
    setShowEmojiHumor(false);
  };

  const toggleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );
  };

  return (
    <div className={styles.container}>
      {!showForm && (
        <button
          className={styles.openButton}
          onClick={() => setShowForm(true)}
        >
          <Plus /> Novo post
        </button>
      )}

      {showForm && (
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Nome */}
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />

          {/* Campo principal */}
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="O que você está pensando?"
          />

          {/* Campo Humor */}
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <input
              type="text"
              value={humor}
              onChange={(e) => setHumor(e.target.value)}
              placeholder="Humor: "
              style={{ flex: 1 }}
            />
            <div ref={emojiHumorRef}>
              <button className={styles.emojis}
                type="button"
                onClick={() => setShowEmojiHumor(!showEmojiHumor)}
                style={{ marginLeft: "10px" }}
              >
                😃
              </button>
              {showEmojiHumor && (
                <div style={{ position: "absolute",}}>
                  <EmojiPicker onEmojiClick={handleEmojiHumor} />
                </div>
              )}
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancelar
            </button>
            <button type="submit">Publicar</button>
          </div>
        </form>
      )}

      <div className={styles.feed}>
        {posts.map((p) => (
          <div key={p.id} className={styles.postContainer}>
            {/* Sidebar com nome e avatar */}
            <div className={styles.sidebar}>
              <img
                src="https://via.placeholder.com/80"
                alt="avatar"
                className={styles.avatar}
              />
              <div className={styles.nome}>{p.nome}</div>
              <div
                className={styles.likes}
                onClick={() => toggleLike(p.id)}
              >
                <Heart
                  className={p.liked ? styles.heartActive : styles.heart}
                  size={20}
                />
                {p.likes}
              </div>
            </div>

            {/* Conteúdo */}
            <div className={styles.content}>
              <div className={styles.balao}>{p.text}</div>
              {p.humor && (
                <div className={styles.humor}>
                  <b>Humor:</b> {p.humor}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;