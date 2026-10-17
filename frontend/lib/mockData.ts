export const baseTrend = [
  { week: "07 Jan", price: 1145 },
  { week: "21 Jan", price: 1136 },
  { week: "03 Feb", price: 1151 },
  { week: "18 Feb", price: 1176 },
  { week: "04 Mar", price: 1161 },
  { week: "18 Mar", price: 1160 },
  { week: "08 Apr", price: 1170 },
  { week: "27 Apr", price: 1184 },
  { week: "06 May", price: 1171 },
  { week: "20 May", price: 1078 },
  { week: "03 Jun", price: 1074 },
  { week: "17 Jun", price: 1043 },
  { week: "01 Jul", price: 1071 },
  { week: "15 Jul", price: 1047 },
  { week: "28 Jul", price: 1088 },
  { week: "05 Aug", price: 1073 },
];

export const gradeFactor: Record<string, number> = {
  BOP: 1,
  BOPF: 0.95,
  PEKOE: 1.2,
  OP1: 1.8,
  FBOP: 1.35,
};

export const regionFactor: Record<string, number> = {
  Uva: 1,
  "Nuwara Eliya": 1.05,
  Western: 1.1,
  Udapussellawa: 0.92,
  "Low Grown": 1.15,
};

export function seriesFor(grade: string, region = "Uva") {
  const factor = (gradeFactor[grade] ?? 1) * (regionFactor[region] ?? 1);
  return baseTrend.map((p) => ({
    week: p.week,
    price: Math.round(p.price * factor),
  }));
}