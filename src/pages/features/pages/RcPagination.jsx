import React, { useState, useEffect } from "react";
import PaginationComponent from "../../../components/features/pagination";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Postagens</h1>
      {loading ? <p>Carregando...</p> : <PaginationComponent data={data} />}
      {data.map((item) => (
        <div key={item.id}>
          <p>
            <span>{item.id}</span>
            <span>{item.title}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
