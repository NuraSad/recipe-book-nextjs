"use client";

import Link from "next/link";
import Image from "next/image";

type RecipeCardProps = {
  recipe_id: number;
  title: string;
  type: string;
  image: string;
};

export default function RecipeCard({
  recipe_id,
  title,
  type,
  image,
}: RecipeCardProps) {
  return (
    <div>
      <Link href={`/${recipe_id}`}>
        <Image src={image} alt={title} />
        <h5>{title}</h5>
        <p>{type}</p>
      </Link>
    </div>
  );
}
