import React from 'react'
import s from './header_footer_style.module.css'

function TheFooter() {
	return (
		<footer className={`container ${s.footer}`}>
			Created by &copy; IhorOskin
		</footer>
	)
}

export { TheFooter }
