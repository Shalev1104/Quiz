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

export type Timer = {
    timestamp: number;
    onTick?: () => void;
    onExpire?: () => void;
}

export type Pagination = {
    pageNo: number;
    total: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onPrev?: () => void;
    onNext?: () => void;
}

export type Provider = {
    children: import('react').ReactNode;
}

export type Quiz = {
    category: Category['name'];
    questions: Question[];
    answers: Answer[];
    currentQuestion: Question;
    questionNo: Pagination['pageNo'];
    totalQuestions: Pagination['total'];
    timer: Timer['timestamp'];
    finish: boolean;
    score: number;
    previousQuestion: Pagination['onPrev'];
    nextQuestion: Pagination['onNext'];	
    toggleQuestion: (questionNo: number) => void;
    onAnswer: (answer: Answer) => void;
    isSelected: (answer: Answer) => boolean;
    isAnswersMarked: () => boolean;
    finishQuiz: () => void;
}

export type useQuiz = {
    category: Category['name'];
    questions: Quiz['questions'];
}

export type useTheme = {
    darkTheme: boolean;
    toggleTheme: () => void;
}

export type Error = {
    message: string;
}