import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { useHttp } from "../hooks/http.hooks"
import { AuthContext } from "../context/AuthContext"

export const CreatePage = () => {
	const [link, setLink] = useState('')
	const { request } = useHttp()
	const auth = useContext(AuthContext)
	const history = useHistory()

	useEffect(() => {
		window.M.updateTextFields()
	}, [])

	const pressHandler = async (event) => {
		if (event.key === 'Enter') {
			try {
				const data = await request('/api/link/generate', 'POST', { from: link }, {
					Authorization: `Bearer ${auth.token}`
				})
				history.push(`/detail/${data.link._id}`)
			} catch (error) { }
		}
	}

	return (
		<div className="row">
			<div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
				<div className="input-field">
					<input
						id="link"
						type="text"
						palceholder="Вставьте ссылку"
						name="link"
						value={link}
						onChange={e => setLink(e.target.value)}
						onKeyPress={pressHandler}
					/>
					<label htmlFor="link">Введите ссылку</label>
				</div>
			</div>
		</div>
	)
}