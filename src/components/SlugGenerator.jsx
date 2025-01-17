import { generateSlug } from "random-word-slugs";

function SlugGenerator(difficulty) {
  let slug;
  if (difficulty === "easy") {
    slug = generateSlug(1, {
      format: "title",
      partsOfSpeech: ["noun"],
      categories: {
        adjective: [],
        noun: ["animals", "food"],
      },
    });
  } else if (difficulty === "medium") {
    slug = generateSlug(2, {
      format: "title",
      partsOfSpeech: ["adjective", "noun"],
      categories: {
        adjective: ["color"],
        noun: ["animals", "food"],
      },
    });
  } else {
    slug = generateSlug(3, {
      format: "title",
      partsOfSpeech: ["adjective", "adjective", "noun"],
      categories: {
        adjective: ["color", "shape"],
        noun: ["animals", "food", "profession"],
      },
    });
  }
  return slug;
}

export default SlugGenerator;