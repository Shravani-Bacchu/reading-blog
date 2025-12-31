import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const genre = url.searchParams.get("genre");

  if (!genre) {
    return new Response(
      JSON.stringify({ error: "No genre provided" }),
      { status: 400 }
    );
  }

  const googleResponse = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=5&key=${import.meta.env.GOOGLE_BOOKS_API_KEY}`
  );

  const googleData = await googleResponse.json();

  return new Response(JSON.stringify(googleData), {
    headers: { "Content-Type": "application/json" },
  });
};
