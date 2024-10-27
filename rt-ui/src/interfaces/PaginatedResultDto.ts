export interface PaginatedResult<T> {
    data: T[];
    currentPage: number;
    pageSize: number;
    totalRecords: number;
}
