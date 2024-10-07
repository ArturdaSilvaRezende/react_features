import { useEffect, useState } from "react";
import RcPagination from "../../../components/features/pagination";
import Layout from "../../../components/layout";
import * as C from "./style";

export default function RcPaginationPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDatas() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!res.ok) {
          throw new Error("Erro ao carregar");
        }

        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getDatas();
  }, []);

  return (
    <Layout>
      <C.RcPagination>
        {loading ? (
          <p>...carregando</p>
        ) : (
          <RcPagination data={todos}>
            {(item) => (
              <div>
                <h3>{item.title}</h3>
              </div>
            )}
          </RcPagination>
        )}
      </C.RcPagination>
    </Layout>
  );
}
