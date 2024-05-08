import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const TopMenuBar = () => {
  const start = <h4>algo Visualizer</h4>;
  const end = (
    <Button
      icon="pi pi-github"
      rounded
      text
      severity="secondary"
      aria-label="Bookmark"
    />
  );

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Example",
      icon: "pi pi-code",
    },
    {
      label: "Docs",
      icon: "pi pi-book",
    },
  ];
  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};

export default TopMenuBar;
