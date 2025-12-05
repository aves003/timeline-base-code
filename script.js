// Sample timeline data - This will eventually be replaced with API calls
const timelineData = [
    // Marketing Events
    {
        year: 2018,
        field: "marketing",
        summary: "AI chatbots evolve from simple FAQ systems to natural language conversations.",
        details: "Companies widely adopted AI-powered chatbots to handle customer inquiries 24/7, reducing response times and operational costs. These intelligent assistants could understand natural language, provide personalized recommendations, and qualify leads automatically. Major brands reported up to 80% reduction in customer service costs while improving customer satisfaction scores. The technology enabled businesses to scale their customer engagement without proportionally increasing staff.",
        source: "IBM - AI in Marketing (2025)"
    },
    {
        year: 2020,
        field: "marketing",
        summary: "AI-based personalization becomes standard in digital marketing.",
        details: "Machine learning began predicting customer behavior at scale, while AI chatbots provided real-time support across digital channels. Predictive AI analyzed patterns to anticipate outcomes like customer purchases based on past behavior. Marketers leveraged lookalike modeling, audience segmentation, and automated retargeting with optimized messaging. This era marked the shift from basic automation to intelligent, data-driven marketing strategies.",
        source: "Salesforce - What Is AI Marketing (2025)"
    },
    {
        year: 2022,
        field: "marketing",
        summary: "ChatGPT launch sparks explosion of AI content generation use cases.",
        details: "OpenAI's ChatGPT revolutionized content creation, enabling marketers to generate high-quality blog posts, social media content, and ad copy at scale. Generative AI created new content based on learned patterns, allowing small teams to produce enterprise-level output. Tools like Jasper and Copy.ai emerged for cultural adaptation and personalized content across diverse audiences. However, this raised important questions about content authenticity, SEO implications, and maintaining brand voice.",
        source: "Wake Forest University - How AI Is Impacting Digital Marketing (2024)"
    },
    {
        year: 2025,
        field: "marketing",
        summary: "AI copilots emerge as built-in marketing assistants with enhanced capabilities.",
        details: "Advanced AI systems now power personalized recommendation engines on e-commerce sites, continuously collecting and analyzing data. Visual content recognition identifies people, places, and objects in images and videos, enabling automated tagging and enhanced search. AI optimizes personalized pricing strategies, incentive offers, and workflow automation for data entry, transcription, and social media management. Marketing processes are being completely reimagined end-to-end.",
        source: "IBM - AI in Marketing (2025)"
    },
    {
        year: 2030,
        field: "marketing",
        summary: "AI marketing industry surpasses $1.5 trillion globally with complete process automation.",
        details: "The worldwide AI market exceeds $1.5 trillion as predicted, with automated campaign creation, performance tracking, and enhanced content types including videos, music, and images all powered by AI. Complete reimagining of marketing processes includes AI analyzing unorganized data for predictions, automated customer journey optimization, and seamless integration across all marketing channels. Human marketers focus on strategy and creativity while AI handles execution and optimization.",
        source: "Salesforce - What Is AI Marketing (2025)"
    },

    // Accounting Events
    {
        year: 1985,
        field: "accounting",
        summary: "Microsoft Excel launches, revolutionizing accounting automation.",
        details: "Excel automated tasks previously done manually including financial statements and expense tracking. It became intrinsic to accounting practice, establishing spreadsheet proficiency as a minimum requirement for all accountants. This marked the beginning of digital transformation in accounting, replacing manual ledgers and calculators with dynamic, automated systems that could handle complex calculations and data management.",
        source: "New Resources Consulting - A Brief History of Accounting Technology (2025)"
    },
    {
        year: 2016,
        field: "accounting",
        summary: "AI automation begins transforming data entry and invoice processing.",
        details: "Optical Character Recognition combined with machine learning algorithms automated the tedious process of invoice processing and data entry. Systems extracted information from scanned documents, matched invoices to purchase orders, and flagged discrepancies without human intervention. This technology reduced processing time by up to 90% and virtually eliminated data entry errors, allowing accounting professionals to focus on analysis and strategic tasks rather than manual data handling.",
        source: "Accountancy Age - How AI is Revolutionising Accounting (2024)"
    },
    {
        year: 2020,
        field: "accounting",
        summary: "Cloud-based accounting solutions enable remote work and real-time collaboration.",
        details: "Cloud computing transformed accounting with remote access to financial data and seamless collaboration across geographical locations. Real-time integration with business systems provided universal access to the same information. This shift was accelerated by the global pandemic, making cloud-based platforms essential for business continuity. Security measures were enhanced with AI-powered cybersecurity identifying unusual activities and threats in real-time.",
        source: "Oracle NetSuite - AI in Accounting: A Transformation (2025)"
    },
    {
        year: 2024,
        field: "accounting",
        summary: "Intuit launches AI-powered Intuit Assist for QuickBooks accounting automation.",
        details: "On November 20, 2024, Intuit launched Intuit Assist, a generative AI-powered financial assistant integrated into QuickBooks. This marked a major milestone in bringing advanced AI capabilities to small and medium businesses. The tool provided real-time insights, automated bookkeeping tasks, and offered intelligent recommendations for financial management. It represented the democratization of AI-powered accounting, making enterprise-level capabilities accessible to businesses of all sizes.",
        source: "Intuit - Intuit Assist for QuickBooks Launch (2024)"
    },
    {
        year: 2025,
        field: "accounting",
        summary: "Intuit AI Agents create virtual team of specialized accounting assistants.",
        details: "On July 1, 2025, Intuit rolled out AI Agents - a virtual team including Accounting Agent, Payments Agent, Customer Agent, Finance Agent, and Project Management Agent. By August 4, the major AI interface update became default for all QuickBooks Online users, with mandatory adoption by September 30, 2025. These AI agents handled routine tasks, provided real-time recommendations, and transformed accountants' roles from data entry to strategic advisory.",
        source: "Intuit Investors - Intuit Launches AI-Powered Assist (2025)"
    },
    {
        year: 2030,
        field: "accounting",
        summary: "AI transforms accounting profession from compliance to strategic advisory role.",
        details: "Advanced AI manages the entire accounting cycle with minimal human intervention, from transaction recording to financial statement preparation. Blockchain integration enables real-time verification and eliminates reconciliation needs. Accountants evolve from 'number crunchers' to 'trusted advisors,' focusing on strategic financial planning, data interpretation, and complex judgment calls requiring human expertise and ethics. The profession attracts a new generation of tech-savvy accountants who leverage AI as an empowerment tool.",
        source: "NJCPA - How AI and Emerging Technologies Are Transforming the Accounting Profession (2025)"
    },

    // Finance Events
    {
        year: 1982,
        field: "finance",
        summary: "Renaissance Technologies founded, pioneering quantitative AI-driven hedge fund strategies.",
        details: "James Simons founded Renaissance Technologies, one of the first hedge funds to extensively use AI and mathematical models for trading. The firm analyzed petabyte-scale data warehouses using statistical probabilities and pattern recognition. By 2021, Renaissance Technologies reached a $165 billion market cap, demonstrating the power of AI-driven quantitative finance. This pioneered the use of machine learning in investment strategies decades before it became mainstream.",
        source: "Analyzing Alpha - History of AI in Finance (2023)"
    },
    {
        year: 2006,
        field: "finance",
        summary: "Mint.com launches, providing personalized AI financial advice to consumers.",
        details: "Mint.com brought AI-powered financial management to retail consumers, analyzing spending patterns, categorizing transactions, and providing personalized budgeting advice. The platform demonstrated how AI could make sophisticated financial analysis accessible to average consumers. It aggregated financial data from multiple accounts, provided spending insights, and offered recommendations for saving money and managing debt more effectively.",
        source: "LoanWorks.ai - Artificial Intelligence in Financial Services: A Historical Review (2025)"
    },
    {
        year: 2017,
        field: "finance",
        summary: "State Street Corporation launches NLP and machine learning for financial analysis.",
        details: "State Street Corporation launched the Quantextual Idea Lab, using natural language processing and machine learning to analyze financial data and news. High-frequency trading (HFT) systems executed the majority of stock market trades, analyzing market conditions in milliseconds. AI processed vast amounts of data far beyond human capability, identifying profitable opportunities and making split-second trading decisions that transformed market dynamics.",
        source: "LoanWorks.ai - Artificial Intelligence in Financial Services: A Historical Review (2025)"
    },
    {
        year: 2020,
        field: "finance",
        summary: "52% of financial service providers implement AI-enabled products and services.",
        details: "Financial institutions widely adopted AI models analyzing thousands of data points beyond traditional credit scores to assess creditworthiness. Systems considered education, employment history, and behavioral patterns for more accurate risk assessments. Platforms like LendingClub used machine learning for borrower assessment, enabling loans for previously underserved populations while reducing default rates. This also sparked debates about data privacy, algorithmic bias, and fair lending practices.",
        source: "EY - How Artificial Intelligence Is Reshaping the Financial Services Industry (2025)"
    },
    {
        year: 2023,
        field: "finance",
        summary: "EY launches EY.ai platform with $1.4 billion investment in AI capabilities.",
        details: "In September 2023, EY launched EY.ai, a comprehensive AI platform representing a $1.4 billion investment in artificial intelligence capabilities. The platform integrated machine learning, natural language processing, and deep learning for risk management, compliance, and financial analysis. By 2024, EY.ai EYQ won the AI Excellence Award. This demonstrated how major financial services firms were making massive investments to leverage AI across all operations.",
        source: "LoanWorks.ai - Artificial Intelligence in Financial Services: A Historical Review (2025)"
    },
    {
        year: 2025,
        field: "finance",
        summary: "AI in FinTech projected to grow by $22.6 billion with $140B in global productivity gains.",
        details: "The FinTech revolution uses AI to disrupt traditional banking, with deep learning optimizing portfolio management and market predictions. Platforms like Alphasense and Kensho analyze financial data and news using advanced AI. Real-time dashboards provide near-instant insights, enabling faster decision-making. JP Morgan reports 20% reduction in account validation rejection rates from AI implementation. Productivity gains and cost savings reach $140 billion globally.",
        source: "EY - How Artificial Intelligence Is Reshaping the Financial Services Industry (2025)"
    },
    {
        year: 2030,
        field: "finance",
        summary: "Traditional financial institutions achieve $1 trillion in cost reductions through AI.",
        details: "AI automation eliminates repetitive manual tasks, reduces operational overhead by 22% ($1 trillion savings for traditional institutions), and enables revenue enhancement through personalized product recommendations. Customer retention improves with better AI-driven service. Marketing ROI increases by 37% through better targeting. Real-time risk assessment and compliance monitoring become standard. However, challenges remain with data quality, algorithmic transparency, and regulatory accountability.",
        source: "EY - How Artificial Intelligence Is Reshaping the Financial Services Industry (2025)"
    },
    {
        year: 2035,
        field: "finance",
        summary: "AI enhances financial industry value by $1.2 trillion with quantum computing integration.",
        details: "The convergence of quantum computing and artificial intelligence enables financial models of unprecedented complexity and accuracy. Systems simulate millions of market scenarios simultaneously, predict economic trends with high precision, and optimize multi-asset portfolios across global markets. The technology transforms derivatives pricing, risk management, and strategic financial planning. Individual investors have access to institutional-grade tools, fundamentally changing wealth management and retirement planning.",
        source: "Analyzing Alpha - History of AI in Finance (2023)"
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

    // Add source if it exists
    if (event.source) {
        const source = document.createElement('div');
        source.className = 'event-source';
        source.innerHTML = `<strong>Source:</strong> ${event.source}`;
        details.appendChild(source);
    }

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
