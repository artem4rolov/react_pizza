import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="138" />
    <rect x="0" y="293" rx="10" ry="10" width="280" height="21" />
    <rect x="0" y="333" rx="10" ry="10" width="280" height="88" />
    <rect x="8" y="449" rx="10" ry="10" width="95" height="30" />
    <rect x="120" y="440" rx="25" ry="25" width="157" height="46" />{" "}
  </ContentLoader>
);

export default Skeleton;
