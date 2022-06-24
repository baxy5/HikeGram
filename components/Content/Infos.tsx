import React from "react";

import Info from "../Content/Info";

const Infos = () => {
  return (
    <div>
      <Info
        title="Share your photos"
        desc="Show other the beautiful place you were"
        src="/wild-hiker2.jpg"
        size={{ width: 640, height: 428 }}
      />
      <Info
        title="Share your photos"
        desc="Show other the beautiful place you were"
        src="/wild-hiker3.jpg"
        size={{ width: 640, height: 427 }}
      />
    </div>
  );
};

export default Infos;
