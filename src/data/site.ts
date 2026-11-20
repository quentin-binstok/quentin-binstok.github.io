export type SiteLink = {
  label: string;
  href: string;
  icon: 'mail' | 'scholar' | 'github' | 'linkedin' | 'file';
  external?: boolean;
};

export const site = {
  name: 'Quentin Binstok',
  shortName: 'QB',
  role: 'Engineering physics & numerical methods',
  description:
    "Quentin Binstok's website — engineering physics, numerical methods and computational physics.",
  url: 'https://quentin-binstok.github.io',
  pronouns: 'he/him',
  bio: "I'm an engineering physics student in 2nd year of master's, specializing in numerical methods for continuum mechanics and CFD.",
  location: 'Liège, Belgium',
  employer: 'ULiège',
  email: 'quentin.binstok@proton.me',
  avatar: '/images/profile.png',
  cv: '/files/CV_Binstok_english.pdf',
};

export const links: SiteLink[] = [
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=VBZkVEkAAAAJ',
    icon: 'scholar',
    external: true,
  },
  { label: 'GitHub', href: 'https://github.com/quentin-binstok', icon: 'github', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/quentin-binstok',
    icon: 'linkedin',
    external: true,
  },
  { label: 'Curriculum vitae', href: site.cv, icon: 'file', external: true },
];

export const navigation = [
  { label: 'Index', href: '/', number: '01' },
  { label: 'Portfolio', href: '/portfolio/', number: '02' },
  { label: 'Contributions', href: '/contributions/', number: '03' },
  { label: 'CV', href: site.cv, number: '04', external: true },
];

export const categoryOrder = ['publications', 'manuscripts', 'conferences', 'posters', 'talks', 'teaching', 'other'];

export const categoryLabels: Record<string, string> = {
  publications: 'Publications',
  manuscripts: 'Journal articles',
  conferences: 'Conference papers',
  posters: 'Posters',
  talks: 'Talks',
  teaching: 'Teaching',
  other: 'Other',
};
