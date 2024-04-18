"use client"
import { ThemeProvider } from "next-themes";

//for nest server components inside client components

const Providers = ({children}) =>{
return (<ThemeProvider >{children}</ThemeProvider>)
}
export default Providers