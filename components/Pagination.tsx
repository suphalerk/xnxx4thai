import Link from 'next/link'
import { PaginationItem, Pagination } from '@material-ui/lab'
import { Paging } from '../interfaces/pages'

interface PaginationInterface {
    pages: Paging
}

const PaginationComponent = ({ pages }: PaginationInterface) => {
    if (pages) {
        return (
            <Pagination
                count={pages.totalPages}
                page={pages.page}
                defaultPage={pages.page}
                variant="outlined"
                shape="rounded"
                renderItem={(item) => {
                    let href = `/page/${item.page}`
                    return (<Link href={href}><PaginationItem {...item} /></Link>)
                }}
            />
        )
    } else {
        return (<></>)
    }
}

export default PaginationComponent
