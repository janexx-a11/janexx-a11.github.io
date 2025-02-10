document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '33854ade40f94289ab40c82d6283b57a'; 
    const newsContainer = document.getElementById('news-container');

    async function fetchNews() {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
            const data = await response.json();

            if (data.status === 'ok') {
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
                <p>${article.description || 'No description available.'}</p>
            `;

            newsContainer.appendChild(articleElement);
        });
    }

    fetchNews();
});
