import type { KibType } from './types';


export const mockKibs: KibType[] = [
  {
    _id: "kib1",
    kibName: "a",
    shmoozerId: "user1",
    text: "aaa",
    media: "https://a",
    likes: 1,
    createdAt: new Date("2025-05-01T09:00:00Z"),
  },
  {
    _id: "kib2",
    kibName: "b",
    shmoozerId: "user2",
    text: "bbb",
    media: "",
    likes: 2,
    createdAt: new Date("2025-05-01T12:30:00Z"),
  },
  {
    _id: "kib3",
    kibName: "c",
    shmoozerId: "user1",
    text: "ccc",
    media: "https://c",
    likes: 3,
    createdAt: new Date("2025-05-01T20:00:00Z"),
  }
];
