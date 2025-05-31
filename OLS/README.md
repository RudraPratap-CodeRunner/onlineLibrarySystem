                             Online Library system
Note: Project is not copied. It is made by me.

1. github Link :https://github.com/RudraPratap-CodeRunner/onlineLibrarySystem

2. How to run 
   A.) Download the project
   B.) npm install
   C.) npm run dev

3. Folder structure
   ols/
├── public/
│                  
│
├── src/
│   ├── assets/                       # Optional: images/icons if added later
│
│   ├── components/                   # Reusable UI components
│   │   ├── Book.jsx
│   │   ├── BookCategory.jsx
│   │   ├── BookList.jsx
│   │   ├── Header.jsx
│   │   ├── PopularBooks.jsx
│   │   ├──welcome.jsx
│
│   ├── pages/                        # Route-level views
│   │   ├── AddBook.jsx
│   │   ├── Browsebooks.jsx
│   │   ├── BookDetails.jsx
│   │   ├── Error.jsx
│   │   └── Home.jsx
│
│   ├── redux/                        # Redux Toolkit setup
│   │   ├── booksSlice.js
│   │   └── store.js
│
│   ├── utils/                        # 
│   │   └── data.js  
│   │    └── mockData.js
│
│   ├── App.jsx                       # Layout + routing outlet
│   ├── main.jsx                      # React app entry with RouterProvider
│   └── styles.css                    # Tailwind CSS and custom styles
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
   
project contains all the required functionalities.   
