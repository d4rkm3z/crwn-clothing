import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./data";

export default function ShopPage() {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...args }) => (
        <CollectionPreview key={id} {...args} />
      ))}
    </div>
  );
}
