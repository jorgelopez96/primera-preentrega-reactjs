import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const productsRef = collection(db, "products");

export const getProducts = async () => {
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductsByCategory = async (categoryId) => {
  const q = query(productsRef, where("category", "==", categoryId));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductById = async (itemId) => {
  const docRef = doc(db, "products", itemId);

  const snapshot = await getDoc(docRef);

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};
