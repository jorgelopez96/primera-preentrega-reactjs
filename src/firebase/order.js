import { db } from "./firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ordersRef = collection(db, "orders");

export const createOrder = async (orderData) => {
  const docRef = await addDoc(ordersRef, {
    ...orderData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};
