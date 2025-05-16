import Image from "next/image";
import { createClient } from "../../supabase/server";

import { Recipe } from "../../types/types";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ recipe_id: string }>;
}) {
  const supabase = await createClient();
  const { recipe_id } = await params;
  const { data } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", recipe_id)
    .single();

  const recipe: Recipe | null = data;

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <Image
        src={recipe.image_url}
        width={300}
        height={200}
        alt={recipe.title}
      />
      <h2>{recipe.title}</h2>
      <h3>{recipe.type}</h3>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <h4> Instructions: </h4>
      <ul>
        {recipe.instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
}
