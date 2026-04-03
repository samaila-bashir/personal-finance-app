import avatarDanielCarter from "@/assets/images/avatars/daniel-carter.jpg"
import avatarEmmaRichardson from "@/assets/images/avatars/emma-richardson.jpg"
import avatarSavoryBites from "@/assets/images/avatars/savory-bites-bistro.jpg"
import avatarSunPark from "@/assets/images/avatars/sun-park.jpg"
import avatarUrbanServices from "@/assets/images/avatars/urban-services-hub.jpg"

import type { Transaction } from "./types"

export const TRANSACTIONS: Transaction[] = [
  {
    id: "emma-richardson-2024-08-19",
    name: "Emma Richardson",
    category: "General",
    date: "19 Aug 2024",
    amount: "+$75.50",
    isPositive: true,
    avatarSrc: avatarEmmaRichardson,
  },
  {
    id: "savory-bites-bistro-2024-08-19",
    name: "Savory Bites Bistro",
    category: "Dining Out",
    date: "19 Aug 2024",
    amount: "-$55.50",
    isPositive: false,
    avatarSrc: avatarSavoryBites,
  },
  {
    id: "daniel-carter-2024-08-18",
    name: "Daniel Carter",
    category: "General",
    date: "18 Aug 2024",
    amount: "-$42.30",
    isPositive: false,
    avatarSrc: avatarDanielCarter,
  },
  {
    id: "sun-park-2024-08-17",
    name: "Sun Park",
    category: "General",
    date: "17 Aug 2024",
    amount: "+$120.00",
    isPositive: true,
    avatarSrc: avatarSunPark,
  },
  {
    id: "urban-services-hub-2024-08-17",
    name: "Urban Services Hub",
    category: "General",
    date: "17 Aug 2024",
    amount: "-$65.00",
    isPositive: false,
    avatarSrc: avatarUrbanServices,
  },
  {
    id: "liam-hughes-2024-08-15",
    name: "Liam Hughes",
    category: "Groceries",
    date: "15 Aug 2024",
    amount: "+$65.75",
    isPositive: true,
    avatarSrc: avatarDanielCarter,
  },
  {
    id: "lily-ramirez-2024-08-14",
    name: "Lily Ramirez",
    category: "General",
    date: "14 Aug 2024",
    amount: "+$50.00",
    isPositive: true,
    avatarSrc: avatarEmmaRichardson,
  },
  {
    id: "ethan-clark-2024-08-13",
    name: "Ethan Clark",
    category: "Dining Out",
    date: "13 Aug 2024",
    amount: "-$32.50",
    isPositive: false,
    avatarSrc: avatarSunPark,
  },
  {
    id: "james-thompson-2024-08-11",
    name: "James Thompson",
    category: "Entertainment",
    date: "11 Aug 2024",
    amount: "-$5.00",
    isPositive: false,
    avatarSrc: avatarUrbanServices,
  },
  {
    id: "pixel-playground-2024-08-11",
    name: "Pixel Playground",
    category: "Entertainment",
    date: "11 Aug 2024",
    amount: "-$10.00",
    isPositive: false,
    avatarSrc: avatarSavoryBites,
  },
]
