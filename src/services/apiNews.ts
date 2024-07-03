const API_KEY = "e2a4bb6c0368486287a97821cf7bda4c";
const pageSize = 100;

export async function getNews(category) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) throw Error("Failed getting news");

  const data = await res.json();

  return data.articles;
}
