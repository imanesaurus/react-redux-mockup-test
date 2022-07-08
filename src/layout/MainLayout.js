/** @format */

import React from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "../routes"
import { AppRoute } from "../routes/route"

export const MainLayout = () => {
	return (
		<Routes>
			{routes.main.map((route, id) => {
				const Component = route.element
				return (
					<Route key={id} path={route.path} element={<Component />} />
				)
			})}
		</Routes>
	)
}
