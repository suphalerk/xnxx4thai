export interface Content {
    id: number
    content_title: string
    content_url: string
    content_description: string
    remark: string
    price: string
    telephone: string
    email: string
    created_date?: string
    content_date?: string
    images?: Image[]
}

export interface Image {
    id: number
    image_path: string
    raw_url: string
    image_checksum: string
    website_url: string
    image_title: string
    created_date?: string
}
