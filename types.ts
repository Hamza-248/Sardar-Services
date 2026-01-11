export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // We will use a string map to resolve Lucide icons
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export interface EstimateResult {
  priceRange: string;
  timeEstimate: string;
  suggestion: string;
  whatsappMessage: string;
}