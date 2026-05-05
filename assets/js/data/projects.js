export default [
  {
    title: "Sentiment Analysis",
    desc: "A machine learning project that analyzes text data to determine the underlying emotional tone (positive, negative, or neutral), providing insights into user feedback and social media trends.",
    tech: ["Python", "NLTK", "Scikit-learn", "Flask"],
    challenge: "Handling the inherent ambiguity of human language and sarcasm in social media text, which often leads to misclassification in standard models.",
    solution: "Implemented a multi-stage preprocessing pipeline consisting of tokenization, lemmatization, and sentiment-aware weighting using NLTK and refined Scikit-learn classifiers.",
    live: "",
    code: "https://github.com/PandeyShalini/sentiment-analysis-web-app.git",
  },
  {
    title: "DocuMind AI",
    desc: "A SaaS RAG chatbot capable of querying entire document libraries with 100% source grounding. Features multi-stage retrieval (Vector Search + Cohere Re-ranking) and a split-viewer interface for real-time PDF interaction and page-level citation mapping.",
    tech: ["React", "Node.js", "Pinecone", "Google Gemini", "Cohere"],
    challenge: "Minimizing LLM hallucinations in high-stakes document retrieval and ensuring that citations point to the exact page and paragraph in large PDFs.",
    solution: "Developed a hybrid retrieval system using Pinecone for vector search combined with Cohere for re-ranking, and implemented a custom PDF coordinate mapping system for precise grounding.",
    live: "",
    code: "",
  },
];
