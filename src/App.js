
import { Container, Input } from 'postcss';
import './App.css';

import Navbar from './component/NavigationBar';

import './LandingPace.css';



function App() {
  return (
    <div>
      <Navbar />
      <div></div>
      <div>
        <h1 className="h-96 bg-slate-600">
          <p className="text-white pt-40 text-5xl font-serif pl-10">
            Himadiksatria
          </p>
          <image src="belajaran.png"></image>
        </h1>
      </div>
      <div>
        <h1 className="h-10"></h1>
      </div>
      <div>
        <card className=" flex flex-row justify-center m-6">
          <a
            href="#"
            class="block p-6 m-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Visi
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              1. Memperkuat tenggang rasa sesama anggota dan seluruh mahasiswa
              PBSI untuk mewujudkan mahasiswab yang produktif.
              <br></br>
              2. Menerapkan prinsip DIGITAL (disiplin, giat dan total) dalam
              segala kegiatan supaya tercipta kepribadian yang konsisten dan
              penuh tanggung jawab. <br></br>
              3. Mengembangkan potensi mahasiswa agar terciptanya karakter sang
              juara <br></br>
              4. Menjaga hubungan kerja sama secara kekeluargaan anara mahasiswa
              baik di dalam maupun di luar <br></br>
              5. Mendorong mahasiswa agar adaptif, kreatif, dan inovatif melalui
              program kerja. 6. Menekankan sifat toleran kepada seluruh
              mahasiswa agar tetap berpegang teguh pada pancasila
            </p>
          </a>
          <a
            href="#"
            class="block p-6 m-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Misi
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Menjadikan HIMADIKSATRIA sebagai organisasi yang (DIGITAL)
              disiplin, giat, dan toal dengan disertai tanggung jawab yang penuh
              dalam kegiatan organisasi yang dibarengi rasa kekeluargaan dalam
              hubungan internal maupun eksternal dengan mengutamakan toleransi.
            </p>
          </a>
        </card>
      </div>
      <div className="bg-slate-600">
        <h1 className="text-center text-white">Total Anggota</h1>
        <div className="flex justify-center">
          <p className="text-8xl text-white">75</p>
        </div>
        <h1 className="text-center text-white">Total Depantemen</h1>
        <div className="flex justify-center">
          <p className="text-8xl text-white">6</p>
        </div>
      </div>
      <div className='p-7'>
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required=""
            ></input>
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            ></input>
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              ></input>
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      
      <div>
        <footer class="p-4 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Himadiksatria™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
