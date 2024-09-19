import type { Metadata } from 'next';

import Vehicle from '@/_components/vehicle';

import rhynoEv from '../../public/about/rhyno-ev.json';

export async function generateMetadata(props: {
  params: { vehicleId: string };
}): Promise<Metadata> {
  const vehicle = rhynoEv.pages.vehicles.vehicleList.find(
    vehicle => vehicle.id === props.params.vehicleId
  )!;

  return {
    title: vehicle.name,
    description: vehicle.description
  };
}

export default function VehiclePage(props: { params: { vehicleId: string } }) {
  const vehicleIndex = rhynoEv.pages.vehicles.vehicleList.findIndex(
    vehicle => vehicle.id === props.params.vehicleId
  );

  return <Vehicle vehicleIndex={vehicleIndex} />;
}

export async function generateStaticParams() {
  return rhynoEv.pages.vehicles.vehicleList.map(vehicle => ({
    vehicleId: vehicle.id
  }));
}
