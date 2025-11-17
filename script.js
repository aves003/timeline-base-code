// Sample timeline data - This will eventually be replaced with API calls
const timelineData = [
    // Marketing Events
    {
        year: 2015,
        field: "marketing",
        summary: "Facebook introduces advanced AI-powered ad targeting algorithms.",
        details: "Facebook revolutionized digital advertising by implementing sophisticated machine learning algorithms that analyze user behavior, interests, and demographics. This allowed businesses to target their ideal customers with unprecedented precision, dramatically improving ad ROI and transforming the digital marketing landscape. The system could predict user preferences and optimize ad delivery in real-time, making marketing campaigns more effective and cost-efficient."
    },
    {
        year: 2018,
        field: "marketing",
        summary: "AI chatbots become mainstream for customer service and lead generation.",
        details: "Companies widely adopted AI-powered chatbots to handle customer inquiries 24/7, reducing response times and operational costs. These intelligent assistants could understand natural language, provide personalized recommendations, and qualify leads automatically. Major brands reported up to 80% reduction in customer service costs while improving customer satisfaction scores. The technology enabled businesses to scale their customer engagement without proportionally increasing staff."
    },
    {
        year: 2022,
        field: "marketing",
        summary: "GPT-3 and AI content generation tools transform content marketing strategies.",
        details: "The release of advanced language models like GPT-3 revolutionized content creation, enabling marketers to generate high-quality blog posts, social media content, and ad copy at scale. Tools like Jasper and Copy.ai emerged, allowing small teams to produce enterprise-level content output. However, this also raised important questions about content authenticity, SEO implications, and the balance between AI-generated and human-created content in maintaining brand voice and authenticity."
    },
    {
        year: 2025,
        field: "marketing",
        summary: "Predictive AI models forecast customer behavior with 85%+ accuracy.",
        details: "Advanced machine learning systems now analyze vast datasets to predict customer purchasing patterns, churn risk, and lifetime value with remarkable accuracy. Marketing teams use these insights to proactively engage customers at optimal times with personalized offers. The technology integrates data from multiple touchpoints including social media, browsing behavior, purchase history, and even external factors like weather and economic indicators to create comprehensive customer profiles and predictive models."
    },
    {
        year: 2028,
        field: "marketing",
        summary: "AI-driven hyper-personalization creates unique experiences for each customer.",
        details: "Future marketing platforms will leverage AI to create completely individualized customer journeys, dynamically adjusting content, product recommendations, pricing, and communication channels in real-time based on individual preferences and context. Every customer interaction will be optimized using reinforcement learning algorithms that continuously improve based on outcomes. This level of personalization will blur the lines between marketing, sales, and customer service, creating seamless, AI-orchestrated customer experiences across all touchpoints."
    },

    // Accounting Events
    {
        year: 2016,
        field: "accounting",
        summary: "OCR and AI automate invoice processing and data entry tasks.",
        details: "Optical Character Recognition combined with machine learning algorithms began automating the tedious process of invoice processing and data entry. Systems could now extract information from scanned documents, match invoices to purchase orders, and flag discrepancies without human intervention. This technology reduced processing time by up to 90% and virtually eliminated data entry errors, allowing accounting professionals to focus on analysis and strategic tasks rather than manual data handling."
    },
    {
        year: 2019,
        field: "accounting",
        summary: "AI-powered fraud detection systems identify anomalies in financial transactions.",
        details: "Machine learning algorithms became sophisticated enough to detect fraudulent activities by analyzing patterns in financial transactions. These systems could identify unusual spending patterns, duplicate invoices, and suspicious vendor activities in real-time. Companies implementing AI fraud detection reported 60% faster fraud discovery and prevented millions in potential losses. The technology continuously learned from new fraud patterns, making it increasingly effective over time."
    },
    {
        year: 2021,
        field: "accounting",
        summary: "Cloud-based AI accounting platforms enable real-time financial reporting.",
        details: "Platforms like QuickBooks and Xero integrated advanced AI capabilities to provide real-time financial insights and automated bookkeeping. These systems could categorize transactions automatically, reconcile accounts, and generate financial reports instantly. Small businesses gained access to enterprise-level financial analysis previously available only to large corporations with dedicated accounting teams. The shift to cloud-based AI platforms democratized sophisticated financial management tools."
    },
    {
        year: 2026,
        field: "accounting",
        summary: "AI auditors conduct continuous monitoring and compliance checking.",
        details: "Artificial intelligence systems will perform ongoing audit functions, continuously monitoring transactions for compliance with accounting standards and regulations. These AI auditors will analyze 100% of transactions rather than statistical samples, providing unprecedented assurance and catching issues in real-time. The technology will significantly reduce the time and cost of traditional audits while improving accuracy and compliance. Human auditors will shift to advisory roles, interpreting AI findings and providing strategic guidance."
    },
    {
        year: 2030,
        field: "accounting",
        summary: "Autonomous AI systems handle end-to-end accounting operations for most businesses.",
        details: "Advanced AI will manage the entire accounting cycle from transaction recording to financial statement preparation with minimal human intervention. These systems will automatically adjust to new accounting standards, handle complex transactions like mergers and acquisitions, and provide strategic financial advice. Blockchain integration will enable real-time verification and eliminate reconciliation needs. The role of accountants will evolve to focus on strategic financial planning, interpreting AI insights, and handling complex judgment calls that require human expertise and ethical consideration."
    },

    // Finance Events
    {
        year: 2014,
        field: "finance",
        summary: "Robo-advisors democratize investment management for retail investors.",
        details: "Companies like Betterment and Wealthfront launched AI-powered investment platforms that provided automated portfolio management at a fraction of traditional advisory costs. These robo-advisors used algorithms to create diversified portfolios based on individual risk tolerance and goals, automatically rebalancing and tax-loss harvesting. This technology made sophisticated investment strategies accessible to average investors, disrupting the wealth management industry and forcing traditional firms to adapt."
    },
    {
        year: 2017,
        field: "finance",
        summary: "AI-powered algorithmic trading dominates stock market transactions.",
        details: "High-frequency trading systems powered by machine learning algorithms began executing the majority of stock market trades. These systems could analyze market conditions, news sentiment, and historical patterns to make split-second trading decisions. The technology processed vast amounts of data far beyond human capability, identifying profitable opportunities in microseconds. While this increased market efficiency and liquidity, it also raised concerns about market volatility and the potential for AI-triggered market crashes."
    },
    {
        year: 2020,
        field: "finance",
        summary: "Machine learning models improve credit scoring and lending decisions.",
        details: "Financial institutions adopted AI models that analyzed thousands of data points beyond traditional credit scores to assess creditworthiness. These systems considered factors like education, employment history, and even social media activity to provide more accurate risk assessments. This technology enabled lenders to approve loans for previously underserved populations while reducing default rates. However, it also sparked debates about data privacy, algorithmic bias, and fair lending practices."
    },
    {
        year: 2024,
        field: "finance",
        summary: "AI systems detect and prevent financial crimes with advanced pattern recognition.",
        details: "Modern AI-powered anti-money laundering and fraud prevention systems analyze transaction patterns across global financial networks in real-time. These systems can identify suspicious activities by detecting anomalies, tracking fund flows, and connecting seemingly unrelated transactions. Banks report 70% improvement in detecting financial crimes while reducing false positives that frustrate legitimate customers. The technology adapts to new criminal tactics by continuously learning from emerging fraud patterns and global financial crime data."
    },
    {
        year: 2027,
        field: "finance",
        summary: "AI provides real-time risk assessment and portfolio optimization for all asset classes.",
        details: "Advanced AI systems will integrate market data, geopolitical events, climate risks, and economic indicators to provide comprehensive real-time risk analysis. These platforms will automatically adjust investment portfolios across stocks, bonds, commodities, real estate, and cryptocurrencies to optimize returns while managing risk. Individual investors will have access to institutional-grade risk management tools, fundamentally changing wealth management and retirement planning."
    },
    {
        year: 2029,
        field: "finance",
        summary: "Quantum computing and AI revolutionize financial modeling and predictions.",
        details: "The convergence of quantum computing and artificial intelligence will enable financial models of unprecedented complexity and accuracy. These systems will simulate millions of market scenarios simultaneously, predict economic trends with high precision, and optimize multi-asset portfolios across global markets. The technology will transform derivatives pricing, risk management, and strategic financial planning. However, regulatory frameworks will struggle to keep pace with the rapid advancement of these technologies, creating new challenges for financial governance and oversight."
    }
];

