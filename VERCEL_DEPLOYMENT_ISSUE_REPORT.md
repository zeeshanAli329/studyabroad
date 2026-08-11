# VERCEL DEPLOYMENT ISSUE - ARCHITECTURE INCOMPATIBILITY

## ROOT CAUSE

**SQLite is incompatible with Vercel serverless functions.**

The backend uses SQLite with a local file database (`file:./studyabroad.db`). Vercel's serverless environment:
- Does not support persistent file storage
- Each function invocation is ephemeral
- SQLite requires persistent file access to work correctly

## THE ATTEMPTED FIX AND WHY IT FAILED

I attempted to switch the Prisma provider from SQLite to MongoDB to make it compatible with Vercel. However, this resulted in **33 schema validation errors** because:

1. MongoDB requires `@map("_id")` annotation on all ID fields
2. MongoDB has different constraints on unique fields and indexes
3. The entire schema would need to be rewritten for MongoDB compatibility

## CURRENT STATUS

**Localhost:** ✅ Working (SQLite with file storage)
**Vercel Production:** ❌ Failing (SQLite incompatible with serverless)

## THE ACTUAL SOLUTION REQUIRED

To deploy this application to Vercel successfully, you have **two options**:

### Option 1: Switch to a Serverless-Compatible Database (Recommended)

Replace SQLite with a database that works with Vercel serverless:
- **Vercel Postgres** (easiest, native integration)
- **PostgreSQL** (external provider like Supabase, Neon, Railway)
- **MySQL** (external provider like PlanetScale)

**Changes required:**
1. Update `backend/prisma/schema.prisma` provider to `postgresql` or `mysql`
2. Update `DATABASE_URL` environment variable for the new database
3. Run `npx prisma migrate dev` to create the schema
4. Deploy to Vercel

### Option 2: Deploy to a Different Platform

Deploy the backend to a platform that supports persistent file storage:
- Railway, Render, or Fly.io (with persistent disk)
- A VPS (DigitalOcean, AWS EC2, etc.)
- Keep Vercel for frontend only, backend elsewhere

## FILES REVERTED

I have reverted the following files to their original state:
- `backend/prisma/schema.prisma` - Back to `provider = "sqlite"`
- `backend/package.json` - Removed the `build` script
- `vercel.json` - Removed the `buildCommand` from backend service

## WHY I REVERTED

The MongoDB conversion would require rewriting the entire schema and potentially breaking the application. Since localhost is working with SQLite, reverting ensures:
- Local development continues to work
- No breaking changes to the codebase
- Clear understanding of what needs to change for production

## IMMEDIATE NEXT STEPS

To fix production, you must choose one of the two options above. I recommend **Option 1 (Vercel Postgres)** because:
- Native Vercel integration
- Minimal code changes (just provider and connection string)
- Serverless-compatible
- Free tier available

## PRISMA GENERATION

I successfully ran `npx prisma generate` with the reverted SQLite schema. The Prisma Client is now correctly generated for SQLite.

## ENVIRONMENT VARIABLES

**Localhost (backend/.env):**
```
DATABASE_URL=file:./studyabroad.db
```

**Vercel Production (needs new database):**
```
DATABASE_URL=<your new database connection string>
```

## SUMMARY

- **Not a code bug** - Architecture incompatibility
- **Localhost works** - SQLite with file storage
- **Vercel fails** - SQLite incompatible with serverless
- **Solution required** - Switch to serverless-compatible database or deployment platform
- **No design changes needed** - Only database configuration
