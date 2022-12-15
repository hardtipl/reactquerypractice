import { lazy } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { fetchproducts } from "../practiceusequery/products"
const Errorpage = lazy(() => import('./Error'))
const Loadpage = lazy(() => import('./Loadingpage'))
const Productlist = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isError, isLoading } = useQuery(['all product list'], () => fetchproducts(), 
    // { enabled: Boolean(true) }
    )
    console.log(data)
    if (isError) {
        return (
            <Errorpage />
        )
    }
    if (isLoading) {
        <Loadpage />
    }
    console.log("product list", data)
    return (
        <div>
            <ul>
                {data?.map((product: any) => {
                    return (
                        <Link to={`${product._id}`}>
                            <li key={`${product._id}`}>{product?.Productname}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Productlist