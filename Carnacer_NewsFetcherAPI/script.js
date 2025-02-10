document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '82cb383733cba7d71beefb365e496dc6'; 
    const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`;
    const newsContainer = document.getElementById('news-container');

    async function fetchNews() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.articles) {
                displayNews(data.articles);
            } else {
                newsContainer.innerHTML = '<p>Failed to fetch news articles.</p>';
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = '<p>Error fetching news articles.</p>';
        }
    }

    function displayNews(articles) {
        newsContainer.innerHTML = '';

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'news-article';

            articleElement.innerHTML = `
                <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                <img src="${article.image}" alt="News Image" style="width:100%; border-radius:5px; margin-top:10px;">
                <p>${article.description || 'No description available.'}</p>
            `;

            newsContainer.appendChild(articleElement);
        });
    }

    fetchNews();
});
