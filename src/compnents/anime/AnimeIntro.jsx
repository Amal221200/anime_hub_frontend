/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SectionLayout from "../../layout/SectionLayout";
import { Play } from "lucide-react";

const AnimeIntro = ({ anime }) => {
    return (
        <main>
            <SectionLayout>
                <div className="flex flex-col gap-4 md:justify-between md:items-stretch md:flex-row">
                    <div className="flex-grow-[1] md:flex-grow-[2] h-[250px] md:basis-2 sm:h-[350px] md:w-[350px] md:h-[400px] rounded-md overflow-hidden">
                        <img src={anime.imageLink} alt={anime.title} className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="flex-grow-[1] flex flex-col justify-between md:basis-2 w-full">
                        <h1 className="mb-3 text-3xl font-bold">{anime.title}</h1>
                        <ul className="py-3 space-y-2">
                            <li><strong>Studio:</strong> {anime.studio}</li>
                            <li><strong>Artist:</strong> {anime.artist}</li>
                            <li><strong>Year:</strong> {anime.release} <small>{anime.status}</small></li>
                            <li><strong>Episodes:</strong> {anime.episodes} | Duration {anime.episodeDuration} mins</li>
                            <li><strong>Genre:</strong> {anime.genre?.map((ele) => `${ele[0].toUpperCase()}${ele.slice(1)}`).join(", ")}</li>
                            <li className="flex items-center gap-2 ">
                                <Link to={anime.watchLink} target="_blank" className="px-2 py-1 transition-all rounded-md bg-emerald-400 hover:bg-emerald-500">
                                    Watch Anime <Play className="inline p-[2px] border-2 border-black rounded-full" size={18} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="my-5">
                    <p>{anime.description}</p>
                </div>
            </SectionLayout>
        </main>
    );
}

export default AnimeIntro;