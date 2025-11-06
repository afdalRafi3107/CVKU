# CVKU Frontend

Frontend project untuk aplikasi **CVKU** yang dibangun menggunakan **React + TypeScript** dengan bundler **Vite**, state management menggunakan **Zustand & TanStack Query**, validasi menggunakan **Zod**, serta styling menggunakan **TailwindCSS**.

---

## 🚀 Tech Stack

| Category | Tech / Library |
|----------|----------------|
| Framework | React 19, TypeScript |
| Bundler | Vite |
| Styling | TailwindCSS, class-variance-authority, tailwind-merge, tw-animate-css |
| UI Components | Radix UI, lucide-react, react-icons |
| Form Handling | react-hook-form, @hookform/resolvers, zod |
| State Management | Zustand |
| Data Fetching | TanStack React Query |
| Routing | react-router v7 |
| Date Picker | react-datepicker, react-day-picker |
| File / Image Tools | react-dropzone, html2canvas-pro, jspdf, @react-pdf/renderer |
| Email Service | emailjs-com |
| Utilities | date-fns, clsx |
| Dev Tools | ESLint, TypeScript, Vite preview |

---

## 📂 Project Structure

```
.
├── node_modules/
├── public_images/            # Public static assets
├── src/
│   ├── app/                  # Main app setup
│   ├── assets/               # Images, fonts, icons
│   ├── components/           # Reusable components
│   ├── constants/            # Constant values
│   ├── features/             # Feature-based modules
│   │   └── landingPage/
│   │       └── components/
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Helpers, utilities
│   ├── schema/               # Form validation schemas (Zod)
│   ├── Schemas/              # Additional schemas
│   ├── store/                # Zustand store
│   │   └── experienceStore/
│   ├── stores/               # Other store logic
│   ├── styles/               # Global styles
│   ├── types/                # TypeScript types/interfaces
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## 📥 Cara Clone & Menjalankan Project

### 1️⃣ Clone Repository

```sh
git clone https://github.com/afdalRafi3107/CVKU.git
cd CVKU
```

### 2️⃣ Install Dependencies

```sh
npm install
```

atau jika menggunakan **pnpm**:

```sh
pnpm install
```

### 3️⃣ Setup Environment (opsional jika ada API)

Buat file `.env` di root folder dan isi sesuai kebutuhan, contoh:

```
VITE_API_URL=https://api.example.com
```

### 4️⃣ Jalankan Development Server

```sh
npm run dev
```

Aplikasi akan berjalan di:
```
http://localhost:5173
```

### 5️⃣ Build Production

```sh
npm run build
```

### 6️⃣ Preview Build

```sh
npm run preview
```

---

## ✅ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Menjalankan Vite dev server |
| `npm run build` | Build TypeScript + Vite production bundle |
| `npm run preview` | Menjalankan preview hasil build |
| `npm run lint` | Menjalankan ESLint |

---

## 📌 Requirements

- Node.js **v18+**
- npm / pnpm / yarn
- Git

---

## 📄 License

MIT License – bebas digunakan & dikembangkan.

---

## 🤝 Contributing

Pull Request & Issue sangat diterima! Silakan **fork**, buat branch, lalu kirim PR.

---

Jika ingin ditambahkan **badge**, screenshot preview, atau dokumentasi API, cukup beri tahu saya 👍
