import type { NextraThemeLayoutProps } from 'nextra'
import Link from 'next/link'
import HamburgerMenu from './components/hamburger'

export default function Layout({ children,pageOpts  }: NextraThemeLayoutProps) {
  const { title, frontMatter, headings, pageMap  } = pageOpts
  return (
    <>    
    <div>
      <HamburgerMenu pageMap={pageMap}></HamburgerMenu>
      <div className="pt-12 text-6xl font-display font-bold">Cappy's Meowbox</div>
      <div className="pt-12 text-5xl font-display font-bold">{title}</div>
      {(frontMatter.date!=undefined)?<div className="text-2xl font-display font-bold">{frontMatter.date}</div>:null}
      <div className='pt-12 pb-24'>{children}</div>
    </div>
    </>

  )
}