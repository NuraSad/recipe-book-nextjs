import { createClient } from "../supabase/server";
import RecipeCard from "../components/RecipeCardMobile/RecipeCardMobile";

export default async function Home() {
  const supabase = await createClient();

  const { data: recipes, error } = await supabase
    .from("recipes")
    .select("id, title, type, image_url");

  return (
    <div className="flex flex-col">
      {recipes?.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe_id={recipe.id}
          title={recipe.title}
          type={recipe.type}
          image={recipe.image_url}
        />
      ))}
      {error ? <>{error}</> : null}
    </div>
  );
}
