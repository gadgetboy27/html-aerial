# Project Blueprint: LVV Certifier Training Platform

## Overview

This document outlines the design, features, and development plan for the LVV Certifier Training Platform. The goal is to create a modern, visually appealing, and intuitive application that helps aspiring Low Volume Vehicle (LVV) Certifiers in New Zealand prepare for their certification.

## Current State: Initial Landing Page

The current focus is on building the initial landing page. This will serve as the foundation for the application and provide a great first impression to users.

### Design and Styling

*   **Component Library:** Chakra UI will be used for its extensive set of accessible and composable React components.
*   **Color Palette:** A professional and trustworthy palette of blues, grays, and whites will be used.
*   **Typography:** The "Inter" font will be used for its clean and modern look. A clear visual hierarchy will be established using different font sizes and weights.
*   **Iconography:** `lucide-react` will be used for clean and modern icons.
*   **Layout:** A grid-based layout with generous spacing will be used to create a clean and uncluttered design.

### Features

The landing page will consist of the following sections:

*   **Header:** A navigation bar with the app's logo and links to "Features", "How it Works", and "Testimonials".
*   **Hero Section:** A welcoming headline, a subheading, and a call-to-action button.
*   **Features Section:** A showcase of the app's key features with icons and short descriptions.
*   **How it Works Section:** A step-by-step guide on how to use the platform.
*   **Testimonials Section:** A section with user testimonials to build social proof.
*   **Footer:** A standard footer with links and copyright information.

## Development Plan

1.  **Setup Chakra UI:** Create a `ChakraProvider` to wrap the application and provide the theme. (Already complete)
2.  **Create Root Layout:** Set up the basic HTML structure in `app/layout.tsx`. (Already complete)
3.  **Build Landing Page:** Create the main landing page file at `app/page.tsx`.
4.  **Develop Components:** Create reusable React components for each section of the landing page:
    *   `Navbar.tsx`
    *   `Hero.tsx`
    *   `Features.tsx`
    *   `HowItWorks.tsx`
    *   `Testimonials.tsx`
    *   `Footer.tsx`
5.  **Style Components:** Apply styles to each component using Chakra UI's props and theme, following the design guidelines.
6.  **Add Assets:** Incorporate icons and any necessary images.
7.  **Review and Refine:** Ensure the landing page is responsive and visually polished.
8.  **Gamified Coaching Features:** Once the landing page is complete, I will begin to implement the gamified coaching features, starting with a user dashboard and progress tracking.
