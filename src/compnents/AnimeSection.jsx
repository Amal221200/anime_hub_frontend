import SectionLayout from "../layout/SectionLayout";


// eslint-disable-next-line react/prop-types
const AnimeSection = ({ children, heading }) => {
    // console.log(heading);
    return (
        <section className="my-5">
            <SectionLayout>
                <h2 className="mb-3 text-3xl font-bold">{heading || 'Popular Anime'}</h2>
                <div className="grid items-center justify-center gap-3 lg:grid-cols-3 sm:grid-cols-2">
                    {children}
                </div>
            </SectionLayout>
        </section>);
}

export default AnimeSection;