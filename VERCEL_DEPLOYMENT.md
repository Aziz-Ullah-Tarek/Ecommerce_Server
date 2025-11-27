# ShopHub Backend - Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com with azizullat2002@gmail.com)
- MongoDB Atlas database (already configured)
- Backend code ready in GitHub

## Step 1: Push Backend to GitHub

```bash
cd backend
git add .
git commit -m "Prepare backend for Vercel deployment"
git push
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
# Enter: azizullat2002@gmail.com
```

3. **Deploy from backend directory**
```bash
cd backend
vercel
```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name: **shophub-backend**
   - In which directory is your code? **./** (current directory)
   - Want to override settings? **N**

5. **Deploy to production**
```bash
vercel --prod
```

### Option B: Using Vercel Dashboard (Alternative)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Sign in with azizullat2002@gmail.com

2. **Import Git Repository**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Select the repository containing your backend

3. **Configure Project**
   - **Project Name:** shophub-backend
   - **Framework Preset:** Other
   - **Root Directory:** Select `backend` folder
   - **Build Command:** Leave empty
   - **Output Directory:** Leave empty

4. **Environment Variables**
   Click "Environment Variables" and add:
   
   ```
   MONGODB_URI = mongodb+srv://your-connection-string
   JWT_SECRET = your-jwt-secret-key
   NODE_ENV = production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

## Step 3: Environment Variables

Add these environment variables in Vercel Dashboard:

1. Go to your project settings
2. Click "Environment Variables"
3. Add the following:

| Variable | Value |
|----------|-------|
| MONGODB_URI | Your MongoDB Atlas connection string |
| JWT_SECRET | Your JWT secret key |
| NODE_ENV | production |

## Step 4: Get Your Backend URL

After deployment, Vercel will provide a URL like:
```
https://shophub-backend.vercel.app
```

## Step 5: Update Frontend

Update your frontend `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://shophub-backend.vercel.app/api
```

## Step 6: Configure CORS (if needed)

If you need to update CORS origins, edit `server.js`:

```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'],
  credentials: true
}));
```

## Important Notes

1. **Free Tier Limits:**
   - Vercel Free: 100GB bandwidth/month
   - Serverless function timeout: 10 seconds
   - Good for development and small projects

2. **MongoDB Atlas:**
   - Ensure your MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
   - Or add Vercel's IP ranges to whitelist

3. **Cold Starts:**
   - First request after inactivity may be slow (serverless)
   - Subsequent requests will be fast

## Troubleshooting

### Error: Cannot find module
- Make sure all dependencies are in `package.json` (not devDependencies)
- Run `npm install` locally to verify

### Database Connection Error
- Check MongoDB Atlas network access
- Verify MONGODB_URI is correct in Vercel environment variables
- Ensure IP whitelist includes 0.0.0.0/0

### CORS Errors
- Update CORS configuration to include your frontend domain
- Make sure credentials are properly configured

## Testing Your Deployment

Test your API endpoints:

1. **Root endpoint:**
```bash
curl https://shophub-backend.vercel.app/
```

2. **Products endpoint:**
```bash
curl https://shophub-backend.vercel.app/api/products
```

3. **Test in browser:**
Open: https://shophub-backend.vercel.app/

## Useful Commands

```bash
# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel rm [deployment-url]

# Check project details
vercel inspect
```

## Next Steps

1. ✅ Backend deployed on Vercel
2. Update frontend `NEXT_PUBLIC_API_URL` with Vercel backend URL
3. Test all API endpoints
4. Deploy frontend (separate deployment)

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**Project:** ShopHub Backend  
**Email:** azizullat2002@gmail.com  
**Platform:** Vercel
