import React, { useState } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import Shop_Data from "../shopData";
import CollectionPreview from "../components/collection/CollectionPreview";

const HomePage = () => {
  const [shopData, setShopData] = useState(Shop_Data);
  return (
    <BaseLayout>
      <BasePage>
        {shopData.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest}></CollectionPreview>
        ))}
      </BasePage>
    </BaseLayout>
  );
};

export default HomePage;
