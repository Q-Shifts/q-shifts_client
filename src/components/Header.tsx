export default function Header() {
    return <header className="h-[90px] flex-shrink-0 px-24 flex justify-between items-center">
        <h2 className="m-0 text-25">
            <strong>Employee</strong> Dashboard
        </h2>
        <div className="flex gap-[35px]">
            <input className="border rounded-md h-[50px] px-24 outline-none" type="text" placeholder="Search for something" />
            <div className="rounded-lg w-[50px] h-[50px] bg-gray-normal"></div>
        </div>
    </header>
}