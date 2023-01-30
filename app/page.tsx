"use client";

// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })

import { ChakraProvider } from "@chakra-ui/react";
import Features from "./features";
import Header from "./upHead";
// import Practice from "./Practice";
import Pricing from "./pricingui";


export default function Home() {
  return <ChakraProvider>
    <Header />
    <Pricing />
    <Features />
  </ChakraProvider>;
}
