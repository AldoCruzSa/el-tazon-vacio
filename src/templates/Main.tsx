import { ReactNode } from "react";

import Link from "next/link";
import Head from "next/head";

import { Navbar } from "../navigation/Navbar";
import { AppConfig } from "../utils/AppConfig";
import { Header } from "./Header";

import * as React from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => {
  return (
    <div style={{margin: 0, padding: 0}}>
      <Head>
        <meta name="viewport" content="widht=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className="antialiased w-full text-gray-700 px-3 md:px-0">
        {meta}

        <div className="max-w-screen-md mx-auto">
          <div>
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

          <div className="text-xl py-5">{children}</div>

          <div className="border-t border-gray-300 text-center py-8 text-sm">
            © Copyright {new Date().getFullYear()} {AppConfig.title}.
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
