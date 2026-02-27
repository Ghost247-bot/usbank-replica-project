# Moonstone Holdings - US Bank Replica

A comprehensive banking application replica built with React, TypeScript, and modern web technologies.

## Project Overview

Moonstone Holdings is a full-featured banking application that provides users with a complete digital banking experience, including account management, transactions, wealth management, and administrative features.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **UI Components**: Tailwind CSS + shadcn/ui
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router v6
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Build Tool**: Vite
- **Package Manager**: npm

## Features

### User Dashboard
- Account overview with balance tracking
- Recent transactions with filtering and export
- Quick actions for transfers, payments, and deposits
- Budget tracking and financial goals
- Spending analytics and insights
- Wealth management integration

### Account Management
- Multiple account types (Checking, Savings, Investment, Escrow)
- Credit card management
- Transaction history and details
- Account settings and preferences

### Wealth Management
- Investment portfolio tracking
- Financial planning tools
- Retirement planning
- Tax planning assistance
- Estate planning services

### Admin Dashboard
- User management and administration
- Account oversight and management
- Transaction monitoring
- Banner and notification management
- System analytics and reporting

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ghost247-bot/usbank-replica-project.git
cd usbank-replica-project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Update .env with your Supabase credentials
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Setup

1. Set up a new Supabase project
2. Run the provided SQL migration scripts in the `supabase/migrations` directory
3. Configure Row Level Security (RLS) policies
4. Set up authentication providers

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Header navigation
│   ├── dashboard/      # Dashboard components
│   ├── admin/          # Admin components
│   └── ui/             # Base UI components
├── pages/              # Page components
│   ├── accounts/       # Account pages
│   ├── wealth/         # Wealth management pages
│   └── ...            # Other pages
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── routes/             # Route configurations
└── types/              # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports static sites, including:
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes with descriptive messages
5. Push to your fork
6. Create a pull request

## Security

- All sensitive data is stored in Supabase with proper RLS policies
- Authentication handled by Supabase Auth
- Environment variables for configuration
- No hardcoded credentials in the codebase

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions:
- Create an issue in the GitHub repository
- Check the documentation
- Review the FAQ section

## Acknowledgments

- Built with modern web technologies
- UI components from shadcn/ui
- Authentication and database by Supabase
- Styling with Tailwind CSS
