import React, { ReactNode } from "react";
import Head from "next/head";

import { Button } from "@material-ui/core";

type Props = {
  children?: ReactNode;
  title?: string;
};


const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <img className="logo1" src="/images/logo1.png" />
        <img className="btn-love" src="/images/love.png" />
        <img className="btn-chat" src="/images/chat2.png" />

       <a className="text-login"> เข้าสู่ระบบ / สมัครสมาชิก</a>
         
        
        <Button variant="contained" className="btn-sell">
          ลองขาย
        </Button>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
