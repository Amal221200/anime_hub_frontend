import SectionLayout from "../layout/SectionLayout";

const Intro = () => {
    return (
        <main className="my-3">
            <SectionLayout className="text-center">
                <h1 className="mb-4 text-4xl font-bold">ZBPC Hub</h1>
                <p>
                    {
                        "ZBPC Hub is your ultimate destination for all the animes! It's like having a treasure trove of all the animes at your fingertips. With ZBPC Hub, you can easily find information of all your favorite animes in one convenient place. Whether you're searching for the ongoing or classic shows, ZBPC Hub has got you covered. Say goodbye to endless Google searches and hello to seamless anime discovery. It's the go-to hub for all the otakus everywhere!"
                    }
                </p>
            </SectionLayout>
        </main>
    );
}

export default Intro;