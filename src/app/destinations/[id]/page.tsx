import { redirect } from "next/navigation";
import { cities } from "@/data/cities";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return cities.map((c) => ({ id: c.id }));
}

export default async function DestinationDetailPage({ params }: Props) {
  const { id } = await params;
  redirect(`/cities/${id}`);
}
