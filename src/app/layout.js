
import "./globals.css";
import  {NavBar,Footer}  from "../../components/componentindex.js";
import { NFTMarketPlaceProvider } from "../../context/NFTMarketPlaceContext";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NFTMarketPlaceProvider>
        <NavBar/>
        {children}
        <Footer/>
        </NFTMarketPlaceProvider>
        
      </body>
    </html>
  );
}
