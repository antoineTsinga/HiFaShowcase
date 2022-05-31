import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useItems } from "./../../common/collections";

const columns = [
  {
    field: "id",
    headerName: "id",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "estimatedPrice",

    headerName: "estimatedPrice",
    flex: 1,
  },
  {
    field: "category",
    headerName: "category",
    flex: 1,
  },
  {
    field: "genre",
    headerName: "genre",
    flex: 1,
  },
  {
    field: "geninGalleryre",
    headerName: "genre",
    flex: 1,
  },
  {
    field: "inCatalog",
    headerName: "genre",
    flex: 1,
  },
];

export default function ManageItems() {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);

  const {
    items: data,
    fetchItems,
    fetchItem,
    updateItem,
    loading: isLoading,
    count,
  } = useItems();

  // Some API clients return undefined while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [rowCountState, setRowCountState] = useState(count || 0);

  React.useEffect(() => {
    async function fetchData() {
      await fetchItems();
      setRowCountState((prevRowCountState) =>
        count !== undefined ? count : prevRowCountState
      );
    }
    fetchData();
  }, [count]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        rowCount={count}
        loading={isLoading}
        rowsPerPageOptions={[5]}
        pagination
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        columns={columns}
      />
    </div>
  );
}
