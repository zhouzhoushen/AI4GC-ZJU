declare module "@retorquere/bibtex-parser" {
  export type BibEntry = {
    type: string;
    key: string;
    fields: Record<string, unknown>;
  };

  export type BibParseResult = {
    entries: BibEntry[];
    errors: unknown[];
  };

  export type BibParseOptions = {
    /** When false, titles are kept verbatim instead of being sentence-cased. */
    sentenceCase?: boolean;
  };

  export function parse(input: string, options?: BibParseOptions): BibParseResult;
}
