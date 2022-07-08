/** @format */

import React from "react"
import { Switch } from "react-router-dom"
import { routes } from "../routes"
import { AppRoute } from "../routes/route"
import MainContainer from "../components/container/MainContainer"

export const MainLayout = () => {
	return (
		<MainContainer>
			<Switch>
				{routes.map((route, id) => (
					<AppRoute key={id} path={route.path} component={route.component} {...route} />
				))}
			</Switch>
		</MainContainer>
	)
}
