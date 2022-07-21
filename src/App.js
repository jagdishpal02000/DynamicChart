import "./styles.css";
import { useState } from "react";
import ChartBox from "./ChartBox";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [chartType, setChartType] = useState("-1");
  const [labelsInput, setLabelsInput] = useState([{ label: "", data: "" }]);
  const [showChart, setShowChart] = useState(false);
  const [DATA, setDATA] = useState([]);
  const [LABELS, setLABELS] = useState([]);
  const [component, setComponent] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleChangeLabel = (index, event) => {
    let data = [...labelsInput];
    data[index][event.target.name] = event.target.value;
    setLabelsInput(data);
  };

  const addLabelFields = () => {
    let newfield = { label: "", data: "" };
    setLabelsInput([...labelsInput, newfield]);
  };

  const createChart = () => {
    const labels = labelsInput.map((i) => i.label);
    const data = labelsInput.map((i) => i.data);
    setDATA(data);
    setLABELS(labels);
    setShowChart(true);
    setIsOpen(false);
    setComponent(<ChartBox TYPE={chartType} DATA={DATA} LABELS={LABELS} />);
  };

  return (
    <div className="App">
      <header>
        <button onClick={showModal} className="btn btn-outline-success">
          Create Chart
        </button>
      </header>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Display Data In Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="select_chart">Chart Type</label>
          <select
            onInput={(e) => {
              setChartType(e.target.value);
            }}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="-1" disabled selected>
              Select...
            </option>
            <option value="1">Line Chart</option>
            <option value="2">Bar Chart</option>
            <option value="3">Donut Chart</option>
          </select>
          <p>Enter Labels</p>
          {labelsInput.map((item, index) => {
            return (
              <>
                <input
                  name="label"
                  placeholder="label"
                  value={item.label}
                  onChange={(event) => handleChangeLabel(index, event)}
                />
                <input
                  name="data"
                  placeholder="data"
                  value={item.data}
                  onChange={(event) => handleChangeLabel(index, event)}
                />
              </>
            );
          })}
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={addLabelFields}
          >
            Add More Labels
          </button>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-danger" onClick={hideModal}>
            Cancel
          </button>
          <button className="btn btn-outline-primary" onClick={createChart}>
            Create
          </button>
        </Modal.Footer>
      </Modal>
      {showChart && component}
    </div>
  );
}
