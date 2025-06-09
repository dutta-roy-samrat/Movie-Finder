# 🎬 MOVIE-FINDER  
*Discover, curate, and enjoy your movie journey!*

![last-commit](https://img.shields.io/github/last-commit/dutta-roy-samrat/Movie-Finder?style=flat&logo=git&logoColor=white&color=0080ff)
![repo-top-language](https://img.shields.io/github/languages/top/dutta-roy-samrat/Movie-Finder?style=flat&color=0080ff)
![repo-language-count](https://img.shields.io/github/languages/count/dutta-roy-samrat/Movie-Finder?style=flat&color=0080ff)

---

### 🚀 Built with

![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white)

---

## 📑 Table of Contents

- [Overview](#overview)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Usage](#usage)

---

## 📖 Overview

**Movie-Finder** is made for finding movies.
 
### Core features include:

- 🚀 **Responsive UI with Tailwind CSS**:  
  Utilizes Tailwind CSS for a consistent and modern design, streamlining the styling process.

- 🎥 **Seamless API Integration**:  
  Fetches data from [TMDb API](https://www.themoviedb.org/documentation/api), providing real-time movie information.

- ⭐ **User Engagement Features**:  
  Allows users to search movies, mark favorites and filter movies, enhancing interactivity and personalization.

- ⚡ **Optimized Performance**:  
  Implements debouncing and loading indicators to improve user experience during data fetching.

- ❗ **Robust Error Handling**:  
  Provides clear error messages and retry options, ensuring a smooth user experience even during issues.

---

## 🚧 Getting Started

### 📋 Prerequisites

Make sure you have the following installed:

- **Programming Language**: TypeScript  
- **Package Manager**: npm

### 🛠️ Installation

Build Movie-Finder from source and install dependencies:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/dutta-roy-samrat/Movie-Finder
   ```

2. **Navigate to the project directory:**

   ```sh
   cd Movie-Finder
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

### ▶️ Usage

Start the development server:

```sh
npm run dev
```
> **⚠️ Note:** The API currently requires DNS routing through `1.1.1.1` (Cloudflare DNS) to function properly.  
> If you're testing this on a real mobile device or any network where `1.1.1.1` is restricted or overridden, you may not see API responses (e.g., genres list may be empty).

### ✅ To ensure the API works as expected:
- Set your device or system DNS to `1.1.1.1` (Cloudflare) or `8.8.8.8` (Google).
- Alternatively, test using **Chrome DevTools mobile simulator** or a **desktop browser**.

---
