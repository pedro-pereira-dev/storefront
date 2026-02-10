export type Product = {
  id: string;
  nameKey: string;
  materialKey: string;
  price: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: "serenite-throw",
    nameKey: "product.sereniteThrow.name",
    materialKey: "product.sereniteThrow.material",
    price: "$780",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "lumiere-drape",
    nameKey: "product.lumieredrape.name",
    materialKey: "product.lumieredrape.material",
    price: "$1,250",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "chambre-linen",
    nameKey: "product.chambrelinen.name",
    materialKey: "product.chambrelinen.material",
    price: "$980",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
    ],
  },
];
