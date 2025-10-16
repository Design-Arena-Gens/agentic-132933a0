export type SessionDetail = {
  title: string;
  focus: string;
  schedule: string;
  experience: string;
};

export type Program = {
  name: string;
  investment: string;
  capacity: string;
  description: string;
  idealFor: string[];
  sessions: SessionDetail[];
};

export const programs: Program[] = [
  {
    name: "Small Group Strength Pods",
    investment: "$400 / month",
    capacity: "4 women",
    description:
      "Twice-weekly 75-minute sessions fusing tempo strength, posture restoration, and hormonal balance coaching inside intimate cohorts.",
    idealFor: ["Post-baby waist re-sculpt", "Bone density optimization", "Accountability with privacy"],
    sessions: [
      {
        title: "Tuesday Sculpt",
        focus: "Glute-hamstring strength, anti-kyphosis backline work",
        schedule: "Tuesdays · 8:30a or 11:30a",
        experience: "CAROL warm-up, tempo lifts, core breath retraining"
      },
      {
        title: "Friday Renew",
        focus: "Heavy carries, fascial lengthening, lymphatic reset",
        schedule: "Fridays · 9:30a",
        experience: "Infrared finisher, collagen elixir"
      }
    ]
  },
  {
    name: "Signature Studio Classes",
    investment: "$200–$300 / month",
    capacity: "10 guests",
    description:
      "Curated timetable of large-format offerings that remain boutique—smart, sweat-drenched, and camera-ready.",
    idealFor: ["Time-starved founders", "Metabolic conditioning", "Community with discretion"],
    sessions: [
      {
        title: "Restore & Rise",
        focus: "Barre-inspired lengthening and lymphatic flow",
        schedule: "Mondays · 7:00a",
        experience: "Candlelit stretch, subtle sculpt, guided journaling"
      },
      {
        title: "Vigor Reformer",
        focus: "Reformer Pilates for bone loading and posture",
        schedule: "Wednesdays · 10:30a",
        experience: "Emphasis on spinal decompression and glute activation"
      },
      {
        title: "Metabolic Salon",
        focus: "Low-impact intervals, sleek strength, post-class IV drips",
        schedule: "Saturdays · 9:00a",
        experience: "Live DJ, red-light lounge recovery"
      }
    ]
  },
  {
    name: "Private Transformations",
    investment: "$650 / 10 bespoke sessions",
    capacity: "1:1",
    description:
      "Concierge roadmap built around lab work, biometric testing, and your social calendar to ensure results stay discreet yet undeniable.",
    idealFor: ["High-impact leadership roles", "Fast-tracked bridal reset", "Medical-sensitive programming"],
    sessions: [
      {
        title: "Initial Immersion",
        focus: "Comprehensive intake and Dexa review",
        schedule: "By appointment",
        experience: "Lab panel interpretation, macro blueprint, at-home ritual"
      },
      {
        title: "Progressive Sculpt",
        focus: "Strength, fascia, and metabolic recalibration",
        schedule: "Custom cadence",
        experience: "Delivered in-studio or private residence"
      },
      {
        title: "Luminous Finish",
        focus: "Photoshoot prep, collagen therapy, rest strategy",
        schedule: "Two weeks pre-event",
        experience: "Micronutrient IV partnership, lymphatic compression"
      }
    ]
  }
];
