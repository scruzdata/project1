export interface CruiseLine {
  id: string;
  name: string;

  category:
    | "luxury"
    | "premium"
    | "mainstream";

  atmosphere:
    | "relaxed"
    | "classic"
    | "family"
    | "active";

  overallScore: number;

  foodScore: number;

  serviceScore: number;

  shipScore: number;

  entertainmentScore: number;

  tranquilityScore: number;

  valueScore: number;

  averagePassengerAge: string;

  idealFor: string[];

  strengths: string[];

  weaknesses: string[];

  recommended: boolean;

  logo: string;

  image?: string;

  website: string;
}