export default function ExpandingButton(props) {
  return (
    <div
      onClick={/*onClick*/}
      style={/**/}
      key={/*key*/}
      className={`flex-1 ${/*color*/} flex items-center justify-center text-white text-xl font-bold cursor-pointer transition-all duration-400 ease-in-out hover:flex-[8]`}
    >
      {/*label*/}
    </div>
  )
}
//necessary dependecies on package.json
/*"autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.13",*/

//index.css
/*@tailwind base;
@tailwind components;
@tailwind utilities;*/

//src files
/*postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
 */
//tailwind.config.js
// /** @type {import('tailwindcss').Config} */
//export default {
//  content: ["./index.html", "./src/**/*.{js,jsx}"],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//};

/* to call
      <div className="flex w-[900px] h-[600px] overflow-hidden rounded-xl shadow-lg mt-16">
        {buttons.map((btn) => (
          <ExpandingButton btn={btn}/>
        ))}
      </div>
 */