// src/hooks/useTypingEffect.js
import { useState, useEffect, useRef } from "react";

export default function useTypingEffect(words, typingSpeed = 90, deletingSpeed = 45, pause = 1600) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "deleting"

  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const clear = () => clearTimeout(timeoutRef.current);

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, deletingSpeed);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return clear;
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}