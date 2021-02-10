import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Button } from '@material-ui/core'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (

  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        {/* <Link href="/">
          <a>Home</a>
        </Link>{' '} */}
        <img className="logo1" src="/images/logo1.png" />
        <img className="btn-love" src="/images/ถูกใจ.png" />
        <img className="btn-chat" src="/images/แชทผู้ซื้อ.png" />


        <Button href="#text-buttons" className="btn-login">
          เข้าวู่ระบบ / สมัครสมาชิก
        </Button>
        <Button variant="contained" className="btn-sell">
          ลองขาย
        </Button>
      </nav>
      
      {/* <AppBar position="static">
      <Toolbar>

    <Button color="inherit">Login</Button>
  </Toolbar>
      </AppBar> */}
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
