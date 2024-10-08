export type ITagItem = {
    id: string,
    name: { [key: string]: string },
    slug: string,
    type: null,
    orderColumn: number,
    // createdAt: 2024-03-28T19:57:51.000000Z,
    // updatedAt: 2024-03-28T19:57:51.000000Z,
    pivot: {
        taggablType: string,
        taggableId: string,
        tagId: string
    }
}