import {Category} from './category'
import {Tag} from './tag'

export interface Article {
    id: number
    userId: number
    nick: string
    username: string
    title: string
    summary: string
    content: string
    photo: string
    regionName: string
    regionId: number
    tags: Array<Tag>
    categorys: Array<Category>
    status: number
    isLock: number
    commentStatus: number
    createTime: string
}
export interface ArticleId {
    id: number
}