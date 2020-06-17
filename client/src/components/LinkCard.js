import React from "react";

export const LinkCard = ({ link }) => {
	return (
		<>
			<h1>Ссылка</h1>
			<p>Ваша ссылка:
				<a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
			</p>
			<p>Откуда:
				<a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a>
			</p>
			<p>Колличество переходов поссылке: <strong>{link.clicks}</strong></p>
			<p>Дата создания ссылки: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
		</>
	)
}