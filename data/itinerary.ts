export interface Itinerary {

  id: string;

  name: string;

  score: number;

  durationMin: number;

  durationMax: number;

  departurePorts: string[];

  destinationIds: string[];

  bestMonths: number[];

  difficulty:
    | "easy"
    | "moderate"
    | "active";

  idealFor: string[];

  highlights: string[];

  image: string;
}