# ChaiFi ☕️

ChaiFi is a **Patreon-style "Buy Me a Chai"** platform built using **Next.js**. It allows creators to receive support from their audience in the form of "Chai" contributions.

## 🚀 Features
- 🔐 **Authentication** using NextAuth.js
- 💳 **Support creators** by buying them a "Chai"
- 🎨 **Modern UI** with Tailwind CSS
- 🚀 **Next.js App Router** for optimized performance

## 🛠 Tech Stack
- **Frontend & Backend:** Next.js (Full Stack)
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **Deployment:** Vercel

# Clone the repository
git clone https://github.com/puneetsharma0910/Chaifi.git
cd Chaifi

# Install dependencies
npm install

# Set up environment variables
touch .env.local
echo "NEXTAUTH_URL=http://localhost:3000" >> .env.local
echo "NEXTAUTH_SECRET=your_secret_key" >> .env.local

# Run the development server
npm run dev
