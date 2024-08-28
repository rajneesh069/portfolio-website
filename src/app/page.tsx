import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-3 flex flex-col lg:flex-row justify-center items-center content-center gap-48">
      {/* Photo */}
      <section>
        <Image
          src={"/image.png"}
          width={500}
          height={500}
          className="border rounded-full shadow-md pt-5"
          draggable={false}
          alt="Rajneesh's Photo"
        />
      </section>

      {/* About Me */}
      <section className="flex flex-col gap-2">
        <h1 className="text-4xl">Hi, I am a Full Stack Web Developer. </h1>
        <p className="text-xl text-center">I make websites for fun ;)</p>
      </section>

      {/* Technologies I know */}
      <section className="border border-white"></section>
    </div>
  );
}
