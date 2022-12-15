import { lazy } from 'react'
import { useParams } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
import { useQuery } from 'react-query'
import { fetchsingleproduct } from '../practiceusequery/products'
const Errorpage = lazy(() => import('./Error'))
const Loadpage = lazy(() => import('./Loadingpage'))

const Product = () => {
    const { productid } = useParams()
    const { data:productinfo, isError, isLoading }: any = useQuery(['single product', productid], () => fetchsingleproduct(productid), {
        // in here when the enable: false then there will never make an api call in react because this will not call the api call
        // here is passes Boolean because of the productid till product id is not recived don't make an api call
        enabled: Boolean(productid)
    })
    console.log(productinfo)
    if (isLoading) {
        return (
            <Loadpage />
            )
        }
        if (isError) {
            return (
                <Errorpage />
                )
            }
            const { _id, Productname, Productshortdescription, Productlongdescription } = productinfo
            console.log("here is the list of destructures ", _id, Productname, Productshortdescription)
    return (
        <div>
            <div>
                <div>
                    <label >Product Name:</label>
                    <span>
                        {Productname}
                    </span>
                </div>
                <div>
                    <label >Product short description:</label>
                    <span>
                        {Productshortdescription}
                    </span>
                </div>
                <div>
                    <label >Product long description:</label>
                    <span>
                        {Productlongdescription}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product