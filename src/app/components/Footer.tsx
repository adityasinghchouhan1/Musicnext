const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 sm:px-6 lg:px-8 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Music School is a premier institution dedicated to teaching the
              Art and science of Music. we nature talent from the ground up,
              fostering a vibrant community of musicians
            </p>
          </div>
          <div className="">
            {' '}
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Link
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>{' '}
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>{' '}
              </li>{' '}
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contect
                </a>{' '}
              </li>{' '}
            </ul>
          </div>
          <div className="">
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex gap-4">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Meta
                </a>{' '}
              </li>{' '}
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  X
                </a>{' '}
              </li>{' '}
            </ul>
          </div>
          <div className="">
            <h2 className="text-white text-lg font-semibold mb-4">
              Contect Us
            </h2>
            <p>New Delhi,India</p>
            <p>Delhi 10001</p>
            <p>Email : Info@musicSchool.com</p>
          </div>
        </div>
        <p className="text-center text-xs pt-8">
          2025 Music School , All Rights Reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
