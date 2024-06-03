// Components
import { Layout } from '@/components/navigation';
import { Mapbox, Info } from '@/components/map';

// Types
import type { Location } from '@/lib/types';

// Utilities
import { fetchLocations } from '@/actions/fetchContent';

const MapPage = async () => {
  const locations = await fetchLocations();

  return (
    <Layout fullscreen>
      <Mapbox locations={locations as unknown as Location[]} />
      <Info locations={locations as unknown as Location[]} />
    </Layout>
  );
};

export default MapPage;