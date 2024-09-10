import type { Metadata } from 'next';

import Vehicle from '@/_components/vehicle';
import rhynoEv from '../../../public/about/rhyno-ev.json';

type Props = {
  params: {
    vehicleId: string;
  };
};

export async function generateStaticParams() {
  return rhynoEv.pages.vehicles.vehicleList.map(vehicle => ({
    vehicleId: vehicle.id
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vehicle = rhynoEv.pages.vehicles.vehicleList.find(
    vehicle => vehicle.id === params.vehicleId
  )!;

  return {
    title: vehicle.name,
    description: vehicle.description
  };
}

export default function VehiclePage({ params }: Props) {
  const vehicleIndex = rhynoEv.pages.vehicles.vehicleList.findIndex(
    vehicle => vehicle.id === params.vehicleId
  );

  return <Vehicle vehicleIndex={vehicleIndex} />;
}
