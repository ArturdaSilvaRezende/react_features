import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import Pagination from "rc-pagination";
import * as C from "./style";

export default function RcPagination({ data = [], children }) {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   async function getDatas() {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  //     if (!res.ok) {
  //       throw new Error("Erro ao carregar");
  //     }

  //     const data = await res.json();
  //     setTodos(data);
  //   }

  //   getDatas();
  // }, []);

  const [perPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(data.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return data.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <IoIosArrowBack />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <IoIosArrowForward />
        </button>
      );
    }
    return originalElement;
  };

  const handlePerPageChange = (e) => {
    PerPageChange(Number(e.target.value));
  };

  return (
    <>
      <C.Pagination>
        <Pagination
          className="pagination__data"
          showTotal={(total, range) => `Página ${range[0]} de ${total}`}
          onChange={PaginationChange}
          total={data.length}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        />

        <C.PaginationSelect>
          <p>Mostrar</p>
          <select value={size} onChange={handlePerPageChange}>
            <option value={10}>10 Linhas</option>
            <option value={25}>25 Linhas</option>
            <option value={50}>50 Linhas</option>
            <option value={100}>100 Linhas</option>
          </select>
          <p>de {data.length} Registros</p>
        </C.PaginationSelect>
      </C.Pagination>

      <div>
        {getData(current, size).map((item) => (
          <div key={item.id}>{children(item)}</div>
        ))}
      </div>
    </>
  );
}

RcPagination.propTypes = {
  children: PropTypes.node,
  data: PropTypes.node,
};
