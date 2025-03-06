/** @format */

export default function Blog_hero() {
  return (
    <div className="relative ">
      <img src="https://bemins.wpbingosite.com/wp-content/uploads/2024/02/lookbook-3.jpg"></img>
      <div
        className="  items-center absolute translate(-50%, -50%)  left-[40%]
            top-[40%]  "
      >
        <h3 className="text-5xl  font-semibold text-black">Blog</h3>
        <span className="">
          <a href="/" className="hover:text-cyan-400">
            Home
          </a>
          / Blog
        </span>
      </div>
    </div>
  );
}
