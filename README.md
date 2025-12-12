# LVV Certifier Training Platform

## Overview

A comprehensive web-based training and certification preparation platform for aspiring **Low Volume Vehicle (LVV) Certifiers** in New Zealand. This application provides structured learning, searchable documentation, testing capabilities, and progress tracking to help participants master the LVVTA certification requirements.

> *"To become an LVV Certifier you will need to be technically skilled, vastly experienced, conscientious, independent, reliable, have good people skills, and a high level of integrity."* - LVVTA

## Features

### 1. Comprehensive PDF Document Database
- **Full catalog** of all LVVTA documents organized by category
- **Direct links** to official PDFs on lvvta.org.nz
- Categories include:
  - Operating Requirements Schedule (ORS) Chapters
  - LVV Standards (Technical Standards)
  - LVV Code
  - Certification Forms
  - Supplementary Information
  - NZ Car Construction Manual (NZCCM)

### 2. Advanced Search Functionality
- **Full-text search** across all document titles, descriptions, and categories
- **Filter by category** (ORS, Standards, Forms, etc.)
- **Quick access** to commonly needed documents
- **Keyword highlighting** in search results

### 3. Structured Learning Modules
Each learning module includes:
- **Overview** - Introduction to the topic
- **Key Concepts** - Core principles and requirements
- **Study Material** - Links to relevant documents
- **Summary** - Condensed key points
- **Self-Assessment** - Check your understanding

### 4. Testing Environment
- **Module quizzes** - Test knowledge after each section
- **Practice exams** - Comprehensive multi-topic assessments
- **Instant feedback** - Correct/incorrect with explanations
- **Score tracking** - Monitor improvement over time
- **Retry capability** - Repeat tests until mastery

### 5. Progress Tracking
- **Visual progress indicators** for each module
- **Completion tracking** - Mark sections as understood
- **Resume capability** - Pick up where you left off
- **Achievement system** - Milestones and badges
- **Export/import progress** - Backup your learning history

### 6. Study Aids
- **Document summaries** - Condensed versions of key documents
- **Quick reference cards** - Essential facts at a glance
- **Glossary** - Technical terms explained
- **Cross-references** - Related documents linked together

## Learning Modules

### Core Modules

1. **Introduction to LVV Certification**
   - What is LVV Certification?
   - Role of LVVTA
   - Legal framework (Land Transport Rules)

2. **Low Volume Vehicle Classifications (ORS Chapter 2)**
   - Vehicle types and categories
   - Classification criteria
   - Scratch-built vs modified vehicles

3. **LVV Certification Categories (ORS Chapter 3)**
   - General Motor Vehicles
   - Heavy Vehicles
   - Off-road & Non-transport Vehicles (ONT)
   - Specialist categories

4. **LVV Certifier Background Criteria (ORS Chapter 4)**
   - Qualifications required
   - Experience requirements
   - Personal attributes

5. **LVV Certifier Application & Appointment (ORS Chapter 5)**
   - Application process
   - Assessment procedures
   - Appointment conditions

6. **The LVV Code**
   - Structure and purpose
   - Legal empowerment
   - Relationship to Land Transport Rules

7. **LVV Standards Overview**
   - Standard numbering system
   - How to read standards
   - Common standards explained

8. **Certification Thresholds**
   - When LVV certification is required
   - Three groups of modifications
   - Border cases and judgments

### Technical Standards Modules

9. **Brakes (LVV Standard 40 series)**
10. **Steering & Suspension (LVV Standard 50 series)**
11. **Structure & Strength (LVV Standard 60 series)**
12. **Engine & Drivetrain (LVV Standard 70 series)**
13. **Electrical Systems (LVV Standard 80 series)**
14. **Fuel Systems & Emissions**
15. **Lighting & Visibility**
16. **Heavy Vehicle Requirements**

## Technology

### Built With
- **HTML5** - Semantic structure
- **CSS3** - Modern responsive design
- **Vanilla JavaScript** - No framework dependencies
- **LocalStorage API** - Progress persistence
- **Service Worker** - Offline capability (optional)

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Installation & Usage

### Local Development
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project
cd html-aerial

# Open in browser
open dist/index.html
# or use a local server
python -m http.server 8000
```

### Deployment
Simply upload the `dist/` folder contents to any web server. No build process required.

## Document Sources

All documents link directly to the official LVVTA website:
- **Main site**: https://lvvta.org.nz
- **Documents page**: https://lvvta.org.nz/documents.html
- **ORS section**: https://lvvta.org.nz/documents.html#ors

## Project Structure

```
dist/
├── index.html           # Main application entry
├── assets/
│   ├── css/
│   │   ├── main.css     # Core styles
│   │   └── app.css      # Application-specific styles
│   ├── js/
│   │   ├── app.js       # Main application logic
│   │   ├── database.js  # PDF document database
│   │   ├── search.js    # Search functionality
│   │   ├── modules.js   # Learning module content
│   │   ├── quiz.js      # Testing environment
│   │   └── progress.js  # Progress tracking
│   └── data/
│       └── documents.json # Document metadata
└── images/
```

## Key Files Explained

### database.js
Contains the complete catalog of LVVTA documents with:
- Document ID, title, and description
- Category and subcategory
- Direct URL to PDF
- Related documents
- Difficulty level
- Key topics covered

### modules.js
Defines learning modules including:
- Module structure and order
- Prerequisites
- Learning objectives
- Content sections
- Quiz questions

### progress.js
Manages user progress:
- Sections completed
- Quiz scores
- Time spent
- Achievements unlocked
- Data export/import

## Usage Guide

### Getting Started
1. Open the application in your browser
2. Click "Start Learning" or browse documents
3. Begin with Module 1: Introduction to LVV Certification
4. Work through modules sequentially or choose specific topics

### Searching Documents
1. Use the search bar at the top of any page
2. Enter keywords (e.g., "brake", "steering", "ORS")
3. Filter results by category if needed
4. Click any result to open the document

### Taking Tests
1. Complete reading a module
2. Click "Take Quiz" at the module end
3. Answer all questions
4. Review your results and explanations
5. Retry until you achieve mastery (80%+ recommended)

### Tracking Progress
- Your progress saves automatically
- Green checkmarks show completed sections
- Progress bars show overall advancement
- View detailed stats in "My Progress" section

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Disclaimer

This is an **unofficial** training aid. While every effort has been made to accurately represent LVVTA documents and requirements, users should:
- Always refer to official LVVTA documents for authoritative information
- Verify current requirements with LVVTA directly
- Use this tool as a study aid, not a replacement for official training

## Links & Resources

- [LVVTA Official Website](https://lvvta.org.nz)
- [LVVTA Documents Page](https://lvvta.org.nz/documents.html)
- [LVV Code](https://lvvta.org.nz/documents/lvv_code/LVV_code.pdf)
- [Operating Requirements Schedule](https://lvvta.org.nz/documents/operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule.pdf)
- [Waka Kotahi NZ Transport Agency](https://www.nzta.govt.nz)

## License

MIT License - See LICENSE file for details

---

*Built to help aspiring LVV Certifiers master their craft and serve New Zealand's vehicle modification community with excellence.*
