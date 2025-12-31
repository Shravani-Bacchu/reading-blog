export default async function searchBooks() {
  const genre = document.querySelector("#genre").value;

  const response = await fetch(`/api/books?genre=${genre}`);
  const data = await response.json();

  console.log(data);
}