export default function Sidebar() {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <h4>-TelShop-</h4>
        <hr />
        <ul className="sidebar__ul">
          <li>Apple</li>
          <li>Samsung</li>
          <li>Xiomi / Redmi</li>
          <li>Poco</li>
          <li>Nokia</li>
          <li>Vertu</li>
          <li>Huawei</li>
          <li>Verizon</li>
          <li>Other</li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
