import React from "react";

import { useRouter } from "next/router";
import { AppConfig } from "../utils/AppConfig";

const Header = () => {
  const router = useRouter();
  const container = {
    background: 'linear-gradient(to bottom, #0f2e61, #0b4fbd)',
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginBottom: "1.5rem",
    width: "100%",
    paddingBottom: "0.2rem",
    paddingTop: "0.2rem",
  };

  return (
    <div style={container}>
      <img
        src={`${router.basePath}/assets\\images/logo.png`}
        alt="logo"
        style={{ maxWidth: "6rem", height: "auto", marginRight: "1rem" }}
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
