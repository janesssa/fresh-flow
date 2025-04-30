import { ThemeProvider } from "@emotion/react";
import {createTheme, CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneContainer from "./components/PhoneContainer";
import HomePage from "./pages/Homepage";

import './index.css'
import './styling/global.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RecipesOverviewPage from "./pages/RecipesOverviewPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

const theme = createTheme({
	palette: {
		primary: {
			main: '#4caf50',
		},
		secondary: {
			main: '#f5f5f5',
		},
	},
	typography: {
		fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
		h1: {
			fontSize: '2rem',
			fontWeight: 600,
		},
		h2: {
			fontSize: '1.5rem',
			fontWeight: 500,
		},
		body1: {
			fontSize: '1rem',
		},
	},
});

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	  <BrowserRouter>
			<ThemeProvider theme={theme}>
			  <CssBaseline />
			  <PhoneContainer>
				<Routes>
				  <Route index element={<HomePage />} />
				  <Route path="recipes" element={<RecipesOverviewPage />} />
				  <Route path="recipe/:recipeId" element={<RecipeDetailPage />} />
				</Routes>
			  </PhoneContainer>
			</ThemeProvider>
	  </BrowserRouter>
);

export default root;