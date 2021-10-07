import ReactDataTable from "react-data-table-component";
import { useMemo, useCallback } from "react";
import './App.css';

const columns = [{
  name: "c1",
  selector: "c1"
}];

const data = [{
  c1: "data",
}];

const SRC = (props) => {
  console.log("SRC props", props);
  return <div>check!</div>
};

function App() {
  const onRowSelect = useCallback((...args) => {
    console.log("useCallback ", args)
  }, []);
  const SRCProps = useMemo(() => ({
    onSelect: onRowSelect,
  }), [onRowSelect]);
  const SRCProps2 = useMemo(() => ({
    onSelect: onRowSelect,
    onSelect2: onRowSelect,
  }), [onRowSelect]);
  const SRCProps3 = useMemo(() => ({
    onSelect1: onRowSelect,
    onSelect2: onRowSelect,
    onSelect3: onRowSelect,
  }), [onRowSelect]);
  return (
    <div className="App">
      <ReactDataTable
        columns={columns}
        data={data}
        selectableRows
        selectableRowsComponent={SRC}
        selectableRowsComponentProps={SRCProps} />
      <ReactDataTable
        columns={columns}
        data={data}
        selectableRows
        selectableRowsComponent={SRC}
        selectableRowsComponentProps={SRCProps2} />
      <ReactDataTable
        columns={columns}
        data={data}
        selectableRows
        selectableRowsComponent={SRC}
        selectableRowsComponentProps={SRCProps3} />
    </div>
  );
}

export default App;
