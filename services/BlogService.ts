interface paramsType {
    items_per_page?: string
    page?: string
    search?: string
}

export const getAllBlogs = async (params: paramsType) => {
    const urlParam = new URLSearchParams()
    if (params.items_per_page) {
        urlParam.set('items_per_page', params.items_per_page)
    }
    if (params.page) {
        urlParam.set('page', params.page)
    }
    if (params.search) {
        urlParam.set('search', params.search)
    }
    const blogs = await fetch(`${process.env.API_URL}/posts?${urlParam}`, { cache: 'no-store' })

    const blogData = await blogs.json()

    return blogData.data
}

export const getDetailBlog = async (blogId: string) => {
    const res = await fetch(`${process.env.API_URL}/posts/${blogId}`)

    return await res.json()
}