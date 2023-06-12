import Link from 'next/link'
import React from 'react'
import s from './header_footer_style.module.css'


function TheHeader() {
	return (
		<header className={s.header}>
			<nav className={s.nav}>
				<Link className={s.link} href='/'>Home</Link>
				<Link className={s.link} href='/blog'>Blog</Link>
				<Link className={s.link} href='/about'>About</Link>
			</nav>
		</header>
	)
}

export { TheHeader }