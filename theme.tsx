import type { NextraThemeLayoutProps } from 'nextra'

export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <div>
      <h1 className="pt-12 text-6xl">Cappy's Thoughtbox</h1>
      <div className='pt-12'>{children}</div>
    </div>
  )
}