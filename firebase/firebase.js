// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react/";
import { updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkEK9dNIqvXzX8aZK0ciMmqz_HLg4xMNs",
  authDomain: "mainproject-26a53.firebaseapp.com",
  projectId: "mainproject-26a53",
  storageBucket: "mainproject-26a53.appspot.com",
  messagingSenderId: "701921980223",
  appId: "1:701921980223:web:4203059fc8649d1c3a2d8a",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = getFirestore();

export const getAllExams = async () => {
  const querySnapshot = await getDocs(collection(db, "All"));
  return querySnapshot;
};

export const getQuestions = async (itemId) => {
  const allQuestions = await getDocs(
    collection(db, "All", itemId, "questions")
  );
  return allQuestions;
};

export const getAllTheory = async () => {
  const querySnapshot = await getDocs(collection(db, "Theory"));
  return querySnapshot;
};

export const getTheoryQuestions = async (itemId) => {
  const allQuestions = await getDocs(
    collection(db, "Theory", itemId, "questions")
  );
  return allQuestions;
};

export const getJamb = async () => {
  const querySnapshot = await getDocs(collection(db, "Jamb"));
  return querySnapshot;
};

export const getJambQuestions = async (itemId) => {
  const allQuestions = await getDocs(
    collection(db, "Jamb", itemId, "questions")
  );
  return allQuestions;
};

export const getBooks = async () => {
  const querySnapshot = await getDocs(collection(db, "Summary"));
  return querySnapshot;
};

export const getBookChapter = async (itemId) => {
  const allQuestions = await getDocs(
    collection(db, "Summary", itemId, "chapters")
  );
  return allQuestions;
};
