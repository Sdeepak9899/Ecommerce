/** @format */

export default function Images() {
  return (
    <div className="flex flex-col m-12 justify-center items-center min-h-screen flex-wrap">
      <div className="w-[1400px]  rounded-3xl overflow-hidden">
        <img
          src="https://bemins.wpbingosite.com/wp-content/uploads/2023/11/about-us.jpg"
          alt="About Us"
          className="w-full h-auto"
        />
      </div>
      <div className="text-center mt-4 flex flex-col m-12 justify-center items-center">
        <h2 className="text-4xl font-semibold">
          Dress to Impress: Mastering the Art of Personal Style
        </h2>
        <p className="  text-lg mt-2 w-[1000px]">
          Fashion trends can be understood as changes in the clothing style of
          the majority of people in a country or around the world. In
          particular, these changes create influence that causes others to
          follow suit. Usually, fashion trends often originate from experts,
          famous designers or popular trends according to the tastes of the
          crowd…
        </p>
      </div>
    </div>
  );
}
