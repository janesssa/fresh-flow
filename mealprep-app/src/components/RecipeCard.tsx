import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { Recipe } from "../types";
import { Link } from "react-router";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
      <Link to={`/recipe/${recipe.id}`} state={{ recipe }} className="recipe-card">
        <Card sx={{ width: 1, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {recipe.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
              {recipe.tags?.map((tag, index) => (
                <Chip key={index} label={tag} size="small" />
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary">
              Bereiding: ± {recipe.prepTime + recipe.cookTime} min
            </Typography>
          </CardContent>
        </Card>
      </Link>
  );
};

export default RecipeCard;
