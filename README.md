# Little Known Planet 🌍

A modern travel and experience booking platform built with Next.js 14, TypeScript, Mantine UI, and PostgreSQL. Discover unforgettable experiences around the world and connect with local hosts.

## ✨ Features

- **Beautiful Landing Page** - Hero section with search functionality and featured experiences
- **Experience Browsing** - Filter and search through thousands of experiences
- **Experience Details** - Comprehensive experience pages with reviews and booking
- **User Authentication** - NextAuth with email/password and Google OAuth
- **Secure Payments** - Stripe integration for safe transactions
- **Host Dashboard** - Manage experiences, view earnings, and track bookings
- **Traveler Dashboard** - View bookings, favorites, and travel history
- **Responsive Design** - Mobile-first design that works on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Mantine UI
- **Backend**: Next.js API Routes, Knex.js
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Styling**: Mantine UI with custom theme

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)
- Google OAuth credentials (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arun2k9317/lkp.git
   cd lkp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/little_known_planet

   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here

   # Google OAuth (optional)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # Stripe
   STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

4. **Set up the database**

   ```bash
   # Create database
   createdb little_known_planet

   # Run migrations
   npm run migrate
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboards
│   ├── experiences/       # Experience pages
│   └── page.tsx          # Landing page
├── components/            # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ExperienceCard.tsx
│   ├── SearchBar.tsx
│   └── BookingModal.tsx
├── lib/                   # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Database connection
│   └── stripe.ts         # Stripe configuration
├── migrations/           # Database migrations
└── styles/
    └── theme.ts          # Mantine theme configuration
```

## 🎨 Design System

The app uses a custom Mantine theme with the following color palette:

- **Primary**: #21A6C3 (Cyan blue)
- **Primary Light**: #4EDFFF (Accent highlight)
- **Dark**: #1F1F1F (Base dark)
- **Gray**: #4E4E4E (Neutral gray)
- **Background**: #FFFFFF (Background white)

## 🔧 API Endpoints

### Experiences

- `GET /api/experiences` - List experiences with filters
- `POST /api/experiences` - Create new experience
- `GET /api/experiences/[id]` - Get experience details
- `PUT /api/experiences/[id]` - Update experience
- `DELETE /api/experiences/[id]` - Delete experience

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth endpoints

### Payments

- `POST /api/create-payment-intent` - Create Stripe payment intent
- `POST /api/webhooks/stripe` - Stripe webhook handler

## 🗄️ Database Schema

### Users

- `id` (UUID, Primary Key)
- `name` (String)
- `email` (String, Unique)
- `image` (String, Optional)
- `role` (Enum: TRAVELER, HOST, ADMIN)
- `created_at`, `updated_at` (Timestamps)

### Experiences

- `id` (UUID, Primary Key)
- `title` (String)
- `description` (Text)
- `category` (String)
- `price` (Decimal)
- `location` (String)
- `host_id` (UUID, Foreign Key)
- `images` (JSON Array)
- `rating` (Decimal)
- `max_guests` (Integer)
- `duration_hours` (Integer)
- `created_at`, `updated_at` (Timestamps)

### Bookings

- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key)
- `experience_id` (UUID, Foreign Key)
- `booking_date` (Date)
- `amount` (Decimal)
- `payment_status` (Enum: PENDING, COMPLETED, FAILED, CANCELLED)
- `guest_count` (Integer)
- `created_at`, `updated_at` (Timestamps)

### Reviews

- `id` (UUID, Primary Key)
- `experience_id` (UUID, Foreign Key)
- `user_id` (UUID, Foreign Key)
- `rating` (Integer, 1-5)
- `comment` (Text, Optional)
- `created_at`, `updated_at` (Timestamps)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Mantine](https://mantine.dev/) - React components library
- [Stripe](https://stripe.com/) - Payment processing
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Knex.js](https://knexjs.org/) - SQL query builder

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact us at support@littleknownplanet.com

---

**Discover the world's hidden stories — one experience at a time.** 🌍✨
