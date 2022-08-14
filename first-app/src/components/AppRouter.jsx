import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './../pages/About';
import Posts from './../pages/Posts';
import Error from './../pages/Error';
import PostIdPage from './../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router/routes';
import Login from './../pages/Login';
import { AuthContext } from './../context/index';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <Loader />
	}

	return (
		isAuth
			?
			<Routes>
				{privateRoutes.map(route =>
					<Route
						path={route.path}
						element={route.component}
						key={route.path}
					/>
				)}
				<Route path="*" element={<Posts />} />
			</Routes>
			:
			<Routes>
				{publicRoutes.map(route =>
					<Route
						path={route.path}
						element={route.component}
						key={route.path}
					/>
				)}
				<Route path="*" element={<Login />} />
			</Routes>
	)
}

export default AppRouter