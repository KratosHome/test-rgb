import type {Metadata} from "next";
import "./globals.scss";
import Header from "@/components/Header/Header";
import localFont from 'next/font/local'
import FrontEndDeveloper from "@/components/assets/frontEndDeveloper";

const myFont = localFont({
    src: [
        {
            path: '../components/fonts/Gilroy-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../components/fonts/Gilroy-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../components/fonts/Gilroy-Semibold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../components/fonts/Gilroy-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../components/fonts/Gilroy-Extrabold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../components/fonts/Gilroy-Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={myFont.className}>
        <Header/>
        {children}
        <div className="front-end-developer">
            <FrontEndDeveloper/>
        </div>
        </body>
        </html>
    );
}
