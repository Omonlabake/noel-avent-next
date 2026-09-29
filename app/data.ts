export type Genre = "remise" | "cadeau" | "livraison";
export type Jour = { genre: Genre; titre: string };

export const genreLabel: Record<Genre, string> = {
  remise: "Réduction",
  cadeau: "Cadeau offert",
  livraison: "Livraison et service",
};

export const jours: Jour[] = [
  { genre: "remise", titre: "10 % de réduction sur votre panier" },
  { genre: "cadeau", titre: "Une carte de vœux illustrée offerte" },
  { genre: "livraison", titre: "Livraison offerte dès 40 €" },
  { genre: "remise", titre: "15 % sur l'Avent Thé & Tisanes" },
  { genre: "cadeau", titre: "Un sachet de chocolat chaud offert" },
  { genre: "remise", titre: "12 % sur l'Avent Gourmand" },
  { genre: "cadeau", titre: "Ruban et étiquette à votre nom" },
  { genre: "livraison", titre: "Emballage cadeau offert" },
  { genre: "remise", titre: "15 % sur l'Avent des Petits Explorateurs" },
  { genre: "cadeau", titre: "Une mini-bougie parfumée offerte" },
  { genre: "remise", titre: "10 % dès 2 coffrets dans le panier" },
  { genre: "livraison", titre: "Livraison express offerte" },
  { genre: "cadeau", titre: "Une tasse de Noël offerte dès 60 €" },
  { genre: "remise", titre: "18 % sur l'Avent Douceur" },
  { genre: "cadeau", titre: "Un carnet de recettes de fêtes offert" },
  { genre: "remise", titre: "10 % de réduction sur votre panier" },
  { genre: "livraison", titre: "Retours prolongés jusqu'au 15 janvier" },
  { genre: "cadeau", titre: "Un sachet de sablés offert" },
  { genre: "remise", titre: "20 % sur le deuxième coffret" },
  { genre: "livraison", titre: "Livraison offerte, commande garantie avant Noël" },
  { genre: "cadeau", titre: "Une guirlande lumineuse offerte dès 70 €" },
  { genre: "remise", titre: "25 % sur un coffret au choix" },
  { genre: "livraison", titre: "Livraison express offerte, dernier jour" },
  { genre: "cadeau", titre: "La surprise du 24 : un coffret miniature offert" },
];

export type Coffret = {
  id: string;
  nom: string;
  desc: string;
  contenu: string[];
  prix: number;
  ancien: number;
  tag: string;
  stock: number;
  from: string;
  to: string;
};

export const SEUIL_LIVRAISON = 60;

export const euro = (n: number) => `${n} €`;

export const coffrets: Coffret[] = [
  {
    id: "gourmand",
    nom: "Avent Gourmand",
    desc: "24 chocolats et pralinés d'artisans, un par fenêtre.",
    contenu: ["24 chocolats", "Boîte illustrée", "Ruban offert"],
    prix: 39,
    ancien: 49,
    tag: "Le plus offert",
    stock: 23,
    from: "#7a2e1d",
    to: "#d9793a",
  },
  {
    id: "explorateurs",
    nom: "Avent des Petits Explorateurs",
    desc: "24 mini-jouets à construire, coller et inventer dès 4 ans.",
    contenu: ["24 mini-jouets", "Livret d'histoires", "Dès 4 ans"],
    prix: 34,
    ancien: 42,
    tag: "Pour les enfants",
    stock: 31,
    from: "#1f5c4a",
    to: "#4fa383",
  },
  {
    id: "douceur",
    nom: "Avent Douceur",
    desc: "24 soins visage, corps et mini-bougies pour se faire du bien.",
    contenu: ["24 soins et bougies", "Formules douces", "Pochette cadeau"],
    prix: 59,
    ancien: 79,
    tag: "Coup de cœur",
    stock: 12,
    from: "#8a2b4a",
    to: "#e07a94",
  },
  {
    id: "the",
    nom: "Avent Thé & Tisanes",
    desc: "24 infusions bio à préparer chaque soir de décembre.",
    contenu: ["24 infusions bio", "Fiches de dégustation", "Sans théine (12)"],
    prix: 29,
    ancien: 36,
    tag: "Petit prix",
    stock: 40,
    from: "#2b3f7a",
    to: "#6f8be0",
  },
];

export const avis = [
  {
    nom: "Aminata K.",
    texte:
      "Mes deux filles se sont battues pour ouvrir la case du jour, chaque matin. Le coffret Explorateurs a tenu jusqu'au 24.",
    note: 5,
  },
  {
    nom: "Romain D.",
    texte:
      "Commandé le 12 novembre, reçu en 3 jours. Les chocolats sont vraiment bons et la boîte est belle sur l'étagère.",
    note: 5,
  },
  {
    nom: "Sophie L.",
    texte:
      "J'ai offert l'Avent Douceur à ma mère. Elle m'a appelée presque tous les soirs pour me raconter la fenêtre du jour.",
    note: 5,
  },
];

export const faq = [
  {
    q: "Comment fonctionnent les fenêtres d'offres ?",
    r: "Chaque jour du 1er au 24 décembre, une nouvelle fenêtre s'ouvre sur cette page. Vous y trouvez une réduction, un cadeau ou un avantage de livraison à utiliser le jour même.",
  },
  {
    q: "Puis-je ouvrir une fenêtre après sa date ?",
    r: "Oui. Les fenêtres déjà ouvertes restent visibles, mais une offre du jour se termine à minuit. Le code affiché est valable ce jour-là.",
  },
  {
    q: "Quand vais-je recevoir mon calendrier ?",
    r: "Les commandes passées avant le 15 décembre sont livrées avant le 24. Après cette date, choisissez la livraison express.",
  },
  {
    q: "Puis-je retourner un coffret ?",
    r: "Oui, tant que le coffret est fermé et intact, vous pouvez le retourner jusqu'au 15 janvier. Le remboursement est fait sous 5 jours.",
  },
  {
    q: "Comment offrir un calendrier à quelqu'un ?",
    r: "Ajoutez l'emballage cadeau au panier et indiquez l'adresse de la personne. Nous glissons une carte avec votre message.",
  },
];