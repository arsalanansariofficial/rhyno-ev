import type { Metadata } from 'next';

import Vehicle from '@/_components/vehicle';
import rhynoEv from '../../../public/about/rhyno-ev.json';

type Props = {
  params: {
    vehicleId: string;
  };
};

export type App_Vehicle = {
  id: string;
  name: string;
  image: string;
  colors: string;
  description: string;
  specs: {
    title: string;
    value: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  batteryFeatures: {
    title: string;
    description: string;
  }[];
};

export async function generateStaticParams() {
  return rhynoEv.pages.vehicles.vehicleList.map(vehicle => ({
    vehicleId: vehicle.id
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vehicle = rhynoEv.pages.vehicles.vehicleList.find(
    vehicle => vehicle.id === params.vehicleId
  ) as App_Vehicle;

  return {
    title: vehicle.name,
    description: vehicle.description
  };
}

export default function VehiclePage({ params }: Props) {
  const vehicle = rhynoEv.pages.vehicles.vehicleList.find(
    vehicle => vehicle.id === params.vehicleId
  ) as App_Vehicle;

  return <Vehicle vehicle={vehicle} />;
}
