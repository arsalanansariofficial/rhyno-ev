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

type Props = { params: Promise<{ vehicleId: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const vehicle = fetchVehicle((await props.params).vehicleId);

  return {
    title: vehicle.name,
    description: vehicle.description
  };
}

export function generateStaticParams() {
  return rhynoEv.main.vehicles.vehicleList.map(vehicle => ({
    vehicleId: vehicle.id
  }));
}

export default async function VehiclePage(props: Props) {
  return <Vehicle vehicle={fetchVehicle((await props.params).vehicleId)} />;
}
