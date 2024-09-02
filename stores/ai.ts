import { XLMRobertaTokenizer } from "@xenova/transformers";
import xlm_roberta_tokenizer from "@/assets/xlm-roberta-tokenizer.json";
import ollama from "ollama/browser";

const model = "bge-m3";

export const useAI = defineStore("ai", () => {
  const tokenizer = new XLMRobertaTokenizer(xlm_roberta_tokenizer, {
    bos_token: "<s>",
    eos_token: "</s>",
    sep_token: "</s>",
    cls_token: "<s>",
    unk_token: "<unk>",
    pad_token: "<pad>",
    mask_token: "<mask>",
  });

  const tokenize = (prompt: string) => {
    const tokenIds = tokenizer.encode(prompt);
    return tokenizer.model.convert_ids_to_tokens(tokenIds);
  };

  const embed = (input: string) => {
    console.log("embedding", input.length);
    return ollama
      .embed({
        model,
        input,
        truncate: false,
        options: {
          num_ctx: 8192, // equals to bge-m3 context size
        },
      })
      .then((res) => {
        console.log(res.embeddings.length);
        return res.embeddings;
      });
  };

  return {
    tokenize,
    embed,
  };
});
