import React from "react";
import {recipes} from "../data/dummy";
import RecipeCard from "../components/RecipeCard";
import {Grid, Container } from "@mui/material";
import {Recipe} from "../types";

function Item(props: { children: React.ReactNode }) {
	return <div>{props.children}</div>;
}

const RecipesOverviewPage: React.FC = () => {
	return (
		<Container>
			<Grid container spacing={3}>
				{recipes.map((recipe: Recipe) => (
					<Grid size={12} key={recipe.id}>
						<Item>
							<RecipeCard recipe={recipe}/>
						</Item>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default RecipesOverviewPage;
