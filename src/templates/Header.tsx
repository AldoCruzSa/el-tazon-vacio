import React from "react";

import { useRouter } from "next/router";
import { AppConfig } from "../utils/AppConfig";

const Header = () => {
  const router = useRouter();
  const container = {
    backgroundColor: "#06337a",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginBottom: "2rem",
    width: "100%",
    paddingBottom: "1%",
    paddingTop: "1%",
  };

  return (
    <div style={container}>
      <img
        src={`${router.basePath}/assets\\images/logo.png`}
        alt="logo"
        style={{ maxWidth: "7rem", height: "auto", marginRight: "1rem" }}
      />
      <div>
        <div
          className="font-serif"
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          {AppConfig.title}
        </div>
        <div
          className="font-serif"
          style={{ color: "white", fontSize: "1rem" }}
        >
          {AppConfig.description}
        </div>
      </div>
    </div>
  );
};

export { Header };
