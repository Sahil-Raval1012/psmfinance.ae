# PSM Financial Broker Web Application

## Overview

This is a modern full-stack web application for PSM Financial Broker, a premium financial services company in the UAE. The application features a responsive single-page website with contact form functionality, built using React, TypeScript, and Express.js with a clean, professional design focused on the financial services industry.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React + TypeScript with Vite for fast development and building
- **Backend**: Express.js server with TypeScript 
- **Database**: PostgreSQL with Drizzle ORM (currently using memory storage for development)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Client-side routing with Wouter
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components following a UI/business logic separation
- **Design System**: shadcn/ui components with custom theming for financial branding
- **Styling**: Tailwind CSS with custom CSS variables for brand colors (navy, royal blue, steel gray)
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Build Tool**: Vite with optimized production builds

### Backend Architecture
- **API Structure**: RESTful Express.js server with TypeScript
- **Data Layer**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Storage**: Currently using in-memory storage (MemStorage) for development, designed to be easily replaced with database implementation
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Middleware**: Request logging, JSON parsing, and static file serving

### UI Components
The application uses a comprehensive design system with:
- Navigation with smooth scrolling and glass morphism effects
- Hero section with parallax background and call-to-action buttons
- Services showcase with grid layout and hover effects
- About section with gradient backgrounds and feature highlights  
- Gallery section with responsive image grid
- Contact form with validation and submission handling
- Footer with company information and social links

## Data Flow

1. **Contact Form Submission**: 
   - Client-side form validation using React Hook Form
   - Data submission via TanStack Query mutation
   - Server-side validation using Zod schemas
   - Storage in memory (designed for future database integration)
   - Success/error feedback via toast notifications

2. **Content Rendering**:
   - Static content rendered from React components
   - Responsive images loaded from Unsplash CDN
   - Smooth scrolling navigation between sections
   - Mobile-responsive design with hamburger menu

## External Dependencies

### Core Framework Dependencies
- **React 18** with modern hooks and concurrent features
- **TypeScript** for type safety across the entire stack
- **Express.js** for server-side API handling
- **Vite** for fast development and optimized builds

### UI and Styling
- **Tailwind CSS** for utility-first styling
- **Radix UI** components via shadcn/ui for accessible UI primitives
- **Lucide React** for consistent iconography
- **Custom fonts** (Inter) loaded from Google Fonts

### Data Management
- **TanStack Query** for server state management and caching
- **React Hook Form** with Zod resolvers for form handling
- **Drizzle ORM** with PostgreSQL dialect for database operations
- **Zod** for runtime type validation and schema definitions

### Development Tools
- **ESBuild** for server-side bundling
- **PostCSS** with Autoprefixer for CSS processing
- **Replit integrations** for development environment

## Deployment Strategy

The application is configured for deployment with:

1. **Build Process**:
   - Client: Vite builds optimized static assets to `dist/public`
   - Server: ESBuild bundles server code to `dist/index.js`
   - TypeScript compilation with strict checking

2. **Environment Configuration**:
   - Development: Uses Vite dev server with HMR
   - Production: Serves static files from Express server
   - Database: Configured for PostgreSQL via DATABASE_URL environment variable

3. **Scripts**:
   - `npm run dev`: Development server with hot reload
   - `npm run build`: Production build for both client and server
   - `npm start`: Production server startup
   - `npm run db:push`: Database schema deployment via Drizzle

4. **Replit Integration**:
   - Configured for Replit development environment
   - Cartographer plugin for development debugging
   - Runtime error overlay for development

The application is designed to be easily deployable to various platforms with minimal configuration changes, supporting both development and production environments seamlessly.