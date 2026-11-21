"use client";

export default function ThemeToggle() {
  // Runs when the button is clicked
  function toggleTheme() {
    const html = document.documentElement; // the <html> tag
    // Adds "dark" if it's missing, removes it if it's there.
    // Returns true if the page is now dark.
    const isDark = html.classList.toggle("dark");
    // Remember the choice so the next visit opens in the same mode
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      // aria-label: what screen readers say, since the button has no text
      aria-label="Switch between light and dark mode"
      // nav-link = same hover colour as the other navbar links (from globals.css)
      className="nav-link cursor-pointer transition-colors"
    >
      {/* Moon icon: shown in light mode (click to go dark) */}
      <svg
        className="icon-moon h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Sun icon: shown in dark mode (click to go light) */}
      <svg
        className="icon-sun h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </button>
  );
}
