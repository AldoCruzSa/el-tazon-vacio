import React from "react";

import { useRouter } from "next/router";
import { AppConfig } from "../utils/AppConfig";

const Header = () => {
  const router = useRouter();
  const container = {
    backgroundColor: "#3463c2",
    display: "flex",
    alignItems: 'center',
    paddingLeft: "5%",
    marginBottom: "5%",
    width: "100%",
    paddingBottom: "1%",
    paddingTop: "1%",
  };
  

  return (
    <div style={container}>
      <img
        src={`${router.basePath}/assets\\images/logo.png`}
        alt="logo"
        style={{ width: '150px', height: '150px', marginRight: '30px' }}
      />
      <div>
        <div
          className="font-semibold text-3xl text-gray-900"
          style={{ color: "white" }}
        >
          {AppConfig.title}
        </div>
        <div className="text-xl" style={{ color: "white" }}>
          {AppConfig.description}
        </div>
      </div>
    </div>
  );
};

export { Header };
