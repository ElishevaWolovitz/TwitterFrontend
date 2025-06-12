export type NavListOptionProps = {
  to: string; 
  label: string; 
  nameActiveLink: ({ isActive }: { isActive: boolean }) => string;
};
