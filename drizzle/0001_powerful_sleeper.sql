CREATE INDEX IF NOT EXISTS "embeddingIndex" ON "kb" USING hnsw ("embedding" vector_cosine_ops);