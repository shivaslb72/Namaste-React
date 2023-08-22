import Header from "../Header"
import {render} from "@testing-library/react" 
import { Provider } from "react-redux"
import store from "../../utils/store"  
import {StaticRouter} from "react-router-dom/server"
test("Logo should rendering on header",()=>{

    //load header
   
    const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)
     //check if logo is loaded
    const logo = header.getAllByTestId("logo")
    // console.log(logo)
    expect(logo[0].src).toBe("http://localhost/dummy.png")

})

test("Cart Should have 0 items on rendering header",()=>{
    //load header

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    //check if cart has items or not
    const cart = header.getByTestId("cart")
    expect(cart.innerHTML).toBe("Cart - 0 items")
})