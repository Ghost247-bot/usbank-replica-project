# Vercel Deployment Guide

## Prerequisites
- Vercel account
- GitHub repository connected to Vercel
- Supabase project configured

## Environment Variables

### Required Environment Variables for Vercel
Set these in your Vercel dashboard under Project Settings > Environment Variables:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Database URL (for server-side operations)
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.your-project.supabase.co:5432/postgres

# Feature Flags
VITE_ENABLE_REAL_TIME=true
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_REPORTING=true
VITE_ENABLE_CHAT_SUPPORT=false
VITE_ENABLE_BIOMETRIC_AUTH=false

# API Configuration
VITE_API_BASE_URL=
VITE_API_TIMEOUT=30000
VITE_API_RETRY_ATTEMPTS=3

# Monitoring & Performance
VITE_ENABLE_PERFORMANCE_MONITORING=true
VITE_SENTRY_DSN=
VITE_ENABLE_BUNDLE_ANALYZER=false
VITE_CHUNK_SIZE_WARNING_LIMIT=1000

# Development Settings
VITE_NODE_ENV=production
VITE_LOG_LEVEL=info
```

## Deployment Steps

### 1. Connect Repository to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." > "Project"
3. Import your GitHub repository
4. Vercel will automatically detect the framework (Vite)

### 2. Configure Build Settings
Vercel will automatically use the settings from `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Set Environment Variables
1. Go to Project Settings > Environment Variables
2. Add all the required variables from the section above
3. Make sure to select the appropriate environments (Production, Preview, Development)

### 4. Deploy
1. Push changes to your repository
2. Vercel will automatically trigger a deployment
3. Monitor the build process in the Vercel dashboard

## Post-Deployment Checklist

### 1. Verify Build
- [ ] Build completes successfully
- [ ] All assets are properly loaded
- [ ] No 404 errors for static assets

### 2. Test Functionality
- [ ] Authentication works with Supabase
- [ ] All pages load correctly
- [ ] API endpoints respond properly
- [ ] Real-time features work if enabled

### 3. Performance Check
- [ ] Core Web Vitals are within acceptable ranges
- [ ] Bundle sizes are optimized
- [ ] Caching headers are properly set

### 4. Security
- [ ] Environment variables are not exposed
- [ ] Supabase RLS policies are working
- [ ] No sensitive data in client-side code

## Troubleshooting

### Common Issues

#### Build Failures
1. **Node Version**: Ensure Vercel is using Node.js 18+
2. **Dependencies**: Check if all dependencies are properly installed
3. **TypeScript**: Verify TypeScript compilation succeeds

#### Runtime Issues
1. **Environment Variables**: Double-check all required variables are set
2. **Supabase Connection**: Verify Supabase URL and keys are correct
3. **CORS**: Check Supabase CORS settings allow your Vercel domain

#### Performance Issues
1. **Bundle Size**: Check if bundle sizes are too large
2. **Image Optimization**: Ensure images are properly optimized
3. **Caching**: Verify caching headers are working

### Debug Commands
```bash
# Local build test
npm run build

# Preview local build
npm run preview

# Check bundle analyzer
npm run build:analyze
```

## Custom Domain Setup

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate provisioning

## Monitoring

### Vercel Analytics
- Enable in Project Settings > Analytics
- Monitor page views and performance
- Set up alerts for errors

### Error Tracking
- Configure Sentry if using `VITE_SENTRY_DSN`
- Monitor error rates and types
- Set up alerts for critical errors

## Rollback Procedures

### Quick Rollback
1. Go to the Deployments tab in Vercel
2. Find the previous successful deployment
3. Click "..." > "Promote to Production"

### Git Rollback
```bash
# Reset to previous commit
git reset --hard HEAD~1

# Force push (use with caution)
git push --force-with-lease
```

## Best Practices

1. **Environment Management**: Use different environments for development, staging, and production
2. **Variable Security**: Never commit sensitive environment variables to git
3. **Performance**: Regularly monitor bundle sizes and performance metrics
4. **Testing**: Test thoroughly in preview environments before promoting to production
5. **Backups**: Regularly backup your Supabase database

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- Project Issues: Create GitHub issues for deployment problems
