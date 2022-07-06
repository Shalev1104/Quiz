enum Tables {
    Categories = 'categories',
    Questions = 'questions',
    Answers = 'answers',
}

export type DefaultColumns = {
    id: number;
    created_at: Date;
    updated_at: Date;
}

export default Tables;