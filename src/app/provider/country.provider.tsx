import { FiltersProvider } from '@/entities/country/filter';
import { SearchProvider } from '@/entities/country/search';

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <FiltersProvider>
    <SearchProvider>{children}</SearchProvider>
  </FiltersProvider>
);
