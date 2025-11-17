# AI Timeline Web App

A interactive timeline web application showcasing the history and projected future of AI in Marketing, Accounting, and Finance.

## 🎓 MIS Class Project

This project demonstrates the evolution of AI across three business fields, with interactive hover effects and field filtering.

## ✨ Features

- **Interactive Timeline**: Events displayed chronologically with visual timeline
- **Hover Expansion**: One-sentence summaries expand to full paragraphs on hover
- **Field Filtering**: Filter events by Marketing, Accounting, or Finance
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **API-Ready**: Structured to easily integrate with external APIs

## 📁 Project Structure

```
timeline-base-code/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript logic and data
└── README.md           # This file
```

## 🚀 Getting Started

### Running Locally

1. Simply open `index.html` in your web browser
2. No build process or server required!

### Using with Live Server (Recommended)

If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📊 Data Structure

Each timeline event follows this format:

```javascript
{
    year: 2020,                    // Year of the event
    field: "marketing",            // Field: "marketing", "accounting", or "finance"
    summary: "Brief one-sentence summary",
    details: "Full paragraph(s) with detailed information..."
}
```

## 🔧 Customization Guide

### Adding New Events

1. Open `script.js`
2. Find the `timelineData` array (starts around line 2)
3. Add your new event:

```javascript
{
    year: 2025,
    field: "marketing",  // or "accounting" or "finance"
    summary: "Your one-sentence summary here.",
    details: "Your detailed paragraph(s) here. You can include multiple sentences with lots of information about this event."
}
```

### Changing Colors

In `styles.css`, you can modify the color schemes:

- **Marketing**: Red theme (search for `#f56565`)
- **Accounting**: Green theme (search for `#48bb78`)
- **Finance**: Blue theme (search for `#4299e1`)
- **Primary Gradient**: Purple theme (search for `#667eea` and `#764ba2`)

### Integrating with an API

The code includes a ready-to-use API integration function. To use it:

1. In `script.js`, find the `loadTimelineFromAPI()` function (line ~162)
2. Call it with your API endpoint:

```javascript
// Add this to your code when you're ready to connect to your API
window.timelineApp.loadFromAPI('https://your-api-endpoint.com/timeline');
```

**API Response Format**:
Your API should return a JSON array of events:

```json
[
    {
        "year": 2020,
        "field": "marketing",
        "summary": "Brief summary",
        "details": "Detailed information"
    },
    {
        "year": 2021,
        "field": "accounting",
        "summary": "Another summary",
        "details": "More details"
    }
]
```

## 🎨 How It Works

### HTML (index.html)
- Sets up the page structure
- Contains header, filter buttons, and timeline container
- Links to CSS and JavaScript files

### CSS (styles.css)
- Creates the visual timeline with center line and dots
- Implements hover effects that expand event cards
- Handles responsive design for mobile devices
- Color-codes each field (Marketing=Red, Accounting=Green, Finance=Blue)

### JavaScript (script.js)
- Stores timeline data in an array
- Dynamically generates HTML for each event
- Handles filter button clicks
- Sorts events by year
- Includes API integration function for future use

## 📱 Responsive Features

- **Desktop**: Two-column layout with alternating left/right events
- **Mobile**: Single column layout with timeline on the left
- Filter buttons stack nicely on small screens

## 🔮 Future Enhancements

Ideas for expanding the project:

1. **API Integration**: Connect to a real backend database
2. **Search Functionality**: Add a search bar to find specific events
3. **Date Range Slider**: Filter events by year range
4. **Admin Panel**: Add/edit/delete events without coding
5. **Export Feature**: Download timeline as PDF or image
6. **Animations**: Add more advanced scroll animations
7. **Dark Mode**: Toggle between light and dark themes
8. **Citations**: Add sources and research links to each event

## 👥 Team Collaboration Tips

- Use Git branches for each team member's work
- Each person can focus on one field's research initially
- Regular commits with clear messages
- Test on different browsers (Chrome, Firefox, Safari)

## 🐛 Troubleshooting

**Events not showing?**
- Check the browser console for errors (F12)
- Verify data format in `script.js`

**Hover not working?**
- Clear browser cache
- Check that CSS file is linked correctly

**Styling looks broken?**
- Ensure `styles.css` is in the same folder as `index.html`
- Check for typos in class names

## 📚 Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactivity and data management
- **No frameworks**: Pure vanilla code for easy understanding

## 📝 License

This is a class project - feel free to modify and expand as needed!

## 🤝 Contributing

This is your project! Add more events, improve the design, and make it your own.

---

**Good luck with your MIS project!** 🎓
