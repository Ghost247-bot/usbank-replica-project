# Environment Setup Instructions

## Create your .env.local file

Since `.env.local` is in .gitignore, you need to create it manually:

### Method 1: Create file manually
1. Create a new file named `.env.local` in the project root
2. Add the following content:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://mkhowtvnvpzvvgpjkkmh.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_u2CFzCeedTWLAILvHReRHw_KI4UWrSA

# Development
NODE_ENV=development
VITE_DEV_MODE=true
```

### Method 2: Using command line
```bash
# In PowerShell (Windows)
echo "NEXT_PUBLIC_SUPABASE_URL=https://mkhowtvnvpzvvgpjkkmh.supabase.co" > .env.local
echo "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_u2CFzCeedTWLAILvHReRHw_KI4UWrSA" >> .env.local
echo "NODE_ENV=development" >> .env.local
echo "VITE_DEV_MODE=true" >> .env.local

# In Bash/Mac/Linux
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=https://mkhowtvnvpzvvgpjkkmh.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_u2CFzCeedTWLAILvHReRHw_KI4UWrSA
NODE_ENV=development
VITE_DEV_MODE=true
EOF
```

## Verify Setup

After creating the file, restart your development server:

```bash
npm run dev
```

The dashboard should now connect to your Supabase database and display real data!
