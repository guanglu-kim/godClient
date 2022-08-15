export default function MainLayout({ children, nav }) {
    return <div className="flex flex-col w-full h-full">
        <div className="flex-1">{children}</div>
        {nav}
    </div>
}