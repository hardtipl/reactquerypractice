import { ChangeEvent, FormEvent, useState } from 'react'
import { QueryClient, useMutation } from 'react-query'
import { createnewproductlocal } from '../practiceusequery/products'

const Postproduct = () => {
    const [products, setProducts] = useState({ product: "" })
    // method 1
    // start of method 1
    //     const queryclient = new QueryClient()
    //     const {isSuccess, mutate,isLoading,isError,error ,} = useMutation(createnewproductlocal,{onSuccess:()=>{
    // queryclient.invalidateQueries(['all product list'])
    //     }})
    // End of method 1
    // method 2
    // start of method 2
    const queryclient = new QueryClient()
    const { isSuccess, mutate, isLoading, isError, error, } = useMutation(createnewproductlocal, {
onMutate:(productinfo)=>{
    queryclient.setQueriesData(['all product list'],productinfo)
},
        onSuccess: () => {
            queryclient.invalidateQueries(['all product list'])
        }
    })
    // End of method 2
    // const {isSuccess, mutate,isLoading,isError,error ,} = useMutation(createnewproductlocal)
    console.log("from post product", isSuccess, mutate, isLoading, isError, error)
    const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(products)
        // method1 to update content right away

    }
    if (isError) {
        return (
            <>
                <p>There is something wrong with Network </p>
            </>
        )
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <label >Product Name</label>
                    <input type="text" name='product' value={products.product} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        console.log(e.target.value, e.target.name)
                        setProducts({ product: e.target.value })
                    }} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Postproduct