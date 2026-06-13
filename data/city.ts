export interface City {

  id: string;
  
  name: string;
  
  countryId: string;
  
  latitude: number;
  
  longitude: number;
  
  walkingDifficulty:
    | "easy"
    | "moderate"
    | "high";
  
  safety:
  
    1 | 2 | 3 | 4 | 5;
  
  beautyScore: number;
  
  foodScore: number;
  
  historyScore: number;
  
  temperatureSummer: number;
  
  temperatureSpring: number;
  
  recommendedHours: number;
  
  bestMonths: number[];
  
  description: string;
  
  highlights: string[];
  
  coverImage: string;
  }