// Sort timeline data by year
timelineData.sort((a, b) => a.year - b.year);

// Current filter
let currentFilter = 'all';

// Initialize the timeline
function initTimeline() {
    renderTimeline(currentFilter);
    setupFilterButtons();
}

// Render timeline events
function renderTimeline(filter) {
    const timelineContainer = document.getElementById('timeline-events');
    timelineContainer.innerHTML = '';

    const filteredData = filter === 'all'
        ? timelineData
        : timelineData.filter(event => event.field === filter);

    filteredData.forEach((event, index) => {
        const eventElement = createEventElement(event, index);
        timelineContainer.appendChild(eventElement);
    });
}

// Create individual event element
function createEventElement(event, index) {
    const eventDiv = document.createElement('div');
    eventDiv.className = `timeline-event ${event.field}`;
    eventDiv.style.animationDelay = `${index * 0.1}s`;

    const cardDiv = document.createElement('div');
    cardDiv.className = `event-card ${event.field}`;

    const yearBadge = document.createElement('div');
    yearBadge.className = 'year-badge';
    yearBadge.textContent = event.year;

    const fieldTag = document.createElement('span');
    fieldTag.className = `field-tag ${event.field}`;
    fieldTag.textContent = event.field.charAt(0).toUpperCase() + event.field.slice(1);

    const summary = document.createElement('div');
    summary.className = 'event-summary';
    summary.textContent = event.summary;

    const details = document.createElement('div');
    details.className = 'event-details';
    details.innerHTML = `<p>${event.details}</p>`;

    cardDiv.appendChild(yearBadge);
    cardDiv.appendChild(fieldTag);
    cardDiv.appendChild(summary);
    cardDiv.appendChild(details);
    eventDiv.appendChild(cardDiv);

    return eventDiv;
}

// Setup filter button functionality
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter value and update timeline
            const filter = button.getAttribute('data-filter');
            currentFilter = filter;
            renderTimeline(filter);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTimeline);

// Function to load data from API (for future use)
async function loadTimelineFromAPI(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Clear existing data and load new data
        timelineData.length = 0;
        timelineData.push(...data);
        timelineData.sort((a, b) => a.year - b.year);

        // Re-render timeline
        renderTimeline(currentFilter);

        console.log('Timeline data loaded successfully from API');
    } catch (error) {
        console.error('Error loading timeline data from API:', error);
        alert('Failed to load timeline data. Using default data.');
    }
}

// Export functions for potential future use
window.timelineApp = {
    loadFromAPI: loadTimelineFromAPI,
    getData: () => timelineData,
    refresh: () => renderTimeline(currentFilter)
};
