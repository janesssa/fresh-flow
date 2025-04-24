import React from "react";
import {recipes} from "../data/dummy";
import {Container, List, Typography} from "@mui/material";

const RecipeDetailPage: React.FC = () => {
	const recipe = recipes[0]
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
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
		</Container>
	);
};

export default RecipeDetailPage;
