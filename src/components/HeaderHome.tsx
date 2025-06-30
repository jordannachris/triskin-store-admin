import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

interface HeaderProps {
    search: string;
    setSearch: (value: string) => void;
}

const HeaderHome = ({ search, setSearch }: HeaderProps) => {
    return (
        <header className="bg-gradient-to-r from-fuchsia-900 via-fuchsia-600 to-violet-700 font-semibold text-white p-7 min-h-24 uppercase flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="tracking-widest">Triskin Store Admin</Link>

            <div className="flex-1 flex justify-center">
                <div className="w-full max-w-lg">
                    <SearchInput
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Buscar produtos..."
                    />
                </div>
            </div>


        </header>
    );
}

export default HeaderHome;