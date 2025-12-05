// Sample articles data - Replace with API data later
const articlesData = [
    {
        id: 1,
        title: "How AI is Revolutionizing Digital Marketing Strategies",
        field: "marketing",
        date: "2024-11-15",
        excerpt: "Explore how artificial intelligence is transforming the way businesses approach digital marketing, from predictive analytics to personalized customer experiences.",
        url: "#",
        author: "Marketing Team"
    },
    {
        id: 2,
        title: "The Future of Automated Accounting Systems",
        field: "accounting",
        date: "2024-11-10",
        excerpt: "Discover how AI-powered accounting systems are streamlining financial processes, reducing errors, and providing real-time insights for businesses of all sizes.",
        url: "#",
        author: "Accounting Team"
    },
    {
        id: 3,
        title: "AI-Driven Investment Strategies in Modern Finance",
        field: "finance",
        date: "2024-11-05",
        excerpt: "Learn about the latest AI algorithms that are reshaping investment strategies, risk assessment, and portfolio management in the financial sector.",
        url: "#",
        author: "Finance Team"
    },
    {
        id: 4,
        title: "Chatbots and Customer Engagement in Marketing",
        field: "marketing",
        date: "2024-10-28",
        excerpt: "An in-depth look at how AI chatbots are enhancing customer engagement, providing 24/7 support, and improving conversion rates for marketing campaigns.",
        url: "#",
        author: "Marketing Team"
    },
    {
        id: 5,
        title: "Machine Learning in Fraud Detection for Accounting",
        field: "accounting",
        date: "2024-10-20",
        excerpt: "Understanding how machine learning algorithms are detecting fraudulent activities in real-time, protecting businesses from financial losses and compliance issues.",
        url: "#",
        author: "Accounting Team"
    },
    {
        id: 6,
        title: "Algorithmic Trading: The New Era of Stock Markets",
        field: "finance",
        date: "2024-10-15",
        excerpt: "Examine how AI-powered algorithmic trading is dominating modern stock markets, executing trades at lightning speed based on complex market analysis.",
        url: "#",
        author: "Finance Team"
    }
];

// Current filter
let currentFilter = 'all';
let allArticles = [...articlesData];

// Initialize the articles page
function initArticles() {
    renderArticles(currentFilter);
    setupFilterButtons();
    setupSearchBar();
}

// Render articles
function renderArticles(filter, searchQuery = '') {
    const articlesGrid = document.getElementById('articles-grid');
    articlesGrid.innerHTML = '';

    let filteredArticles = filter === 'all'
        ? allArticles
        : allArticles.filter(article => article.field === filter);

    // Apply search filter
    if (searchQuery) {
        filteredArticles = filteredArticles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (filteredArticles.length === 0) {
        articlesGrid.innerHTML = `
            <div class="empty-state">
                <h3>No articles found</h3>
                <p>Try adjusting your filters or search query.</p>
            </div>
        `;
        return;
    }

    filteredArticles.forEach(article => {
        const articleElement = createArticleCard(article);
        articlesGrid.appendChild(articleElement);
    });
}

// Create article card
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = `article-card ${article.field}`;

    const fieldTag = document.createElement('span');
    fieldTag.className = `field-tag ${article.field}`;
    fieldTag.textContent = article.field.charAt(0).toUpperCase() + article.field.slice(1);

    const title = document.createElement('h3');
    title.className = 'article-title';
    title.textContent = article.title;

    const meta = document.createElement('div');
    meta.className = 'article-meta';
    meta.innerHTML = `
        <span class="article-date">${formatDate(article.date)}</span>
    `;

    const excerpt = document.createElement('p');
    excerpt.className = 'article-excerpt';
    excerpt.textContent = article.excerpt;

    const link = document.createElement('a');
    link.href = article.url;
    link.className = 'article-link';
    link.textContent = 'Read More';

    card.appendChild(fieldTag);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(excerpt);
    card.appendChild(link);

    return card;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            currentFilter = filter;

            const searchQuery = document.getElementById('article-search').value;
            renderArticles(filter, searchQuery);
        });
    });
}

// Setup search bar
function setupSearchBar() {
    const searchInput = document.getElementById('article-search');

    searchInput.addEventListener('input', (e) => {
        const searchQuery = e.target.value;
        renderArticles(currentFilter, searchQuery);
    });
}

// Load articles from API
async function loadArticlesFromAPI(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update articles data
        allArticles = data;

        // Re-render articles
        renderArticles(currentFilter);

        console.log('Articles loaded successfully from API');
        return data;
    } catch (error) {
        console.error('Error loading articles from API:', error);
        alert('Failed to load articles from API. Using sample data.');
        return articlesData;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initArticles);

// Export functions for external use
window.articlesApp = {
    loadFromAPI: loadArticlesFromAPI,
    getData: () => allArticles,
    refresh: () => renderArticles(currentFilter),
    addArticle: (article) => {
        allArticles.push(article);
        renderArticles(currentFilter);
    }
};
