import Header from "@/components/header/Header";

export default function PostLoginLayout({children}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}