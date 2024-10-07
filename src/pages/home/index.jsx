import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import RcPagination from "../../components/features/pagination";

export default function Home() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getDatas() {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");

      if (!res.ok) {
        throw new Error("Erro ao carregar");
      }

      const data = await res.json();
      setComments(data);
    }

    getDatas();
  }, []);

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <h2>Bem-vindo à Página Inicial!</h2>
        <p>Este é o conteúdo da página inicial.</p>
      </div>
      <RcPagination data={comments}>
        {(item) => (
          <div>
            <ul>
              <li>{item.postId}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.body}</li>
            </ul>
          </div>
        )}
      </RcPagination>
    </Layout>
  );
}
