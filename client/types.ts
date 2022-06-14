export type Category = Image & {
    name: string;
}

type Image = { url: string; }

export type Question = {
    question: string;
    answers: Answer[];
}

export type Answer = {
    answer: string;
    correct: boolean;
}

export type Pagination = {
    pageNo: number;
    total: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onPrev?: () => void;
    onNext?: () => void;
}