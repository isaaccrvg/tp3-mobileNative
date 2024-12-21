export default async function FetchArticles(username) {
  try {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar os artigos');
    }
    return await response.json(); 
  } catch (error) {
    console.error('Erro no fetch', error);
    throw error;
  }
}
