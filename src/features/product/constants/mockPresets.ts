import pinkBackground from "@/assets/presets/pink_preset.png";
import blueBackground from "@/assets/presets/blue_preset.png";
import chaosBackground from "@/assets/presets/chaos_preset.png";

export const presets = [
  {
    id: "1",
    name: "Pink Crown",
    description:
      "Uma coleção de produtos em tons de rosa, perfeitos para quem ama cores vibrantes e ousadas. Destaque-se com estilo e personalidade.",
    background: pinkBackground,
    productId: ["90", "91", "92"],
    titleColor: "text-accent"
  },
  {
    id: "2",
    name: "Blue Light",
    description:
      "Uma coleção de produtos em tons de azul, perfeitos para quem ama cores vibrantes e ousadas. Destaque-se com estilo e personalidade.",
    background: blueBackground,
    productId: ["93", "94", "95"],
    titleColor: "text-accent-blue"

  },
  {
    id: "3",
    name: "Pink Chaos",
    description:
      "Uma coleção de produtos em tons de rosa, perfeitos para quem ama cores vibrantes e ousadas. Destaque-se com estilo e personalidade.",
    background: chaosBackground,
    productId: ["96", "97", "98"],
    titleColor: "text-accent/90"
  },
];
