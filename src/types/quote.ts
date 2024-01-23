type quote = {
  quoteid: string;
  tags: number;
  context: string | null;
  timestamp: number;
  lines: {
    lineid: string;
    content: string;
    author: string;
  }[];
};

export type { quote };
