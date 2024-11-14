import { useContext } from "react";
import { DetailContext } from "./DetailProvider";
import Item from "./Item";

import { useTranslation } from "react-i18next";

function ItemList() {
  const { data, handlerMap, showResolved, toggleShowResolved } = useContext(DetailContext);
  const { t } = useTranslation();

  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      ItemList <button onClick={() => handlerMap.addItem()}>add item</button>
      <button onClick={() => toggleShowResolved()}>{showResolved ? "not resolved only" : "all items"}</button>
      <div>
        {data.itemList.map((item) => (
          <Item key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>
      <div>{t("itemCount", { count: data.itemList.length })}</div>
    </div>
  );
}

export default ItemList;
