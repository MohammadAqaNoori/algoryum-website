// Algoryum Brand Colors & Theme Configuration

export const colors = {
  // Primary Brand Colors
  primary: '#2EBE67',      // Algoryum Green
  primaryDark: '#173253',  // Deep Navy
  secondary: '#243D5D',    // Dark Blue
  emerald: '#21A85E',      // Emerald Green
  lightGreen: '#57D786',   // Light Green
  
  // Neutral Colors
  white: '#FFFFFF',
  background: '#F8FAFC',
  border: '#E9EEF3',
  paragraph: '#5F6F82',
  heading: '#152238',
  
  // Status Colors
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F66',
};

export const gradients = {
  primary: 'linear-gradient(90deg, #2EBE67 0%, #24B463 45%, #173253 100%)',
  hero: 'linear-gradient(135deg, #173253 0%, #214064 55%, #2EBE67 100%)',
  softBackground: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
};

export const theme = {
  colors,
  gradients,
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    section: '80px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
};

export default theme;