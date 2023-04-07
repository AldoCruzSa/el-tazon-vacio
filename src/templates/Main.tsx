import React, { ReactNode } from "react";

import Link from "next/link";

import { Navbar } from "../navigation/Navbar";
import { AppConfig } from "../utils/AppConfig";
import { Header } from "./Header";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      <Header />
      <div className="antialiased w-full text-gray-700 px-3 md:px-0">
        {props.meta}

        <div className="max-w-screen-md mx-auto">
          <div className="border-b border-gray-300">
            <div>
              <Navbar>
                <li className="mr-6">
                  <Link href="/">
                    <a>Inicio</a>
                  </Link>
                </li>
                <li className="mr-6">
                  <Link href="/about/">
                    <a>Acerca De</a>
                  </Link>
                </li>
              </Navbar>
            </div>
          </div>

          <div className="text-xl py-5">{props.children}</div>

          <div className="border-t border-gray-300 text-center py-8 text-sm">
            © Copyright {new Date().getFullYear()} {AppConfig.title}.
          </div>
        </div>
      </div>
    </>
  );
};

export { Main };
