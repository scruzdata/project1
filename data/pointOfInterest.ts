export interface PointOfInterest {
  id: string;
  cityId: string;
  name: string;
  category:
    | "landmark"
    | "museum"
    | "beach"
    | "food"
    | "viewpoint"
    | "market"
    | "church"
    | "ruins";
  description: string;
  durationMinutes: number;
  mustSee: boolean;
}
