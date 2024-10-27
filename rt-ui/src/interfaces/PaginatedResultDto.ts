export class PaginatedResult<T> {
    public data: T[];
    public currentPage: number;
    public pageSize: number;
    public totalRecords: number;

    constructor(data: T[], currentPage: number, pageSize: number, totalRecords: number) {
        this.data = data;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalRecords = totalRecords;
    }

    get totalPages(): number {
        return Math.ceil(this.totalRecords / this.pageSize);
    }

    get hasNextPage(): boolean {
        return this.currentPage < this.totalPages;
    }

    get hasPreviousPage(): boolean {
        return this.currentPage > 1;
    }
}
