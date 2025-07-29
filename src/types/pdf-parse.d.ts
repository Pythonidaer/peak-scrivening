// src/types/pdf-parse.d.ts

declare module 'pdf-parse' {
    interface PDFData {
      numpages: number;
      numrender: number;
      info: Record<string, unknown>;
      metadata: Record<string, unknown>;
      text: string;
      version: string;
    }
  
    type PDFParse = (dataBuffer: Buffer) => Promise<PDFData>;
  
    const pdf: PDFParse;
    export = pdf;
  }
  