import React from "react";
import {recipes} from "../data/dummy";
import RecipeCard from "../components/RecipeCard";
import {Grid, Container, Typography} from "@mui/material";

const RecipesOverviewPage: React.FC = () => {
	return (
		<Container>
			<Grid container spacing={3}>
				{recipes.map((recipe: Recipe) => (
					<Grid item xs={12} md={6} key={recipe.id}>
						<RecipeCard recipe={recipe}/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default RecipesOverviewPage;
