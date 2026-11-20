import { categoryLabels, categoryOrder } from '../data/site';

export function formatDate(date?: Date): string {
  if (!date) return '';
  return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short' }).format(date);
}

export function formatLongDate(date?: Date): string {
  if (!date) return '';
  return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

export function categoryLabel(category: string): string {
  return categoryLabels[category] ?? category.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function sortCategories(categories: string[]): string[] {
  const known = categoryOrder.filter((category) => categories.includes(category));
  const rest = categories.filter((category) => !known.includes(category)).sort();
  return [...known, ...rest];
}

export function portfolioHref(id: string): string {
  return `/portfolio/${id}/`;
}

export function contributionHref(id: string): string {
  return `/contributions/${id}/`;
}
