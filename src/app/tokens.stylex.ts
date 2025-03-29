import * as stylex from '@stylexjs/stylex';

export const tokens = stylex.defineVars({
  primaryColor: '#2563eb',
  secondaryColor: '#64748b',
  accentColor: '#06b6d4',
  backgroundColor: '#ffffff',
  backgroundAlt: '#f8fafc',
  cardBackground: '#ffffff',
  textPrimary: '#1e293b',
  textSecondary: '#475569',
  textLight: '#64748b',
  borderColor: '#e2e8f0',
  skillFilled: '#2563eb',
  skillEmpty: '#e2e8f0',
  
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  fontHeading: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  
  spacingXs: '0.25rem',
  spacingSm: '0.5rem',
  spacingMd: '1rem',
  spacingLg: '1.5rem',
  spacingXl: '2rem',
  spacing2xl: '3rem',
  
  borderRadius: '0.375rem',
  borderRadiusLg: '0.5rem',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  boxShadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  
  transition: '0.2s ease-in-out',
});
