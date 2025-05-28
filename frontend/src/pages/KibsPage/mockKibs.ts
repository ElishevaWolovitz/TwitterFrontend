import type { KibType } from './types';


export const mockKibs: KibType[] = [
  {
    _id: "kib1",
    kibName: "Morning Thoughts",
    shmoozerId: "user1",
    text: "Today I woke up feeling inspired. Let's do great things!",
    media: "https://example.com/image1.jpg",
    likes: 3,
    createdAt: new Date("2025-05-01T09:00:00Z"),
  },
  {
    _id: "kib2",
    kibName: "Lunch Break",
    shmoozerId: "user2",
    text: "Just had the best falafel ever.",
    media: "",
    likes: 7,
    createdAt: new Date("2025-05-01T12:30:00Z"),
  },
  {
    _id: "kib3",
    kibName: "Evening Vibes",
    shmoozerId: "user1",
    text: "Sunsets and chill music hit differently.",
    media: "https://example.com/image2.jpg",
    likes: 12,
    createdAt: new Date("2025-05-01T20:00:00Z"),
  }
];
