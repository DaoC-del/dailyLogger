export type LogEntry = {
  id: string;
  timestamp: Date;
  category: string;
  tags?: string[];
};

export type LocationChangeLog = LogEntry & {
  from: string;
  to: string;
  distance?: number;
  transportMode?: string;
};

export type VideoLog = LogEntry & {
  platform: string;
  videoId: string;
  title: string;
  duration: number;
  url: string;
};

export type TravelLog = LogEntry & {
  departure: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
};

export type ShoppingLog = LogEntry & {
  store: string;
  items: { name: string; quantity: number; price: number }[];
  totalPrice: number;
};

export type DailyLifeLog = LogEntry & {
  activity: string;
};
