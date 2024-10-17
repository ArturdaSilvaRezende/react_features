// PaginationComponent.jsx
import React, { useState } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const PaginationComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Função para lidar com a mudança de página
  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  // Função para lidar com a mudança de quantidade de itens por página
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Resetar para a primeira página ao mudar a quantidade de registros
  };

  return (
    <div>
      <div>
        Página {currentPage} de {Math.ceil(data.length / pageSize)}
      </div>
      <div>
        Mostrar{" "}
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>{" "}
        registros de {data.length}
      </div>
      <Pagination
        current={currentPage}
        total={data.length}
        pageSize={pageSize}
        onChange={onChangePage}
      />
    </div>
  );
};

export default PaginationComponent;
