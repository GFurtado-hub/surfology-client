import React from 'react';
import Title from '../components/title';
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Team Member 1 */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-md text-center w-72 transform transition duration-300 hover:scale-105"> {/* Added bg-blue-100 */}
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4">
            <img
              src="https://avatars.githubusercontent.com/u/183499809?v=4"
              alt="Francesco Torchia"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-prata-regular">Francesco Torchia</h3>
          <p className="surfer text-gray-400">IronHack Student</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/FraT97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/francesco-torchia-wd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-md text-center w-72 transform transition duration-300 hover:scale-105"> {/* Added bg-blue-100 */}
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4">
            <img
              src="https://avatars.githubusercontent.com/u/183815607?v=4"
              alt="Gonçalo Furtado"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-prata-regular">Gonçalo Furtado</h3>
          <p className="surfer text-gray-400">IronHack Student</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/GFurtado-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;