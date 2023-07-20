import "./Die.css";

export default function Die() {
  const roll = Math.floor(Math.random() * 6);
  return <h3 className="Die">Die roll:{roll}</h3>;
}
