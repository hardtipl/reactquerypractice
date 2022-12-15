import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
// import Product from "./components/products";
const Productlist = lazy(() => import('./components/products'))
const Product = lazy(() => import('./components/product'))
const Errorpage = lazy(() => import('./components/Error'))
const Loadinpage=lazy(()=>import('./components/Loadingpage'))
const Productadd=lazy(()=>import('./components/Postproduct'))
function App() {
  return (
    <div className="App">
        <Suspense fallback={<Loadinpage/>}>
      <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/createnewproduct" element={<Productadd />} />
          <Route path="/:productid" element={<Product />} />
          <Route path="*" element={<Errorpage />} />
      </Routes>
        </Suspense>
    </div>
  );
}

export default App;
