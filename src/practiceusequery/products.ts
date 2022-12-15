import axios from 'axios'

const productfetchapi = axios.create({
    baseURL: `http://192.168.5.21:9000/`
})

export const fetchproducts = async () => {
    try {
        const products = await productfetchapi.get(`products`)
        const productdetails = products.data
        console.log("fetching all the data")
        return productdetails.products
    } catch (error: any) {
        throw error.message
    }
}
export const fetchsingleproduct=async(id:string|number|unknown)=>{
    try {
        const products = await productfetchapi.get(`products/${id}`)
        const productdetails = products.data
        console.log("fetchign of single product",productdetails.product[0])
        return productdetails.product[0]
    } catch (error: any) {
        throw error.message
    }
}
export const updatesingleproduct= async({...updateproduct})=>{
    try {
        const products = await productfetchapi.patch(`products/${updateproduct}`,updateproduct,
     {
        headers:{
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmFpbGFiZWxkYXRhIjp7Il9pZCI6IjYzOTA3YzA4MDJhYzkyYjI2NTAyNTYyZiIsIlVzZXJuYW1lIjoiSGFyZCBzaGV0aCJ9LCJpYXQiOjE2NzA0MTk1MzB9.KvkJr1FJaxdcphbD6TRMG6DHZM2rwsNMAGSNZnHpgu8"
        }
     }
        )
        const productdetails = products.data
        return productdetails    
    }catch (error: any) {
        throw error.message
    }
}
export const deletesingleproduct=async(id:string|number)=>{
    try {
        const products = await productfetchapi.delete(`products/${id}`)
        const productdetails = products.data
        return productdetails    
    } catch (error: any) {
        throw error.message
    }
}
export const createnewproductlocal=async({...productsdetails})=>{
    console.log("here is the createnewproductlocal function ",productsdetails)
    try {
        const createnewproduct=await axios.post(`http://localhost:3500/posts`,productsdetails)
        const watingform=await createnewproduct.data
        console.log("waiting for confirmaion")
        return watingform
    } catch (error:any) {
        console.log("post producrt error",error)
        throw error.message 
    }
}