export interface Task {
    questionId: number | undefined,
    question: string | undefined,
    answer: string | undefined,
    questionCategory: string | undefined,
    questionSubCategory: string | undefined,
    isDeleted: boolean | undefined
}