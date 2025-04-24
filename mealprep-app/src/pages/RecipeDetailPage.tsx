import React from "react";
import {recipes} from "../data/dummy";
import {Container, List, ListItem, ListItemText, Typography} from "@mui/material";
import {Recipe} from "../types"

const RecipeDetailPage: React.FC = () => {
	const recipe: Recipe = recipes[0]
	return (
		<Container>
			<Typography variant="h2">
				{recipe.title}
			</Typography>
			<Typography variant="h6">
				Ingredienten
			</Typography>
            <List dense>
				{recipe.ingredients?.map((ingredient, index) => (
                    <ListItem key={index}>
                      <ListItemText
					  	primary={ingredient.name + " - " + ingredient.quantity}
					  />
                    </ListItem>
                ))}
            </List>

			<Typography variant="h6">
				Stappen
			</Typography>
            <List dense>
				{recipe.steps?.map((step, index) => (
                    <ListItem key={index}>
                      <ListItemText
					  	primary={(index + 1) + ". " + step}
					  />
                    </ListItem>
                ))}
            </List>

		</Container>
	);
};

export default RecipeDetailPage;
