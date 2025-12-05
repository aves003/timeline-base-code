// API Configuration
const API_BASE_URL = 'https://api.thenewsapi.com/v1/news/all';
const API_TOKEN = 'bX4mX0FdSWugKyADeKPEBAUG9T1LhkeGXECRWixV';

// Search queries
const QUERIES = {
    finance: 'finance AI',
    accounting: 'accounting AI',
    marketing: 'marketing AI'
};

// Store all articles
let allArticles = [];
let currentFilter = 'all';

// DOM Elements
const newsGrid = document.getElementById('newsGrid');
const loadingState = document.getElementById('loadingState');
const articlesSection = document.getElementById('articlesSection');
const errorDiv = document.getElementById('error');
const refreshBtn = document.getElementById('refreshBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const sectionTitle = document.getElementById('sectionTitle');
const resultsCount = document.getElementById('resultsCount');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadAllNews();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    refreshBtn.addEventListener('click', () => {
        allArticles = [];
        currentFilter = 'all';
        filterButtons.forEach(btn => {
            if (btn.dataset.category === 'all') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        loadAllNews();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Handle clicks on child elements
            const button = e.target.closest('.filter-btn');
            if (!button) return;

            filterButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.category;
            displayArticles();
        });
    });
}

// Fetch news for a specific query
async function fetchNews(query, category) {
    try {
        const params = new URLSearchParams({
            api_token: API_TOKEN,
            search: query,
            language: 'en',
            limit: 10
        });

        const response = await fetch(`${API_BASE_URL}?${params}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Add category to each article
        if (data.data) {
            return data.data.map(article => ({
                ...article,
                aiCategory: category
            }));
        }

        return [];
    } catch (error) {
        console.error(`Error fetching ${category} news:`, error);
        return [];
    }
}

// Load all news from all queries
async function loadAllNews() {
    showLoading(true);
    hideError();

    try {
        // Fetch all three categories in parallel
        const [financeArticles, accountingArticles, marketingArticles] = await Promise.all([
            fetchNews(QUERIES.finance, 'finance'),
            fetchNews(QUERIES.accounting, 'accounting'),
            fetchNews(QUERIES.marketing, 'marketing')
        ]);

        // Combine all articles
        allArticles = [
            ...financeArticles,
            ...accountingArticles,
            ...marketingArticles
        ];

        // Sort by published date (newest first)
        allArticles.sort((a, b) =>
            new Date(b.published_at) - new Date(a.published_at)
        );

        // Update stats
        updateStats();

        // Display articles
        displayArticles();
    } catch (error) {
        console.error('Error loading news:', error);
        showError();
    } finally {
        showLoading(false);
    }
}

// Update statistics bar
function updateStats() {
    const financeCount = allArticles.filter(a => a.aiCategory === 'finance').length;
    const accountingCount = allArticles.filter(a => a.aiCategory === 'accounting').length;
    const marketingCount = allArticles.filter(a => a.aiCategory === 'marketing').length;
    const totalCount = allArticles.length;

    // Update stats bar
    document.getElementById('totalCount').textContent = totalCount;
    document.getElementById('financeCount').textContent = financeCount;
    document.getElementById('accountingCount').textContent = accountingCount;
    document.getElementById('marketingCount').textContent = marketingCount;

    // Update filter button counts
    document.getElementById('allCount').textContent = totalCount;
    document.getElementById('financeFilterCount').textContent = financeCount;
    document.getElementById('accountingFilterCount').textContent = accountingCount;
    document.getElementById('marketingFilterCount').textContent = marketingCount;
}

// Display articles based on current filter
function displayArticles() {
    const filteredArticles = currentFilter === 'all'
        ? allArticles
        : allArticles.filter(article => article.aiCategory === currentFilter);

    // Update section title
    const titles = {
        all: 'All Articles',
        finance: 'Finance AI Articles',
        accounting: 'Accounting AI Articles',
        marketing: 'Marketing AI Articles'
    };
    sectionTitle.textContent = titles[currentFilter] || 'Articles';

    // Update results count
    const articleText = filteredArticles.length === 1 ? 'article' : 'articles';
    resultsCount.textContent = `${filteredArticles.length} ${articleText}`;

    // Display articles
    if (filteredArticles.length === 0) {
        newsGrid.innerHTML = `
            <div class="no-articles">
                <p>No articles found</p>
                <small>Try selecting a different category or refresh to load new articles</small>
            </div>
        `;
    } else {
        newsGrid.innerHTML = filteredArticles.map(article => createArticleCard(article)).join('');
    }
}

// Create HTML for an article card
function createArticleCard(article) {
    const imageUrl = article.image_url || 'https://via.placeholder.com/400x200?text=No+Image';
    const publishedDate = new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const categoryBadge = getCategoryBadge(article.aiCategory);

    return `
        <article class="article-card">
            <div class="article-image" style="background-image: url('${imageUrl}')"></div>
            <div class="article-content">
                <div class="article-header">
                    ${categoryBadge}
                    <span class="article-source">${article.source || 'Unknown'}</span>
                </div>
                <h2 class="article-title">
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                        ${article.title}
                    </a>
                </h2>
                <p class="article-description">${article.description || article.snippet || 'No description available'}</p>
                <div class="article-footer">
                    <time class="article-date">${publishedDate}</time>
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="read-more">
                        Read Article
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Get category badge HTML
function getCategoryBadge(category) {
    const badges = {
        finance: '<span class="category-badge finance">Finance AI</span>',
        accounting: '<span class="category-badge accounting">Accounting AI</span>',
        marketing: '<span class="category-badge marketing">Marketing AI</span>'
    };
    return badges[category] || '';
}

// Show/hide loading state
function showLoading(show) {
    if (show) {
        loadingState.style.display = 'block';
        articlesSection.style.display = 'none';
    } else {
        loadingState.style.display = 'none';
        articlesSection.style.display = 'block';
    }
}

// Show error message
function showError() {
    errorDiv.style.display = 'flex';
}

// Hide error message
function hideError() {
    errorDiv.style.display = 'none';
}
