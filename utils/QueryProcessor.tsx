export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ahoney";
  }

  if (query.toLowerCase().includes("andrew id") || query.toLowerCase().includes("andrewid")) {
    return "ahoney";
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 3) {
      const numArray = numbers.map(Number);
      const largest = Math.max(...numArray);
      return largest.toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const num1 = Number(numbers[0]);
      const num2 = Number(numbers[1]);
      return (num1 + num2).toString();
    }
  }

  return "";
}
