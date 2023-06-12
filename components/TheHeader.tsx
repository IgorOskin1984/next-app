import Link from 'next/link'
import React from 'react'
import s from './header_footer_style.module.css'


function TheHeader() {
	return (
		<header className={s.header}>
			<nav className={s.nav}>
				<Link href='/'>Home</Link>
				<Link href='/blog'>Blog</Link>
				<Link href='/about'>About</Link>
			</nav>
		</header>
	)
}

export { TheHeader }