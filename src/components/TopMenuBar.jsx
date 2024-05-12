import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const TopMenuBar = () => {
  const navigate = useNavigate();
  const start = <h4>algo Visualizer</h4>;
  const end = (
    <Button
      icon="pi pi-github"
      rounded
      text
      severity="secondary"
      aria-label="Bookmark"
      onClick={() =>
        window.open(
          `https://github.com/md-imran97/AlgorithmVisualizer`,
          "_blank"
        )
      }
    />
  );

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Example",
      icon: "pi pi-code",
      command: () => {
        navigate("/example");
      },
    },
    {
      label: "Docs",
      icon: "pi pi-book",
      command: () => {
        navigate("/docs");
      },
    },
  ];
  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};

export default TopMenuBar;
