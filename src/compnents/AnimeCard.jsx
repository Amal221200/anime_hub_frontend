/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { memo } from "react";
import { ArrowUpRightSquare } from "lucide-react";

// eslint-disable-next-line react/prop-types
const AnimeCard = memo(function AnimeCard({ anime }) {

    return (
        <article className="relative sm:h-[250px] h-[200px] overflow-hidden bg-gray-300 rounded-md group/anime">
            <img src={anime.imageLink} alt={anime.title} className="w-full h-full transition duration-[0.5s] transform group-hover/anime:scale-[1.2] object-top object-cover z-0" />
            <div className="absolute inset-0 z-10 grid w-full h-full px-3 py-1 space-y-1 transition-all opacity-0 bg-black/50 group-hover/anime:backdrop-blur-md group-hover/anime:opacity-100 place-content-center">
                <div className="flex flex-col items-center gap-2 text-center text-white duration-500 transition-[all] delay-[200ms] transform translate-y-[20%] opacity-0 group-hover/anime:translate-y-0 group-hover/anime:opacity-100">
                    <h2 className="text-xl font-bold">{anime.title}</h2>
                    <h4 className="font-semibold">Artist: {anime.artist}</h4>
                    <Link to={`/anime/${anime._id}`} className="flex gap-2 px-2 py-1 transition-colors border border-white hover:rounded-lg hover:bg-white hover:text-black">Read More <ArrowUpRightSquare className="border-none" /></Link>
                </div>
            </div>
        </article>
    );
})

export default AnimeCard;