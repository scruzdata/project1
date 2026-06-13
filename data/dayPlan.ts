export interface DayPlanActivity {
  time: string;
  title: string;
  description: string;
  durationMinutes: number;
  category: "viewpoint" | "food" | "museum" | "shopping" | "walk" | "church" | "market";
}

export interface DayPlan {
  cityId: string;
  activities: DayPlanActivity[];
}
  