import { useState } from "react";
import data from "../data";
import NewListItem from "./NewListItem";

export default function NewList() {
  const [dbPhones, setPhones] = useState(data);
  return (
    <div className="list">
      {dbPhones.map((phone) => (
        <NewListItem key={phone.id} {...phone} />
      ))}
    </div>
  );
}
