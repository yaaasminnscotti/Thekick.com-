import { useState } from "react";
import Post from "./Post";
import styles from "./postlist.module.css";

export default function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      nome: "Ana",
      imagem: "/assets/imagens/logo.png",
      humor: "😁",
      conteudo: "Primeiro dia na rede social!",
      curtidas: 3465,
    },
    {
      id: 2,
      nome: "Lucas",
      imagem: "/assets/imagens/lupa.png",
      humor: "🚀",
      conteudo: "React + Vite funcionando!",
      curtidas: 7378,
    },
    {
      id: 3,
      nome: "Geovana",
      imagem: "/assets/imagens/logo.png",
      humor: " ☕",
      conteudo: "Trabalhando e tomando café...",
      curtidas: 5465,
    },
  ]);

  const [novoPost, setNovoPost] = useState({
    nome: "",
    conteudo: "",
    humor: "😄",
  });

  function adicionarPost(e) {
    e.preventDefault();

    if (!novoPost.nome || !novoPost.conteudo) return;

    const post = {
      id: Date.now(),
      nome: novoPost.nome,
      imagem: "/assets/imagens/logo.png", 
      humor: novoPost.humor,
      conteudo: novoPost.conteudo,
      curtidas: 0,
    };

    setPosts([post, ...posts]);
    setNovoPost({ nome: "", conteudo: "", humor: "😄" });
  }

  return (
   
    <div className={styles.postListContainer}> <h1>Feed de posts</h1>
      {/* formulário de novo post */}
      <form onSubmit={adicionarPost} className={styles.novoPost}>
        <input
          type="text"
          placeholder="Seu nome"
          value={novoPost.nome}
          onChange={(e) => setNovoPost({ ...novoPost, nome: e.target.value })}
        />
        <textarea
          placeholder="O que você está pensando?"
          value={novoPost.conteudo}
          onChange={(e) =>
            setNovoPost({ ...novoPost, conteudo: e.target.value })
          }
        />
        <select
          value={novoPost.humor}
          onChange={(e) => setNovoPost({ ...novoPost, humor: e.target.value })}
        >
          <option>😄</option>
          <option>😢</option>
          <option>😡</option>
          <option>🤔</option>
          <option>😴</option>
        </select>
        <button type="submit">Publicar</button>
      </form>

      {/* lista de posts */}
      {posts.map((p) => (
        <Post key={p.id} {...p} />
      ))}
    </div>
  );
}
