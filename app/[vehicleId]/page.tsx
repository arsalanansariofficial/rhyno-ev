import type { Metadata } from 'next';

import Vehicle from '@/_components/vehicle';

import rhynoEv from '../../public/about/rhyno-ev.json';

function fetchVehicle(vehicleId: string) {
  const vehicle = rhynoEv.main.vehicles.vehicleList.find(
    vehicle => vehicle.id === vehicleId
  )!;

  if (!vehicle) {
    return rhynoEv.main.vehicles.defaultVehicle;
  }

  return vehicle;
}

export async function generateMetadata(props: {
  params: { vehicleId: string };
}): Promise<Metadata> {
  const vehicle = fetchVehicle(props.params.vehicleId);

  return {
    title: vehicle.name,
    description: vehicle.description
  };
}

export default function VehiclePage(props: { params: { vehicleId: string } }) {
  return <Vehicle vehicle={fetchVehicle(props.params.vehicleId)} />;
}
