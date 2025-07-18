import React, { useEffect, useState } from 'react'

const buttonStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  background: 'var(--surface)',
  color: 'var(--text-primary)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  border: '2px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  cursor: 'pointer',
  zIndex: 2000,
  transition: 'background 0.2s, color 0.2s',
};

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // On mount, set dark mode by default or from localStorage
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.body.classList.remove('dark');
      setDark(false);
    } else {
      document.body.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme} aria-label="Toggle dark mode">
      {dark ? '🌞' : '🌙'}
    </button>
  );
} 