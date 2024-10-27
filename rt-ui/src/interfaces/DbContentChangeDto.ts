export interface DbContentChangeDto {
    id: string;
    entityId?: string;
    entityName?: string;
    fieldName?: string;
    oldContent?: string;
    newContent?: string;
    changedBy?: string;
    changedById?: string;
    changedDateTime: string;
}
