export type Recipe = {
    id: string,
    title: string,
    type: string,
    servings: number,
    ingredients: string[],
    instructions: string[],
    image_url: string
}